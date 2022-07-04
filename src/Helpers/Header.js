import React, {useEffect,useState} from 'react'
import './Header.css';
import Logo from '../Assets/Images/vgnewlogo.png';
import db, { auth } from './Firebase';
import { useNavigate, useParams } from "react-router-dom";
import Profile from './Profile';

function Header() {
    const navigate = useNavigate();


    const [userid, setuserid] = useState(null);
    const [user, setuser] = useState(null);
    const [disappearmodal, setdisappearmodal] = useState(true);
    useEffect(async () => {
        auth.onAuthStateChanged((user) => {
            if (user) {
              var uid = user.uid;
              setuserid(uid);
              db.collection('users').doc(uid).get().then(userinfo => {
                  console.log(userinfo.data());
                  if(userinfo.data() === undefined) {
                    setdisappearmodal(false);
                  }
                  else if(userinfo.data().isprofileverified === true) {
                    setuser(userinfo.data());
                      setdisappearmodal(true);
                  }
                  else {
                    setdisappearmodal(false);
                  }
              })
            } else {
            }
          });
    }, []);

    const logouttapped = () => {
        auth.signOut().then(() => {
            navigate("/volatilitydashboard");
        })
    }

    return (
        <div className='header'>

           <img src={Logo} width={200}/>
           {user && disappearmodal === false && <Profile setdisappearmodal={setdisappearmodal} forced={!(user.isprofileverified === true)}/>}
           {user === null && userid !== null && disappearmodal === false && <Profile setdisappearmodal={setdisappearmodal} forced={(userid && !user )}/>}
           {user && <div className="profile">
               <h3 style={{marginLeft : 20,marginTop : 0,marginBottom:10,paddingTop : 0,paddingLeft : 0}}>{user.firstname} {user.lastname}</h3>
               <h4 style={{marginLeft : 20,marginTop : 0,marginBottom:16,paddingTop : 0,color : 'grey',paddingLeft : 0}}>{user.usertype === "FFF Pro Trial" ? "FFF Pro" : user.usertype}</h4>
               <div className="layer">
                <button onClick={() => navigate('/vgdashboard')}>Back to Dashboard</button>
                   <button onClick={() => setdisappearmodal(false)}>View Profile</button>
                   <button onClick={logouttapped}>Logout</button>
               </div>
           </div>}
        </div>
    )
}

export default Header
