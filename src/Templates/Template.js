import React,{useState} from 'react'
import Header from '../Helpers/Header';
import './Template.css';
import AssetIcon from "../Assets/Images/assetallocation.png";
import { Link } from 'react-router-dom';

import Word from '../Assets/Images/ppt.svg';
import Im1 from '../Assets/templatesicon/FFF Logo JPeg Small.001.jpeg';
import Im2 from '../Assets/templatesicon/FFF Logo PNG.001.png';
import Im3 from '../Assets/templatesicon/FFF png .001.png';
import Im4 from '../Assets/templatesicon/IMG-5124.jpg';
import Im5 from '../Assets/templatesicon/RVCC.jpg';
import Im6 from '../Assets/templatesicon/RVCC.png';
import Im7 from '../Assets/templatesicon/RVCCLogo.jpg';
import Im8 from '../Assets/templatesicon/ssl academy logo-black.jpg';
import Im9 from '../Assets/templatesicon/ssl academy logo-black.png';
import Im10 from '../Assets/templatesicon/ssl academy logo-blue.jpg';
import Im11 from '../Assets/templatesicon/ssl academy logo-blue.png';
import Im12 from '../Assets/templatesicon/ssl academy logo-yellow.jpg';
import Im13 from '../Assets/templatesicon/ssl academy logo-yellow.png';
import Im14 from '../Assets/templatesicon/ssl academy logo.jpg';
import Im15 from '../Assets/templatesicon/ssl academy logo.png';
import Im16 from '../Assets/templatesicon/ssl academy.jpg';
import Im17 from '../Assets/templatesicon/ssl academy.png';
import Im18 from '../Assets/templatesicon/vcjpeg.jpg';
import Im20 from '../Assets/templatesicon/vcpngblack.png';
import Im21 from '../Assets/templatesicon/fff.jpg';
import Im22 from '../Assets/templatesicon/fff2.jpg';
import Im23 from '../Assets/templatesicon/fff3.jpg';
import Im24 from '../Assets/templatesicon/side ff.jpg';




function Template() {

    const [contents, setcontents] = useState([
        {title : "Letter Template for Educational Institutions" , file : "LetterTempletfor Educational Institutions.docx",icon : Word},
        {title : "Letter Template for Housing Complex ",file : "letterTempletfor housing complex.docx",icon : Word},
        {title : "Letter Template for HR Initiatives",file : "letterTempletfor HR Initiatives.docx",icon : Word},
        {title : "RVCC Flier",file : "RVCC Flier.jpg",icon : Word},
        {title : "RVCC Intro For Colleges",file : "RVCC Intro For Colleges.pptx",icon : Word},
        {title : "FFF Logo",file : "fff.jpg",icon : Im21},
        {title : "FFF Logo",file : "fff2.jpg",icon : Im22},
        {title : "FFF Logo",file : "fff3.jpg",icon : Im23},
        {title : "FFF Logo",file : "side ff.jpg",icon : Im24},
        {title : "IMG-5124",file : "IMG-5124.jpg",icon : Im4},
        {title : "RVCC JPG",file : "RVCC.jpg",icon : Im5},
        {title : "RVCC PNG",file : "RVCC.png",icon : Im6},
        {title : "RVCC LOGO",file : "RVCCLOGO.jpg",icon : Im7},
        {title : "SSL Academy Logo Black",file : "ssl academy logo-black.jpg",icon : Word},
        {title : "SSL Academy Logo Black PDF",file : "ssl academy logo-black.pdf",icon : Im8},
        {title : "SSL Academy Logo Black PNG",file : "ssl academy logo-black.png",icon : Im9},
        {title : "SSL Academy Logo Blue",file : "ssl academy logo-blue.jpg",icon : Im10},
        {title : "SSL Academy Logo Blue PDF",file : "ssl academy logo-blue.pdf",icon : Word},
        {title : "SSL Academy Logo Blue PNG",file : "ssl academy logo-blue.png",icon : Im11},
        {title : "SSL Academy Logo Yellow",file : "ssl academy logo-yellow.jpg",icon : Im12},
        {title : "SSL Academy Logo Yellow PDF",file : "ssl academy logo-yellow.pdf",icon : Word},
        {title : "SSL Academy Logo Yellow PNG",file : "ssl academy logo-yellow.png",icon : Im13},
        {title : "SSL Academy Logo",file : "ssl academy logo.jpg",icon : Im14},
        {title : "SSL Academy Logo PDF",file : "ssl academy logo.pdf",icon : Word},
        {title : "SSL Academy Logo PNG",file : "ssl academy logo.png",icon : Im15},
        {title : "SSL Academy",file : "ssl academy.jpg",icon : Im16},
        {title : "SSL Academy PNG",file : "ssl academy.png",icon : Im17},
        {title : "VC JPEG",file : "vcjpeg.jpg",icon : Im18},
        {title : "VC PNG",file : "vcjpeg.png",icon : Im18},
        {title : "VC Black PNG",file : "vcpngblack.png",icon : Im20},
        {title : "Wellness through Financial Planning corporate",file : "Wellness through Financial Planning corporate.docx",icon : Word},
        {title : "Proposal for GPW",file : "Proposal for GPW.docx",icon : Word},

    ])
    return (
        <div className='template'>
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

export default Template
