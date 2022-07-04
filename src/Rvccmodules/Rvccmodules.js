import React,{useEffect} from 'react'
import { auth } from '../Helpers/Firebase';
import Header from '../Helpers/Header'
import './Rvccmodules.css';
import { useNavigate, useParams } from "react-router-dom";

function Rvccmodules() {
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
        <div className='rvccmodules'>
            <Header />
            <div className="rvcccontent">
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/1YG4gBWqxPE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/uPGU0qEzWnk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/CptQT8HH5J8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/AufdYKC8UTQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/euvoXB_zjZA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/9lACpY0pk4A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/5R2-RqOo1_Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <h2>RVCC Full Sessions 2021</h2>
            <div className="rvcccontent">
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/ygLr2GZir3Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/M-CVQMICBRc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe width="1280" height="720" src="https://www.youtube.com/embed/FwwyzL-9BcA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/xQgjrYiZG14" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/oNSk5URPd7g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/RORXoKZmwHw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/cH4X6ox7XuI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/J0ATjlKrTx4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Rvccmodules
