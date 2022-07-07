import React,{useEffect} from 'react'
import { auth } from '../Helpers/Firebase';
import Header from '../Helpers/Header';
import './AssetAllocationVideos.css';
import { useNavigate, useParams } from "react-router-dom";

function AssetAllocationVideos() {

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
        <div className='assetallocationvideo'>
             <Header />
             <div className='assetallocationvideos'>
                <div className="allvideos">
                    <div className="eachvideo">
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/o34QxzFDwZc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="eachvideo">
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/m9ClwiFHktY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="eachvideo">
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/rF-5bCoNfpc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="eachvideo">
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/V7K96vBsPgs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AssetAllocationVideos
