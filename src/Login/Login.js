import React,{useState,useEffect} from 'react'
import db, { auth } from '../Helpers/Firebase';
import { useNavigate, useParams } from "react-router-dom";
import './Login.css';
import Header from '../Helpers/Header';
import Logo from '../Assets/Images/vgnewlogo.png';

function Login() {
    const navigate = useNavigate();

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate('/vgdashboard');
            } else {
                
            }
          });
    }, [])

    const forgotpasswordtapped = () => {
        if(email == "" || email == " ") {
            alert("Please enter your email and click on Forgot Password");
        }
        else {
            auth.sendPasswordResetEmail(email)
            .then(() => {
            alert("Password reset link has been sent to "+email+". Please check spam folder if you can not find password reset email in your inbox");
            })
            .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert("Error sending password reset link");
            });
        }
    }

    const logintapped = () => {
        if(email === "" || password === "") {
            alert("Please Enter Email/Password");
        }
        else {
            auth.signInWithEmailAndPassword(email,password).then(user => {
                db.collection('users').doc(user.user.uid).get().then(det => {
                    if(det.data() === undefined) {
                        navigate("/vgdashboard");
                    }
                    else if(det.data().isactive === true) {
                        navigate("/vgdashboard");
                    }
                    else {
                        auth.signOut().then(() => {
                            alert("This account is not active, kindly contact admin");
                            navigate("/");
                        })
                    }
                })
                
            }).catch(err => {
                console.log(err);
                alert("Login Failed");
            })
        }
    }

    return (
        <div className="loginsec">
            <div className="box">
                <img src={Logo} width={300}/>
                <h4>Login to Continue</h4>
                <input type="email" placeholder="Enter Email" value={email} onChange={e => setemail(e.target.value)}/>
                <input type="password" placeholder="Enter Password" value={password} onChange={e => setpassword(e.target.value)}/>
                <button onClick={logintapped}>Login</button>
                <button onClick={forgotpasswordtapped}>Forgot Password ?</button>
            </div>
        </div>
    )
}

export default Login
