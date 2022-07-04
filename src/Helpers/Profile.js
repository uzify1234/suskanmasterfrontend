import React , {useState,useEffect} from 'react';
import db, { auth, storage } from './Firebase';
import './Profile.css';

function Profile(props) {

    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [mobile, setmobile] = useState("");
    const [password, setpassword] = useState("");
    const [address, setaddress] = useState("");
    const [city, setcity] = useState("");
    const [arn, setarn] = useState("");
    const [website, setwebsite] = useState("");
    const[companyName, setCompanyName] = useState("");
    const [amfiregistered, setamfiregistered] = useState("");

    const [selectedImage, setSelectedImage] = useState(null);
    const [tagline, settagline] = useState("");
    const [oldtagline, setoldtagline] = useState("");
    const [rawfile, setrawfile] = useState(null);
    const [currentlyuploading, setcurrentlyuploading] = useState(false);

    const [user, setuser] = useState(null);

    const [skippable, setskippable] = useState(false);
    useEffect(async () => {
     auth.onAuthStateChanged((user) => {
            if (user) {
              var uid = user.uid;
              db.collection('users').doc(uid).get().then(userinfo => {
                  console.log(userinfo.data());
                  if(userinfo.data() !== undefined) {
                  setuser({id : userinfo.id , ...userinfo.data()});
                  setfirstname(userinfo.data().firstname);
                  setlastname(userinfo.data().lastname);
                  setmobile(userinfo.data().mobile);
                  setaddress(userinfo.data().address);
                  setarn(userinfo.data().arn);
                  setcity(userinfo.data().city);
                  setwebsite(userinfo.data().website);
                  setCompanyName(userinfo.data().companyname);
                  setSelectedImage(userinfo.data().logourl !== undefined ? userinfo.data().logourl : null);
                  if(userinfo.data().isprofileverified === true) {
                    setskippable(true);
                  }
                }
                else {
                    setuser({id : uid,email : user.email});
                    setskippable(false);
                }
              })
            } else {
            }
          });
    }, []);

    const processupload = (e) => {
        if(rawfile == null && (oldtagline == tagline || tagline === null || tagline === "")) {

        }
        else if(rawfile == null && tagline !== "") {
            setcurrentlyuploading(true);
            db.collection('users').doc(user.id).update({
                tagline : tagline
            }).then(done => {
                alert("Updated");
                setcurrentlyuploading(false);
            }).catch(err => {
                setcurrentlyuploading(false);
            })
        }
        else {
            setcurrentlyuploading(true);
            storage.ref().child('users/'+user.id+'/').put(rawfile).then((snapshot) => {
                console.log(snapshot);
                storage.ref().child('users/'+user.id+'/').getDownloadURL().then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    db.collection('users').doc(user.id).update({
                        logourl : downloadURL,
                        tagline : tagline
                    }).then(done => {
                        alert("Updated");
                        setcurrentlyuploading(false);
                        setrawfile(null);
                    }).catch(err => {
                        setcurrentlyuploading(false);
                    })
                  }).catch(efg => {
                    setcurrentlyuploading(false);
                  });
              });
        }

  }
    
    const updateprofile = () => {
        if(firstname == "" || lastname == "" || mobile == "") {
            alert("Please enter Firstname, Lastname, Mobile and AMFI Registered")
        }
        else {
            db.collection('users').doc(user.id).update({
                firstname : firstname,
                lastname : lastname,
                mobile : mobile,
                address : address,
                arn : arn,
                city : city,
                isprofileverified : true,
                createdon : Math.floor(Date.now() / 1000),
                isactive : true,
                website: website,
                companyname : companyName
            }).then(done => {
                alert("Profile Updated");
                props.setdisappearmodal(true);
            }).catch(err => {
                db.collection('users').doc(user.id).set({
                    firstname : firstname,
                    lastname : lastname,
                    mobile : mobile,
                    address : address,
                    arn : arn,
                    city : city,
                    isprofileverified : true,
                    createdon : Math.floor(Date.now() / 1000),
                    isactive : true,
                    usertype : 'VC',
                    email : user.email,
                    state : '',
                    dob : '',
                    website: website,
                    companyname : companyName
                }).then(done => {
                    alert("Profile Updated");
                    window.location.reload();
                    props.setdisappearmodal(true);
                }).catch(err => {
                    console.log(err);
                })
            })
        }
    }

    const backtapped = () => {
        props.setdisappearmodal(true);
    }

    return (
        <div className="profilecompletesection">
                <div className="innerregion">
                    <div className='left'>
                    {props.forced === false && <button onClick={backtapped}>Close</button>}
                    <h3>Update Profile</h3>
                    <div className="layoutform" style={{display : 'flex',flexDirection : 'column'}}>
                    <div className="eachfield">
                    <h4>Firstname</h4>
                    <input type="text" placeholder="Enter firstname" onChange={e => setfirstname(e.target.value)} value={firstname}/>
                    </div>
                    <div className="eachfield">
                    <h4>Lastname</h4>
                    <input type="text" placeholder="Enter lastname" onChange={e => setlastname(e.target.value)} value={lastname}/>
                    </div>
                    <div className="eachfield">
                    <h4>Mobile no</h4>
                    <input type="number" placeholder="Enter Mobile" onChange={e => setmobile(e.target.value)} value={mobile}/>
                    </div>
                    <div className="eachfield">
                    <h4>Address</h4>
                    <input type="text" placeholder="Enter address" onChange={e => setaddress(e.target.value)} value={address}/>
                    </div>
                    <div className="eachfield">
                    <h4>ARN</h4>
                    <input type="text" placeholder="Enter arn" onChange={e => setarn(e.target.value)} value={arn}/>
                    </div>
                    <div className="eachfield">
                    <h4>City</h4>
                    <input type="text" placeholder="Enter city" onChange={e => setcity(e.target.value)} value={city}/>
                    </div>
                    <div className="eachfield">
                    <h4>Website</h4>
                    <input type="text" placeholder="Enter website" onChange={e => setwebsite(e.target.value)} value={website}/>
                    </div>
                    <div className="eachfield">
                    <h4>Company Name</h4>
                    <input type="text" placeholder="Enter company name" onChange={e => setCompanyName(e.target.value)} value={companyName}/>
                    </div>
                    {/* <div className="eachfield">
                    <h4>Amfi registered Mutual Fund Distributor</h4>
                    <input type="text" placeholder="Enter AMFI registered mutual fund distributor" onChange={e => setamfiregistered(e.target.value)} value={amfiregistered}/>
                    </div> */}
              
                    <button onClick={updateprofile}>Update Profile</button>
                    </div>
                </div>
                <div className='right'> 
                    <h4>Upload your logo</h4>
                    <img src={selectedImage} width={200} height='auto' />
                    <input
                type="file"
                name="myImage"
                accept="image/*"
                onChange={(e) => {
                console.log(URL.createObjectURL(e.target.files[0]));
                setSelectedImage(URL.createObjectURL(e.target.files[0]));
                setrawfile(e.target.files[0]);
                }}
            />
            <h4>Your Tagline</h4>
            <textarea defaultValue={tagline} onChange={e => settagline(e.target.value)}></textarea>
            {currentlyuploading ? '' : <button onClick={processupload} >Update</button>}
                </div>
            
        </div>

    </div>
    )
}

export default Profile
