import React,{useEffect} from 'react'
import { auth } from '../Helpers/Firebase';
import Header from '../Helpers/Header';
import './AdvancedSelling.css';
import { useNavigate, useParams } from "react-router-dom";

function AdvancedSelling() {

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
        <div className='advancedselling'>
             <Header />
             <div className='advancedsells'>
                <div className="allvideos">
                    <div className="eachvideo">
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/B6rRygdrdWQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="eachvideo">
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/BvCPnJVODp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="eachvideo">
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/M9VlrpoVgGk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="eachvideo">
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/fJ2-onJA3VA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvancedSelling
