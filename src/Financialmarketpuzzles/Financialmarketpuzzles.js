import React from 'react'
import './Financialmarketpuzzles.css';
import Header from '../Helpers/Header'
import tutorial from "../Assets/Images/tutorial.png";
import volatilitygame from "../Assets/Images/volatilitygame.png";
import howtoconductvg from "../Assets/Images/howtoconductvg.png";
import Ppt from '../Assets/Images/ppt.svg';
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
      border : '4px solid #143943',
      maxHeight : '80vh',
      maxWidth : '60vw',
      
    },
  };

function Financialmarketpuzzles() {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
    //   subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    return (
        <div className="financialmarketpuzzles">
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
            <div className='allvideos' style={{display : 'flex', flexDirection : 'row'}}>
                <div className="eachvideo" style={{margin : 10,width : 320, height : 240}}>
                    <video width="320" height="240" controls>
                        <source src="https://volatilitygame.com/volatilitydashboard/crises.mp4" type="video/mp4" />
                        <source src="https://volatilitygame.com/volatilitydashboard/crises.mp4" type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="eachvideo" style={{margin : 10,width : 320, height : 240}}>
                    <video width="320" height="240" controls>
                        <source src="https://volatilitygame.com/volatilitydashboard/crisespart2.mp4" type="video/mp4" />
                        <source src="https://volatilitygame.com/volatilitydashboard/crisespart2.mp4" type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                </div>
            </Modal>
             <Header />
            <div className="downloads">
                <div className="eachdownloads">
                <a href="https://volatilitygame.com/volatilitydashboard/smallgames.ppt" download>
                        <img src={volatilitygame} />
                        <h3>Out Of Box Thinking</h3>
                </a>
                </div>
                <div className="eachdownloads">
                    <a href="https://volatilitygame.com/volatilitydashboard/4squares_mouseclick1.pps" download>
                        <img src={tutorial} />
                        <h3>Do We Get Conditioned</h3>
                    </a>
                </div>
                <div className="eachdownloads">
                            <img src={howtoconductvg} />
                            <h3>Internal Market Potential</h3>
                </div>
                <div className="eachdownloads" onClick={() => openModal()}>
                            <img src={Ppt} />
                            <h3>Crises Is Not The End</h3>
                </div>
      
            </div>
        </div>
    )
}

export default Financialmarketpuzzles
