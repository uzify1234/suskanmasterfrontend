import React from 'react'
import Header from '../Helpers/Header';
import './AssetAllocation.css';
import AssetIcon from "../Assets/Images/assetallocation.png";
import { Link } from 'react-router-dom';

function AssetAllocation() {
    return (
        <div className='assetallocation'>
            <Header />
            <div className="downloads">
                <div className="eachdownloads">
                <a href="https://volatilitygame.com/volatilitydashboard/AssetAllocation_Win64.zip" download>
                        <img src={AssetIcon} />
                        <h3>Download for Windows</h3>
                </a>
                   
                </div>
                <div className="eachdownloads">
                <a href="https://volatilitygame.com/volatilitydashboard/AssetAllocation_mac.zip" download>
                        <img src={AssetIcon} />
                        <h3>Download for Mac</h3>
                </a>
                    
                </div>
                <div className="eachdownloads">
                <a href="https://volatilitygame.com/volatilitydashboard/pptsdownload/Asset Allocation Volatility Game.pptx" download="Asset Allocation Volatility Game.pptx">
                            <img src={AssetIcon} />
                            <h3>Asset Allocation Volatility Game PPT</h3>
                    </a>  
                </div>
                <div className="eachdownloads">
                    <a href="https://volatilitygame.com/volatilitydashboard/pptsdownload/asset allocation game ppt.pptx" download="asset allocation game ppt.pptx">
                            <img src={AssetIcon} />
                            <h3>Asset Allocation Game PPT</h3>
                    </a>  
                </div>
                <div className="eachdownloads">
                    <a href="https://volatilitygame.com/volatilitydashboard/pptsdownload/asset allocation game VC ppt.pptx" download="asset allocation game VC ppt.pptx">
                            <img src={AssetIcon} />
                            <h3>Asset Allocation Game VC PPT</h3>
                    </a>  
                </div>
                <div className="eachdownloads">
                    <a href="https://volatilitygame.com/volatilitydashboard/pptsdownload/Poll Questions for Asset Allocation Game.docx" download="Poll Questions for Asset Allocation Game.docx">
                            <img src={AssetIcon} />
                            <h3>Poll Questions for Asset Allocation Game</h3>
                    </a>  
                </div>
  
            </div>
        </div>
    )
}

export default AssetAllocation
