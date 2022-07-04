import React,{useState,useEffect} from 'react'
import db, { auth } from '../Helpers/Firebase';
import Header from '../Helpers/Header';
import './Monthlyreview.css';
import { useNavigate, useParams } from "react-router-dom";

function Monthlyreview() {

    const navigate = useNavigate();


    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [mobile, setmobile] = useState("");

    const [introsubmittedcheck, setintrosubmittedcheck] = useState(false);
    const [formsubmittedcheck, setformsubmittedcheck] = useState(false);

    useEffect(() => {
      auth.onAuthStateChanged((user) => {
          if (user) {
          } else {
              navigate('/');
          }
        });
  }, [])

    const [answers, setanswers] = useState([
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ]);

    const setvalue = (value,index) => {
        let copy = answers;
        copy[index] = value;
        setanswers(copy);
        console.log(copy);
    }

    const introsubmitted = () => {
        if(name !== "" && email !== "" && mobile !== "") {
            setintrosubmittedcheck(true);
        }
    }

    const formsubmitted = () => {
        var allattempted = true;
        var missingindex = 0;
        answers.forEach((each,index) => {
            if(each === null) {
                allattempted = false;
                missingindex = index;
            }
        })
        if(allattempted === false) {
            alert("Please answer question no "+(missingindex + 1));
        }
        else {
            var id = db.collection("monthlyreviews").doc().id;
            db.collection("monthlyreviews").doc(id).set({
    			name: name,
    			email: email,
    			mobile: mobile,
    			createdAt : Math.floor(Date.now() / 1000),
    			one : answers[1],
    			two : answers[2],
    			three : answers[3],
    			four : answers[4],
    			five : answers[5],
    			six : answers[6],
    			seven : answers[7],
    			eight : answers[8],
    			nine : answers[9],
                month : answers[0]
			})
			.then(function(docRef) {
                setformsubmittedcheck(true);
			})
			.catch(function(error) {
    			console.error("Error adding document: ", error);
			});
        }
    }

    return (
        <div className='monthlyreview' >
            <Header />
            {!introsubmittedcheck && <div className="questionform" id="qf1">
                <h3>Monthly Review</h3>
                <div className="row">
                    <h3>Enter your details</h3>
                </div>
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Name </span>
                </div>
                <input id="name" type="text" name="username" className="form-control" onChange={e => setname(e.target.value)} placeholder=""  value={name} />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1" >Email </span>
                    </div>
                    <input id="email" type="email" name="username" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" onChange={e => setemail(e.target.value)}  value={email}/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1" >Mobile </span>
                    </div>
                    <input id="mobile" type="text" name="username" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" onChange={e => setmobile(e.target.value)} value={mobile}/>
                </div>
                <button onClick={introsubmitted}>Submit</button>
            </div>}

            {introsubmittedcheck && formsubmittedcheck && <div className="questionform" id="qf1">
                <h3>Monthly Review</h3>
                <div className="row">
                    <h3>Your details have been submitted. Thank you</h3>
                </div>

                <button onClick={() => navigate("/volatilitydashboard")}>Back to Home</button>
            </div>}

            {
                introsubmittedcheck && !formsubmittedcheck && <div className="questionform" id="qf2">
                  <h3>Monthly Review</h3>
                
                <div className="row"> <h3>Answer the following questions</h3> </div>
                
                
                      <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Enter Month </span>
                      </div>
                      <input id="month" type="month" name="username" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" onChange={e => setvalue(e.target.value,0)}/>
                    </div>
                
                
                
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Number of IAP/ VG done </span>
                      </div>
                      <input id="1" type="number" name="username" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" onChange={e => setvalue(e.target.value,1)}/>
                    </div>
                
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Total number of people attended your IAP:</span>
                      </div>
                      <input id="2" type="number" name="username" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" onChange={e => setvalue(e.target.value,2)} />
                    </div>
                
                
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">No of Financial Plans Made:</span>
                      </div>
                      <input id="3" type="number" name="username" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" onChange={e => setvalue(e.target.value,3)}/>
                    </div>
                
                    
                
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text desktop" id="basic-addon1">How many classrooms training done with SSL Academy (online and offline): </span>
                         <span className="input-group-text mobile" id="basic-addon1">How many classrooms training done with <br></br>SSL Academy (online and offline): </span>
                      </div>
                      <input id="4" type="number" name="username" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" onChange={e => setvalue(e.target.value,4)}/>
                    </div>
                
                
                     <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text desktop" id="basic-addon1">Active Clients you Had last month (including new clients Made last month): </span>
                         <span className="input-group-text mobile" id="basic-addon1">Active Clients you Had last month <br></br>(including new clients Made last month): </span>
                      </div>
                      <input id="5" type="number" name="username" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" onChange={e => setvalue(e.target.value,5)}/>
                    </div>
                
                     <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Number of new clients added last month: </span>
                      </div>
                      <input id="6" type="number" name="username" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" onChange={e => setvalue(e.target.value,6)}/>
                    </div>
                
                
                         <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Number of new SIP in Previous Month:</span>
                      </div>
                      <input id="7" type="number" name="username" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" onChange={e => setvalue(e.target.value,7)}/>
                    </div>
                
                
                      <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">No of Running SIP as on previous Month:</span>
                      </div>
                      <input id="8" type="number" name="username" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" onChange={e => setvalue(e.target.value,8)}/>
                
                    </div>
                
                
                     <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text desktop" id="basic-addon1">AUM as on last date of the Previous Month:</span>
                        <span className="input-group-text mobile" id="basic-addon1">AUM as on last date of the Previous Month:</span>
                      </div>
                      <input id="9" type="number" name="username" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" onChange={e => setvalue(e.target.value,9)}/>
                
                    </div>
                

                    <button onClick={formsubmitted}>Submit</button>
                </div>
            }

        </div>
    )
}

export default Monthlyreview;
