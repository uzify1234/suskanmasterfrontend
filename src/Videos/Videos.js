import React,{useEffect} from 'react'
import './Videos.css';
import Header from '../Helpers/Header';
import { auth } from '../Helpers/Firebase';
import { useNavigate, useParams } from "react-router-dom";

function Videos() {
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
        <div className='videos'>
            <Header />
            <div className="allvideos">
                <div className="eachvideo">
                    <iframe src="https://www.youtube.com/embed/6aGZqHegzcs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                </div>
                <div className="eachvideo">
                    <iframe src="https://www.youtube.com/embed/du9ovoHoSbA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                </div>
                <div className="eachvideo">
                    <iframe src="https://www.youtube.com/embed/jZW7h0vpHoE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                </div>
                <div className="eachvideo">
                    <iframe src="https://www.youtube.com/embed/PBDOyZn2Hgs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">Power of Compounding</iframe>
                </div>
                <div className="eachvideo">
                    <iframe src="https://www.youtube.com/embed/RVSdhcJRvxI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                </div>
                <div className="eachvideo">
                    <iframe src="https://www.youtube.com/embed/qqa0ajCeKr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                </div>

                <div className="eachvideo">
                    <iframe src="https://www.youtube.com/embed/B5WVfA6A_k0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                </div>
                <div className="eachvideo">
                    <iframe src="https://www.youtube.com/embed/AsRBYV-NqSc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                </div>
                <div className="eachvideo">
                    <iframe src="https://www.youtube.com/embed/LsrbDG0Ui7Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                </div>
                <div className="eachvideo">
                    <iframe src="https://www.youtube.com/embed/_NNF-NsvqVk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">Power of Compounding</iframe>
                </div>
                <div className="eachvideo">
                    <iframe src="https://www.youtube.com/embed/kYMbwTuMHaE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                </div>
                <div className="eachvideo">
                    <iframe src="https://www.youtube.com/embed/z1b7yAzROEA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                </div>
                <div className="eachvideo">
                    <iframe src="https://www.youtube.com/embed/JE0PIpqXCB8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">Power of Compounding</iframe>
                </div>
                <div className="eachvideo">
                    <iframe src="https://www.youtube.com/embed/c3TJ6ZH7YtM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                </div>
            </div>
        </div>
    )
}

export default Videos
