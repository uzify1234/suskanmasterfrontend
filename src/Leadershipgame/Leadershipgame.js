import React, {useState} from 'react'
import './Leadershipgame.css';
import Header from '../Helpers/Header'
import tutorial from "../Assets/Images/tutorial.png";
import boomgame from "../Assets/Images/boomgame.JPG";
import MulticapCardGame from "../Assets/Images/MulticapCardGame.jpg";
import Fun from "../Assets/Images/Fun Da Attack- Card Game.jpg";

import volatilitygame from "../Assets/Images/volatilitygame.png";
import howtoconductvg from "../Assets/Images/howtoconductvg.png";import ReactDOM from 'react-dom';
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
      maxWidth : '90vw'
    },
  };

function Leadershipgame() {

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

    const [currentcategory, setcurrentcategory] = useState("");
    const handletap = (cat) => {
        setcurrentcategory(cat);
        setIsOpen(true);
    }
    return (
        <div className='leadershipgames'>
             <Header />
             <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
      

                {currentcategory == "game2" && <div className="modalcontent" style={{display : 'flex',flexDirection : 'row',justifyContent : 'left',overflow : 'scroll'}}>
                <iframe src="https://www.youtube.com/embed/PzTJAWfWshQ" width="800" height="450" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div> }

                {currentcategory == "game4" && <div className="modalcontent" style={{display : 'flex',flexDirection : 'row',justifyContent : 'left',overflow : 'scroll'}}>
                <iframe src="https://www.youtube.com/embed/WIREsU8rtoI" width="800" height="450" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div> }




        

     

    
            </Modal>
            <div className="downloads">
  
                <div className="eachdownloads" onClick={() => handletap("game1")}>
                        <img src={volatilitygame} />
                        <h3>Influencer Game</h3>
                </div>
                <div className="eachdownloads" onClick={() => handletap("game2")}>
                        <img src={tutorial} />
                        <h3>Vision Game</h3>
                </div>
                <div className="eachdownloads" onClick={() => handletap("game3")}>
                        <img src={howtoconductvg} />
                        <h3>USD</h3>
                </div>
                <div className="eachdownloads" onClick={() => handletap("game4")}>
                        <img src={howtoconductvg} />
                        <h3>Creativity Game</h3>
                </div>      
            </div>
        </div>
    )
}

export default Leadershipgame
