import React,{useEffect} from 'react'
import { auth } from '../Helpers/Firebase';
import Header from '../Helpers/Header';
import './Masterclass.css';
import { useNavigate, useParams } from "react-router-dom";

function Masterclass() {

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
        <div className='masterclass'>
             <Header />
             <div className='masterclasses'>
            <div className="allvideos">
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/DAy_wVNMHcM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/sO8quuKPtUI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/YXrYhzn1GVs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/jlL3xkDlRI4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/NKuESCh3E6I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/xn8LqdlgCGQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/hXbNky1IhFg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/kO9gfokperU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/yVjQxILQGH8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/Notx7BUavo8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/0PopyHmeZrE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/e6nwsAGu1KY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/qd1aXozvJA0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/VAMiH8555u8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/1SKVPRK9A74" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/TOKDzxWiwno" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/8EvisQcpaIk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/0stVYJZV-98" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/boEq72h-3wE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="eachvideo">
                <iframe width="1280" height="720" src="https://www.youtube.com/embed/HZ2ghIA73Qc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Masterclass
