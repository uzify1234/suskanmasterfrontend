import React,{useState} from 'react'
import Header from '../Helpers/Header';
import './Physicalgames.css';
import { useNavigate, useParams } from "react-router-dom";
import Illusion from '../Assets/Images/illusion.svg';
import Puzzle from '../Assets/Images/puzzle.svg';
import Board from '../Assets/Images/board.svg';
import Graduate from '../Assets/Images/graduate.svg';





function Physicalgames() {

    const navigate = useNavigate();

    const [contents, setcontents] = useState([
        {title : "Illusion Games",icon : Illusion , action : "/illusiongames"},
        {title : "Financial Market Puzzle",icon : Puzzle , action : "/financialmarketpuzzle"},
        {title : "Board & Card Games",icon : Board , action : "/boardandcardgames"},
        {title : "Leadership Games",icon : Graduate , action : "/leadershipgames"}
    ])
    return (
        <div className='physicalgames'>
            <Header />
            <div className="downloads">
                {
                    contents.map(each => {
                        return(
                            <div className="eachdownloads" onClick={() => navigate(each.action)}>
                                    <img src={each.icon} />
                                    <h3>{each.title}</h3>
                            </div>
                        )
                    })
                }

                
  
            </div>
        </div>
    )
}

export default Physicalgames
