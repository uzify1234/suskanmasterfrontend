import React,{useState,useEffect} from 'react'
import './Dashboard.css';
import Header from '../Helpers/Header.js';
import Calendar from '../Assets/Images/calendar.svg';
import Coin from '../Assets/Images/coin.svg';
import Division from '../Assets/Images/division.svg';
import Game from '../Assets/Images/game.svg';
import Video from '../Assets/Images/video.svg';
import Ppt from '../Assets/Images/ppt.svg';
import Fire from '../Assets/Images/fire.svg';
import Dollar from '../Assets/Images/dollar.svg';
import Calculator from '../Assets/Images/calculator.svg';
import People from '../Assets/Images/people.svg';
import Info from '../Assets/Images/info.svg';
import { useNavigate, useParams } from "react-router-dom";
import db, { auth } from '../Helpers/Firebase';


function Dashboard() {
    const navigate = useNavigate();

    const [user, setuser] = useState(null);


    

    useEffect(async () => {
        auth.onAuthStateChanged((user) => {
            if (user) {
              var uid = user.uid;
              db.collection('users').doc(uid).get().then(userinfo => {
                  console.log(userinfo.data());
                  if(userinfo.data() === undefined) {

                  }
                  else {
                    setuser(userinfo.data());
                    if(userinfo.data().usertype === "FFF Pro Trial") {
                        if(userinfo.data().expiretime !== undefined) {
                            if(Math.floor(Date.now() / 1000) > userinfo.data().expiretime){
                                alert("Trial expired, Kindly Contact Admin");
                                auth.signOut().then(() => {
                                    navigate("/volatilitydashboard");
                                })
                            }
                        }
                    }
                  }
              })
            } else {
                navigate('/');
            }
          });
    }, []);

    const allvcsdashboarditems1 = [
        {title : "Game Software",icon : Game , action : "/gamesoftware"},
        {title : "Asset Allocation",icon : Division , action : "/assetallocation"},
        {title : "Physical Games",icon : Division , action : "/physicalgames"},
        {title : "PPT's",icon : Ppt , action : "/ppts"}
    ]
    const allvcsdashboarditems2 = [
        {title : "Fundamental Analysis",icon : Dollar , action : "/fundamentalanalysis"},
        {title : "Mutual Funds Analysis",icon : Dollar , action : "/mutualfundsanalysis"},
        {title : "Priority Selection Funds",icon : Coin , action : "/nominatedfunds"}        
    ]
    const allvcsdashboarditems5 = [
        {title : "Mutual Funds Pick",icon : Coin , action : "/mutualfundspick"},
        {title : "Monthly Review",icon : Calendar , action : "/monthlyreview"}
    ]
    const allvcsdashboarditems3 = [
        {title : "One Page Financial Planner",icon : Dollar , action : "/financialplanningtool"},
        {title : "Detailed Financial Plan",icon : Dollar , action : "/detailedfinancialplan"},
        {title : "Volatility Calculators",icon : Calculator , action : "/calculators"}
    ]

    const allvcsdashboarditems4 = [
        {title : "Videos",icon : Video , action : "/videos"},
        {title : "Master Class",icon : Fire , action : "/masterclass"},
        {title : "FFF Conference Full Videos",icon : Fire , action : "/fffconference"},
        {title : "RVCC Modules",icon : Coin , action : "/rvccmodules"},
        {title : "Beyond Classroom",icon : People , action : "/beyondclassroom"},
        {title : "How to Conduct IAP",icon : Video , action : "/howtoconductiap"},
        {title : "Creativity Game",icon : People , action : "/creativitygame"},
        {title : "Advanced Selling",icon : Video , action : "/advancedselling"},
        {title : "Asset Allocation Videos",icon : Video , action : "/assetallocationvideos"}
    ]

    const allvcsdashboarditems6 = [
        {title : "Templates",icon : Division , action : "/templates"},
        {title : "Your's Truely",icon : Division , action : "/yourstruely"},
        {title : "Explore Ratios",icon : Info , action : "/resources"}
    ]

    const allprodashboarditems = [
        {title : "Monthly Review",icon : Calendar , action : "/monthlyreview"},
        {title : "Mutual Funds Analysis",icon : Dollar , action : "/mutualfundsanalysis"},
        {title : "Fundamental Analysis",icon : Dollar , action : "/fundamentalanalysis"},
        {title : "One Page Financial Planner",icon : Dollar , action : "/financialplanningtool"},
        {title : "Resources",icon : Info , action : "/resources"},
        {title : "Events",icon : Calendar , action : "/events"},
        {title : "Priority Selection Funds",icon : Coin , action : "/nominatedfunds"},
        {title : "VG Tools",icon : Calculator , action : "/calculators"}
    ]

    const onClickedTile = (item) => {
        if(item.action === "/monthlyreview" || item.action === "/physicalgames" || item.action === "/howtoconductiap" || item.action === "/mutualfundspick" || item.action === "/vgdashboard" || item.action == "/resources" || item.action === "/mutualfundsanalysis" || item.action === "/assetallocation" || item.action === "/videos" || item.action === "/ppts"|| item.action === "/masterclass" || item.action === "/rvccmodules" || item.action === "/templates" || item.action === "/yourstruely" || item.action === "/detailedfinancialplan" || item.action === "/beyondclassroom" || item.action === "/illusiongames" || item.action === "/financialmarketpuzzle" || item.action === "/gamesoftware" || item.action === "/boardandcardgames" || item.action === "/leadershipgames" || item.action === "/nominatedfunds" || item.action === "/fffconference" || item.action === "/creativitygame" || item.action === "/advancedselling" || item.action === "/assetallocationvideos") {
           navigate(item.action);
        }
        if(item.action === "/assetallocation") {
            //  window.location.href = "https://volatilitygame.com/game/assetallocation.php";
        }
        if(item.action === "/illusiongames") {
            // window.location.href = "https://volatilitygame.com/game/illusiongames.php";
        }
        if(item.action === "/financialmarketpuzzle") {
            // window.location.href = "https://volatilitygame.com/game/FinancialMarketpuzzels.php";
        }
        if(item.action === "/gamesoftware") {
            // window.location.href = "https://volatilitygame.com/game/screengames.php";
        }
        if(item.action === "/boardandcardgames") {
            // window.location.href = "https://volatilitygame.com/game/boardgames.php";
        }
        if(item.action === "/leadershipgames") {
            // window.location.href = "https://volatilitygame.com/game/Leadership%20Game.php";
        }
        if(item.action === "/videos") {
            // window.location.href = "https://volatilitygame.com/game/videos.php";
        }
        if(item.action === "/ppts") {
            // window.location.href = "https://volatilitygame.com/game/ppts.php";
        }
        if(item.action === "/masterclass") {
            // window.location.href = "https://volatilitygame.com/game/masterclass.php";
        }
        if(item.action === "/rvccmodules") {
            // window.location.href = "https://volatilitygame.com/game/RVCCModules.php";
        }
        if(item.action === "/mutualfundsanalysis") {
            // window.location.href = "https://volatilitygame.com/mutualfundstool/";
        }
        if(item.action === "/fundamentalanalysis") {
            window.location.href = "https://volatilitygame.com/volatilitytools/fp.html";
        }
        if(item.action === "/financialplanningtool") {
            window.location.href = "https://volatilitygame.com/volatilitytools/financial-planning/finplan.html";
        }
        if(item.action === "/templates") {
            // window.location.href = "https://volatilitygame.com/game/templates.php";
        }
        if(item.action === "/yourstruely") {
            // window.location.href = "https://volatilitygame.com/game/yourstruely.php";
        }
        if(item.action === "/detailedfinancialplan") {
            // window.location.href = "https://volatilitygame.com/game/Detailed%20Financial%20Plan.php";
        }
        if(item.action === "/calculators") {
            window.location.href = "https://volatilitygame.com/apitools/";
        }
        if(item.action === "/beyondclassroom") {
            // window.location.href = "https://volatilitygame.com/game/BeyondClassroom.php";
        }
        if(item.action === "/resources") {
            // window.location.href = "https://volatilitygame.com/volatilitytools/resources.html";
        }
        if(item.action === "/events") {

        }
        if(item.action === "/backend") {

        }
    }
    return (
        <div className="dashboard">
            <Header />
            
            {user && (user.usertype === "FFF Pro" || user.usertype === "Both VC and Pro" || user.usertype === "FFF Pro Trial") && <div className="dashboarditems">
            <div className="newrow">
                    {user.isadmin === true && <div className="eachdashboarditem" onClick={() => {window.location.href='https://volatilitygame.com/volatilitydashboardbackend/'}}>
                            <div className="content">
                                <div className="allcontent">
                                    <img src={People} width={80} />
                                    <h4>Backend</h4>
                                </div>
                            </div>
                        </div>}

                        {user.isadmin === true && <div className="eachdashboarditem" onClick={() => {window.location.href='https://volatilitygame.com/registerform/'}}>
                            <div className="content">
                                <div className="allcontent">
                                    <img src={People} width={80} />
                                    <h4>FFF PRO Trial Register Link</h4>
                                </div>
                            </div>
                        </div>}
            </div>
            <div className="newrow">
                {
                    allprodashboarditems.map(eachitem => {
                        return (
                        <div className="eachdashboarditem" onClick={() => onClickedTile(eachitem)}>
                            <div className="content">
                                <div className="allcontent">
                                    <img src={eachitem.icon} width={80} />
                                    <h4>{eachitem.title}</h4>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
            </div>}
            {user && (user.usertype === "VC" || user.usertype === "Both VC and Pro") &&<div className="dashboarditems">
            <div className="newrow">
            {user.isadmin === true && <div className="eachdashboarditem" onClick={() => {window.location.href='https://volatilitygame.com/volatilitydashboardbackend/'}}>
                            <div className="content">
                                <div className="allcontent">
                                    <img src={People} width={80} />
                                    <h4>Backend</h4>
                                </div>
                            </div>
                        </div>}
            
                        {user.isadmin === true && <div className="eachdashboarditem" onClick={() => {window.location.href='https://volatilitygame.com/registerform/'}}>
                            <div className="content">
                                <div className="allcontent">
                                    <img src={People} width={80} />
                                    <h4>FFF PRO Trial Register Link</h4>
                                </div>
                            </div>
                        </div>}
            </div>
                <div className="newrow">
                {
                    allvcsdashboarditems1.map(eachitem => {
                        return (
                        <div className="eachdashboarditem" onClick={() => onClickedTile(eachitem)}>
                            <div className="content">
                                <div className="allcontent">
                                    <img src={eachitem.icon} width={80} />
                                    <h4>{eachitem.title}</h4>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
                </div>
                <div className="newrow">
                                {
                    allvcsdashboarditems2.map(eachitem => {
                        return (
                        <div className="eachdashboarditem" onClick={() => onClickedTile(eachitem)}>
                            <div className="content">
                                <div className="allcontent">
                                    <img src={eachitem.icon} width={80} />
                                    <h4>{eachitem.title}</h4>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
                </div>
                <div className="newrow">
                                {
                    allvcsdashboarditems3.map(eachitem => {
                        return (
                        <div className="eachdashboarditem" onClick={() => onClickedTile(eachitem)}>
                            <div className="content">
                                <div className="allcontent">
                                    <img src={eachitem.icon} width={80} />
                                    <h4>{eachitem.title}</h4>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
                </div>
                <div className="newrow">
                                {
                    allvcsdashboarditems4.map(eachitem => {
                        return (
                        <div className="eachdashboarditem" onClick={() => onClickedTile(eachitem)}>
                            <div className="content">
                                <div className="allcontent">
                                    <img src={eachitem.icon} width={80} />
                                    <h4>{eachitem.title}</h4>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
                </div>
                <div className="newrow">
                {
                    allvcsdashboarditems5.map(eachitem => {
                        return (
                        <div className="eachdashboarditem" onClick={() => onClickedTile(eachitem)}>
                            <div className="content">
                                <div className="allcontent">
                                    <img src={eachitem.icon} width={80} />
                                    <h4>{eachitem.title}</h4>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
                </div>
                <div className="newrow">
                {
                    allvcsdashboarditems6.map(eachitem => {
                        return (
                        <div className="eachdashboarditem" onClick={() => onClickedTile(eachitem)}>
                            <div className="content">
                                <div className="allcontent">
                                    <img src={eachitem.icon} width={80} />
                                    <h4>{eachitem.title}</h4>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
                </div>
            </div> }
        </div>
    )
}

export default Dashboard
