import React, {useState} from 'react'
import './Gamesoftware.css';
import Header from '../Helpers/Header'
import volatilitygame from "../Assets/Images/volatilitygame.png";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import { Link } from 'react-router-dom';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border : '4px solid #143943'
    },
  };

function Gamesoftware() {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    const [currentcategory, setcurrentcategory] = useState("");
    const handletap = (cat) => {
        setcurrentcategory(cat);
        setIsOpen(true);
    }

    return (
        <div className="gamesoftware">
             <Header />
             <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {currentcategory == "volatilitygame" && <div className="modalcontent" style={{display : 'flex',flexDirection : 'row',justifyContent : 'left'}}>
                    <a href="https://volatilitygame.com/volatilitydashboard/games/TheVolatilityGame.jar" download>
                        <div className="eachdownloads"  style={{display : 'flex',flexDirection : 'column',justifyContent : 'center',alignItems : 'center',width : '20vw',borderColor : '#143943',borderWidth : 2,borderRadius : 5}}>
                            <img src={volatilitygame} />
                            <h3 style={{color : 'black',textDecoration : 'underline'}}>Download Volatility Game</h3>
                        </div>
                    </a>
                        <div className="eachdownloads" style={{display : 'flex',flexDirection : 'column',justifyContent : 'center',alignItems : 'center',width : '20vw',borderColor : '#143943',borderWidth : 2,borderRadius : 5}}>
                            <img src={volatilitygame} />
                            <h3 style={{color : 'black',textDecoration : 'underline'}}>View Tutorial</h3>
                        </div>
                    <a href="https://volatilitygame.com/volatilitydashboard/games/How To Conduct Volatility Game.docx" download>
                        <div className="eachdownloads"  style={{display : 'flex',flexDirection : 'column',justifyContent : 'center',alignItems : 'center',width : '20vw',borderColor : '#143943',borderWidth : 2,borderRadius : 5}}>
                            <img src={volatilitygame} />
                            <h3 style={{color : 'black',textDecoration : 'underline'}}>How To Conduct Volatility Game</h3>
                        </div>
                    </a>
                    <a href="https://volatilitygame.com/volatilitydashboard/games/VolatilityGamePPT.ppt" download>
                        <div className="eachdownloads" style={{display : 'flex',flexDirection : 'column',justifyContent : 'center',alignItems : 'center',width : '20vw',borderColor : '#143943',borderWidth : 2,borderRadius : 5}}>
                            <img src={volatilitygame} />
                            <h3 style={{color : 'black',textDecoration : 'underline'}}>Download PPT</h3>
                        </div>
                    </a>
                </div> }



                {currentcategory == "volatilitydebtgame" && <div className="modalcontent" style={{display : 'flex',flexDirection : 'row',justifyContent : 'left'}}>
                    <a href="https://volatilitygame.com/volatilitydashboard/games/VolatilityDebtGame.jar" download>
                        <div className="eachdownloads"  style={{display : 'flex',flexDirection : 'column',justifyContent : 'center',alignItems : 'center',width : '20vw',borderColor : '#143943',borderWidth : 2,borderRadius : 5}}>
                            <img src={volatilitygame} />
                            <h3 style={{color : 'black',textDecoration : 'underline'}}>Download Volatility Debt Game</h3>
                        </div>
                    </a>
       
                    <a href="https://volatilitygame.com/volatilitydashboard/games/Debt Volatility Game.pptx" download>
                        <div className="eachdownloads" style={{display : 'flex',flexDirection : 'column',justifyContent : 'center',alignItems : 'center',width : '20vw',borderColor : '#143943',borderWidth : 2,borderRadius : 5}}>
                            <img src={volatilitygame} />
                            <h3 style={{color : 'black',textDecoration : 'underline'}}>Download PPT</h3>
                        </div>
                    </a>
                </div> }

                {currentcategory == "volatilitytechnicalanalysisgame" && <div className="modalcontent" style={{display : 'flex',flexDirection : 'row',justifyContent : 'left'}}>
                    <a href="https://volatilitygame.com/volatilitydashboard/games/TechnicalAnalysisGame.jar" download>
                        <div className="eachdownloads"  style={{display : 'flex',flexDirection : 'column',justifyContent : 'center',alignItems : 'center',width : '20vw',borderColor : '#143943',borderWidth : 2,borderRadius : 5}}>
                            <img src={volatilitygame} />
                            <h3 style={{color : 'black',textDecoration : 'underline'}}>Download Volatility Technical Analysis Game</h3>
                        </div>
                    </a>
       
                    <a href="https://volatilitygame.com/volatilitydashboard/games/Technical Analysis Volatility Game.pptx" download>
                        <div className="eachdownloads" style={{display : 'flex',flexDirection : 'column',justifyContent : 'center',alignItems : 'center',width : '20vw',borderColor : '#143943',borderWidth : 2,borderRadius : 5}}>
                            <img src={volatilitygame} />
                            <h3 style={{color : 'black',textDecoration : 'underline'}}>Download PPT</h3>
                        </div>
                    </a>
                </div> }

                {currentcategory == "volatilityfundamentalanalysisgame" && <div className="modalcontent" style={{display : 'flex',flexDirection : 'row',justifyContent : 'left'}}>
                    <a href="https://volatilitygame.com/volatilitydashboard/games/FundamentalAnalysis.jar" download>
                        <div className="eachdownloads"  style={{display : 'flex',flexDirection : 'column',justifyContent : 'center',alignItems : 'center',width : '20vw',borderColor : '#143943',borderWidth : 2,borderRadius : 5}}>
                            <img src={volatilitygame} />
                            <h3 style={{color : 'black',textDecoration : 'underline'}}>Download Volatility Fundamental Analysis Game</h3>
                        </div>
                    </a>
       
                    <a href="https://volatilitygame.com/volatilitydashboard/games/Fundamental Analysis Volatility Game PPT.pptx" download>
                        <div className="eachdownloads" style={{display : 'flex',flexDirection : 'column',justifyContent : 'center',alignItems : 'center',width : '20vw',borderColor : '#143943',borderWidth : 2,borderRadius : 5}}>
                            <img src={volatilitygame} />
                            <h3 style={{color : 'black',textDecoration : 'underline'}}>Download PPT</h3>
                        </div>
                    </a>
                </div> }

    
            </Modal>
            <div className="downloads">
  
                <div className="eachdownloads" onClick={() => handletap("volatilitygame")}>
                        <img src={volatilitygame} />
                        <h3>Volatility Game</h3>
                </div>
                <div className="eachdownloads" onClick={() => handletap("volatilitydebtgame")}>
                        <img src={volatilitygame} />
                        <h3>Volatility Debt Game</h3>
                </div>
                <div className="eachdownloads" onClick={() => handletap("volatilitytechnicalanalysisgame")}>
                        <img src={volatilitygame} />
                        <h3>Volatility Technical Analysis Game</h3>
                </div>
                <div className="eachdownloads" onClick={() => handletap("volatilityfundamentalanalysisgame")}>
                        <img src={volatilitygame} />
                        <h3>Volatility Fundamental Analysis Game</h3>
                </div>
                <div className="eachdownloads">
                    <a href="https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html" target="_blank">
                        <img src={volatilitygame} />
                        <h3>Download Supporting Files</h3>
                    </a>
                </div>

      
            </div>
        </div>
    )
}

export default Gamesoftware
