import React , {useState,useEffect} from 'react'
import Header from '../Helpers/Header'
import './Illusiongames.css'
import Intelligence from "../Assets/Images/Intelligence.png";
import perfectsquare from "../Assets/Images/perfectsquare.png";
import Game from "../Assets/Images/Game-of-Illusion.png";
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

function Illusiongames() {
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

    const [modalVideo, setModalVideo] = useState(false);

    useEffect(() => {
        if(modalVideo) {
            openModal();
        }
        else {
            closeModal();
        }
    }, [modalVideo]);

    return (
        <div className='illusiongames'>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="eachvideo">
                <iframe src={modalVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
                </div>
            </Modal>
            <Header />
            <div className="downloads">
                <div className="eachdownloads" onClick={() => setModalVideo('https://www.youtube.com/embed/oHpY6PaiPrU')}>
                        <img src={Intelligence} />
                        <h3>Illusion - Bull and Bear</h3>
                </div>
                <div className="eachdownloads" onClick={() => setModalVideo('https://www.youtube.com/embed/t9yG6vxMmYo')}>
                        <img src={perfectsquare} />
                        <h3>Asset Allocation- Two Horse Two Rider</h3>
                </div>
                <div className="eachdownloads" onClick={() => setModalVideo('https://www.youtube.com/embed/JriMm7EJTHA')}>
                            <img src={Game} />
                            <h3>Make a Square with 5 Pices- Emergency Fund</h3>
                </div>
                <div className="eachdownloads" onClick={() => setModalVideo(null)}>
                            <img src={Game} />
                            <h3>Sales Spring- Flexibility</h3>
                </div>
                <div className="eachdownloads" onClick={() => setModalVideo(null)}>
                            <img src={Game} />
                            <h3>Pyramid - Investment is a simple science</h3>
                </div>

  
            </div>
        </div>
    )
}

export default Illusiongames
