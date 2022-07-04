import React,{useState} from 'react'
import Header from '../Helpers/Header';
import './Truely.css';
import AssetIcon from "../Assets/Images/assetallocation.png";
import { Link } from 'react-router-dom';

import Word from '../Assets/Images/ppt.svg';

import Im1 from '../Assets/templatesicon/bulb.png';
import Im2 from '../Assets/templatesicon/rich.png';
import Im3 from '../Assets/templatesicon/paisa.png';
import Im4 from '../Assets/templatesicon/Quran.png';
import Im5 from '../Assets/templatesicon/king.png';
import Im6 from '../Assets/templatesicon/profit.png';
import Im7 from '../Assets/templatesicon/new-year.png';
import Im8 from '../Assets/templatesicon/wealthmgmt.png';
import Im9 from '../Assets/templatesicon/shiva.png';
import Im10 from '../Assets/templatesicon/person.png';
import Im11 from '../Assets/templatesicon/efforts.png';





function Truely() {

    const [contents, setcontents] = useState([
        {title : "Significance of Christmas decoration" , file : "Christmas Greetings Presentation.zip",icon : Im7},
        {title : "New Year",file : "NewYear.zip",icon : Im8},
        {title : "Wealth Management Lessons from Bhagwat Gita",file : "Wealth Management Lessons from Bhagwat Gita.zip",icon : Im9},
        {title : "Wealth Management Lessons  from Lord Shiva",file : "Wealth Management Lessons  from Lord Shiva.zip",icon : Im10},
        {title : "Meet Your Coach",file : "meetyourcoach.zip",icon : Im11},
        {title : "Law of Wasted Efforts",file : "Law of Wasted Efforts.zip",icon : Im1},
        {title : "Negative Issues with a Positive Spin",file : "Negative Issues with a Positive Spin.zip",icon : Im2},
        {title : "What will not make rich?",file : "What will not make rich .zip",icon : Im3},
        {title : "Char paise kyu zaroori hai ?",file : "Value of 4 paise.zip",icon : Im4},
        {title : "Wealth wisdom from Quran",file : "Wealth Wisdom from Quran.zip",icon : Im5},
        {title : "Commonality of Great Kings",file : "Commonality of Great Kings.zip",icon : Im6},
        {title : "Book Profits",file : "Book Profits.zip",icon : Im7}
    ])
    return (
        <div className='truely'>
            <Header />
            <div className="downloads">
                {
                    contents.map(each => {
                        return(
                            <div className="eachdownloads">
                            <a href={`https://volatilitygame.com/volatilitydashboard/pptsdownload/${each.file}`} download>
                                    <img src={each.icon} />
                                    <h3>{each.title}</h3>
                            </a> 
                            </div>
                        )
                    })
                }

                
  
            </div>
        </div>
    )
}

export default Truely
