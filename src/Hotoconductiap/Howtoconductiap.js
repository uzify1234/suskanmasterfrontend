import React from 'react'
import Header from '../Helpers/Header'
import './Howtoconductiap.css';

function Howtoconductiap() {
    return (
        <div className="howtoconductiap">
             <Header />
        <div className="classroomcontent">
            <div className="rvcccontent">
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/hje4csRq4mk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className="rvcccontent">
                <div className="eachvideo">
                <iframe src="https://www.youtube.com/embed/OeD7sEubj68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Howtoconductiap
