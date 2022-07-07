import logo from './logo.svg';
import './App.css';
import React, {useEffect,useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import Monthlyreview from './Monthlyreview/Monthlyreview';
import Mutualfundspick from './Mutualfundspick/Mutualfundspick';
import Login from './Login/Login';
import Resources from './Resources/Resources';
import Mutualfunds from './Mutualfunds/Mutualfunds';
import AssetAllocation from './AssetAllocation/AssetAllocation';
import Videos from './Videos/Videos';
import Ppts from './Ppts/Ppts';
import Masterclass from './Masterclass/Masterclass';
import Rvccmodules from './Rvccmodules/Rvccmodules';
import Template from './Templates/Template';
import Truely from './Truely/Truely';
import Detailedfinancialplan from './Detailedfinancialplan/Detailedfinancialplan';
import Beyondclassroom from './Beyondclassrooom/Beyondclassroom';
import Illusiongames from './Illusiongames/Illusiongames';
import Financialmarketpuzzles from './Financialmarketpuzzles/Financialmarketpuzzles';
import Gamesoftware from './Gamesoftware/Gamesoftware';
import Boardgames from './Boardgames/Boardgames';
import Leadershipgame from './Leadershipgame/Leadershipgame';
import NominatedFunds from './NominatedFunds/NominatedFunds';
import IdleTimer from './Helpers/IdleTimer';
import { auth } from './Helpers/Firebase';
import Physicalgames from './Physicalgames/Physicalgames';
import Howtoconductiap from './Hotoconductiap/Howtoconductiap';
import FFFConference from './FFFConference/FFFConference';
import CreativityGame from './CreativityGame/CreativityGame';
import AdvancedSelling from './AdvancedSelling/AdvancedSelliing';
import AssetAllocationVideos from './AssetAllocationVideos/AssetAllocationVideos';




function App() {

  const [isTimeout, setIsTimeout] = useState(false);
  useEffect(() => {
    const timer = new IdleTimer({
      timeout: 1200, //expire after 10 seconds
      onTimeout: () => {
        setIsTimeout(true);
        auth.onAuthStateChanged((user) => {
          if (user) {
            auth.signOut().then(() => {
              alert("Session Expired");
              window.location.href="/volatilitydashboard/";
              setIsTimeout(false);
            })
          }
        });
      },
      onExpired: () => {
        // do something if expired on load
        setIsTimeout(true);
      }
    });

    return () => {
      timer.cleanUp();
    };
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" caseSensitive={false} element={
          <div className='holder'>
            <Login />
          </div>
          } />
          <Route path="/volatilitydashboard" caseSensitive={false} element={
          <div className='holder'>
            <Login />
          </div>
          } />
          <Route path="/vgdashboard" caseSensitive={false} element={
          <div className='holder'>
            <Dashboard />
          </div>
          } />
          <Route path="/monthlyreview" caseSensitive={false} element={
          <div className='holder'>
            <Monthlyreview />
          </div>
          } />
          <Route path="/mutualfundspick" caseSensitive={false} element={
          <div className='holder'>
            <Mutualfundspick />
          </div>
          } />
          <Route path="/resources" caseSensitive={false} element={
          <div className='holder'>
            <Resources />
          </div>
          } />
          <Route path="/mutualfundsanalysis" caseSensitive={false} element={
          <div className='holder'>
            <Mutualfunds />
          </div>
          } />
          <Route path="/assetallocation" caseSensitive={false} element={
          <div className='holder'>
            <AssetAllocation />
          </div>
          } />
          <Route path="/videos" caseSensitive={false} element={
          <div className='holder'>
            <Videos />
          </div>
          } />
          <Route path="/ppts" caseSensitive={false} element={
          <div className='holder'>
            <Ppts />
          </div>
          } />
          <Route path="/masterclass" caseSensitive={false} element={
          <div className='holder'>
            <Masterclass />
          </div>
          } />
          <Route path="/fffconference" caseSensitive={false} element={
          <div className='holder'>
            <FFFConference />
          </div>
          } />
          <Route path="/creativitygame" caseSensitive={false} element={
          <div className='holder'>
            <CreativityGame />
          </div>
          } />
          <Route path="/advancedselling" caseSensitive={false} element={
          <div className='holder'>
            <AdvancedSelling />
          </div>
          } />
          <Route path="/assetallocationvideos" caseSensitive={false} element={
          <div className='holder'>
            <AssetAllocationVideos />
          </div>
          } />
          <Route path="/rvccmodules" caseSensitive={false} element={
          <div className='holder'>
            <Rvccmodules />
          </div>
          } />
          <Route path="/beyondclassroom" caseSensitive={false} element={
          <div className='holder'>
            <Beyondclassroom />
          </div>
          } />
          <Route path="/howtoconductiap" caseSensitive={false} element={
          <div className='holder'>
            <Howtoconductiap />
          </div>
          } />
          <Route path="/templates" caseSensitive={false} element={
          <div className='holder'>
            <Template />
          </div>
          } />
          <Route path="/yourstruely" caseSensitive={false} element={
          <div className='holder'>
            <Truely />
          </div>
          } />
          <Route path="/detailedfinancialplan" caseSensitive={false} element={
          <div className='holder'>
            <Detailedfinancialplan />
          </div>
          } />
          <Route path="/illusiongames" caseSensitive={false} element={
          <div className='holder'>
            <Illusiongames />
          </div>
          } />
          <Route path="/physicalgames" caseSensitive={false} element={
          <div className='holder'>
            <Physicalgames />
          </div>
          } />
          <Route path="/financialmarketpuzzle" caseSensitive={false} element={
          <div className='holder'>
            <Financialmarketpuzzles />
          </div>
          } />
          <Route path="/gamesoftware" caseSensitive={false} element={
          <div className='holder'>
            <Gamesoftware />
          </div>
          } /> 
          <Route path="/boardandcardgames" caseSensitive={false} element={
          <div className='holder'>
            <Boardgames />
          </div>
          } />
          <Route path="/leadershipgames" caseSensitive={false} element={
          <div className='holder'>
            <Leadershipgame />
          </div>
          } />
          <Route path="/nominatedfunds" caseSensitive={false} element={
          <div className='holder'>
            <NominatedFunds />
          </div>
          } />



          {/* <Route path="/sipreturns" caseSensitive={false} element={
          <div className='holder'>
            <Leftregion />
            <Rightregion />
          </div>
          } />
          <Route path="/stpreturns" caseSensitive={false} element={
          <div className='holder'>
            <Leftregion />
            <Tool2 />
          </div>
          } />
            <Route path="/swpreturns" caseSensitive={false} element={
          <div className='holder'>
            <Leftregion />
            <Tool3 />
          </div>
          } />
          <Route path="/ppfelss" caseSensitive={false} element={
          <div className='holder'>
            <Leftregion />
            <Tool4 />
          </div>
          } />
                    <Route path="/assetallocation" caseSensitive={false} element={
          <div className='holder'>
            <Leftregion />
            <Tool5 />
          </div>
          } />
                    <Route path="/retirementplanning" caseSensitive={false} element={
          <div className='holder'>
            <Leftregion />
            <Tool6 />
          </div>
          } />
          <Route path="/humanlifevalue" caseSensitive={false} element={
          <div className='holder'>
                <Leftregion />
                <Tool7 />
          </div>
          } />
                    <Route path="/composite" caseSensitive={false} element={
          <div className='holder'>
                <Leftregion />
                <Tool8 />
          </div>
          } />
            <Route path="/calculators" caseSensitive={false} element={
          <div className='holder'>
            <Leftregion />
          </div>
          } />
          <Route path="/tool9" caseSensitive={false} element={
          <div className='holder'>
                <Leftregion />
                <Tool9 />
          </div>
          } />

        <Route path="/tool10" caseSensitive={false} element={
          <div className='holder'>
                        <Leftregion />
                <Tool10 />
          </div>
          } /> */}

        </Routes>
    </Router>
    </div>
  );
}

export default App;
