import React,{useEffect} from 'react'
import Header from '../Helpers/Header';
import './Ppts.css';
import Ppt from '../Assets/Images/ppt.svg';
import { auth } from '../Helpers/Firebase';
import { useNavigate, useParams } from "react-router-dom";


function Ppts() {
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
        <div className='ppts'>
            <Header />
            <div className="allppts">
                <div className='eachppt'>
                    <img src={Ppt} width={60}/>
                    <h3>Financial Lesson From A Mother PPT</h3>
                    <a href="https://volatilitygame.com/volatilitydashboard/pptsdownload/Financial Lessons from a Mother- IAP.pptx" download>Download</a>
                </div>
                <div className='eachppt'>
                    <img src={Ppt} width={60}/>
                    <h3>Volatility Game PPT</h3>
                    <a href="https://volatilitygame.com/volatilitydashboard/pptsdownload/VolatilityGamePPT.ppt" download>Download</a>
                </div>
                <div className='eachppt'>
                    <img src={Ppt} width={60}/>
                    <h3>Volatility Debt Game PPT</h3>
                    <a href="https://volatilitygame.com/volatilitydashboard/pptsdownload/Debt Volatility Game.pptx" download>Download</a>
                </div>
                <div className='eachppt'>
                    <img src={Ppt} width={60}/>
                    <h3>Wellness Through Financial Planning PPT</h3>
                    <a href="https://volatilitygame.com/volatilitydashboard/pptsdownload/Wellness Through Financial Planning.pptx" download>Download</a>
                </div>
                <div className='eachppt'>
                    <img src={Ppt} width={60}/>
                    <h3>AMFI-Investor Awareness Program</h3>
                    <a href="https://volatilitygame.com/volatilitydashboard/pptsdownload/AMFI - Investor Awareness Presentation.pdf" download>Download</a>
                </div>
                <div className='eachppt'>
                    <img src={Ppt} width={60}/>
                    <h3>AMFI-Investor Awareness Program</h3>
                    <a href="https://volatilitygame.com/volatilitydashboard/pptsdownload/AMFI - Investor Awareness Presentation.pdf" download>Download</a>
                </div>
                <div className='eachppt'>
                    <img src={Ppt} width={60}/>
                    <h3>IAP-IDFC Presentation</h3>
                    <a href="https://volatilitygame.com/volatilitydashboard/pptsdownload/IAP-Final_IDFC.pptx" download>Download</a>
                </div>
                <div className='eachppt'>
                    <img src={Ppt} width={60}/>
                    <h3>Investor Awareness Program ICICI Presentation</h3>
                    <a href="https://volatilitygame.com/volatilitydashboard/pptsdownload/Investor Awareness Program_ICICI.pdf" download>Download</a>
                </div>
                <div className='eachppt'>
                    <img src={Ppt} width={60}/>
                    <h3>Selling Skills Objection Handling</h3>
                    <a href="https://volatilitygame.com/volatilitydashboard/pptsdownload/SellingSkills_Objection Handling.pptx" download>Download</a>
                </div>
                <div className='eachppt'>
                    <img src={Ppt} width={60}/>
                    <h3>Equity Blue Book</h3>
                    <a href="https://volatilitygame.com/volatilitydashboard/pptsdownload/quity Blue Book PPT-final.pdf" download>Download</a>
                </div>
                <div className='eachppt'>
                    <img src={Ppt} width={60}/>
                    <h3>Asset Allocation Scheme</h3>
                    <a href="https://volatilitygame.com/volatilitydashboard/pptsdownload/Asset Allocation Schemes PPT.pdf" download>Download</a>
                </div>
                <div className='eachppt'>
                    <img src={Ppt} width={60}/>
                    <h3>Fixed Income Blue Book</h3>
                    <a href="https://volatilitygame.com/volatilitydashboard/pptsdownload/Fixed Income Blue Book - March 2020.pdf" download>Download</a>
                </div>
                <div className='eachppt'>
                    <img src={Ppt} width={60}/>
                    <h3>Ipru Balanced Advantage Fund</h3>
                    <a href="https://volatilitygame.com/volatilitydashboard/pptsdownload/IPru Balanced Advantage Fund - Opportune time to invest.pdf" download>Download</a>
                </div>
                <div className='eachppt'>
                    <img src={Ppt} width={60}/>
                    <h3>FOF Blue Book Compliance</h3>
                    <a href="https://volatilitygame.com/volatilitydashboard/pptsdownload/FOF Blue Book - Compliance.pdf" download>Download</a>
                </div>
                <div className='eachppt'>
                    <img src={Ppt} width={60}/>
                    <h3>Mutual Fund Analysis</h3>
                    <a href="https://volatilitygame.com/volatilitydashboard/pptsdownload/Mutual Fund Analysis PPT.pptx" download>Download</a>
                </div>
                <div className='eachppt'>
                    <img src={Ppt} width={60}/>
                    <h3>Basic Mutual Fund PPT For Investors</h3>
                    <a href="https://volatilitygame.com/volatilitydashboard/pptsdownload/MutualFund VolatilityCoachPPT.pptx" download>Download</a>
                </div>
                <div className='eachppt'>
                    <img src={Ppt} width={60}/>
                    <h3>Vision Game</h3>
                    <a href="https://volatilitygame.com/volatilitydashboard/pptsdownload/Vision Game.pptx" download>Download</a>
                </div>
                <div className='eachppt'>
                    <img src={Ppt} width={60}/>
                    <h3>RVCC for College</h3>
                    <a href="https://volatilitygame.com/volatilitydashboard/pptsdownload/RVCC Intro For Colleges.pptx" download>Download</a>
                </div>
                <div className='eachppt'>
                    <img src={Ppt} width={60}/>
                    <h3>Retirement Ready</h3>
                    <a href="https://volatilitygame.com/volatilitydashboard/pptsdownload/RetirementReady.ppt" download>Download</a>
                </div>
            </div>
        </div>
    )
}

export default Ppts
