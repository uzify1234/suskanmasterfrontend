import React,{useEffect} from 'react'
import { auth } from '../Helpers/Firebase';
import Header from '../Helpers/Header';
import './CreativityGame.css';
import { useNavigate, useParams } from "react-router-dom";

function CreativityGame() {

    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
            } else {
                navigate('/');
            }
          });
    }, [])
    return (
        <div className='creativitygame'>
             <Header />
             <div className='creativitygames'>
                <div className="allvideos">
                    <div className="eachvideo">
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/_cVeyvap8Fs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="eachvideo">
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/FGeJaLCO2IY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="eachvideo">
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/TwwSh85rEeM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="eachvideo">
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/Spa5WoIpV1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="eachvideo">
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/87EIPkxi6fM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreativityGame
