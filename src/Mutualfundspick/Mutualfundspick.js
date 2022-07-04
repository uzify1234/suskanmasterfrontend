import React,{useState,useEffect} from 'react'
import Header from '../Helpers/Header';
import './Mutualfundspick.css';
import { useNavigate, useParams } from "react-router-dom";
import db, { auth } from '../Helpers/Firebase';


function Mutualfundspick() {

    const navigate = useNavigate();

    const [name, setname] = useState("");
    const [arn, setArn] = useState("");
    const [mobile, setMobile] = useState("");
    const [fourth, setfourth] = useState("--");
    const [fifth, setfifth] = useState("--");
    const [sixth, setsixth] = useState("--");
    const [seventh, setseventh] = useState("--");
    const [eight, seteight] = useState("--");
    const [ninth, setninth] = useState("--");
    const [tenth, settenth] = useState("--");
    const [eleventh, seteleventh] = useState("--");
    const [twelveth, settwelveth] = useState("--");
    const [thirteenth, setthirteenth] = useState("--");
    const [fourteenth, setfourteenth] = useState("--");
    const [fifteenth, setfifteenth] = useState("--");
    const [sixteenth, setsixteenth] = useState("");
    const [seventeenth, setseventeenth] = useState("--");

	const [formattempted, setformattempted] = useState(false);
	
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
            } else {
                navigate('/');
            }
          });
    }, [])

    const submitted = () => {
        console.log(fourth);
        if(name == "" || arn == "" || mobile == "" || sixteenth == "") {
            alert("Please answer all questions");
        }
        else if(fourth == "--" || fifth == "--" || sixth == "--" || seventh == "--" || eight == "--" || ninth == "--" || tenth == "--" || eleventh == "--" || twelveth == "--" || thirteenth == "--" || fourteenth == "--" || fifteenth == "--" || seventeenth == "--") {
            alert("Please answer all questions");
        }
        else {
            var x  = {
                "addedon" : Math.floor(Date.now() / 1000),
                "name" : name,
                "arn" : arn,
                "mobile" : mobile,
                "largecap1" : fourth,
                "largecap2" : fifth,
                "midcap1" : sixth,
                "midcap2" : seventh,
                "smallcap1" : eight,
                "smallcap2" : ninth,
                "assetallocator" : tenth,
                "shorttermdebt" : eleventh,
                "longtermdebt" : twelveth,
                "bullish" : thirteenth,
                "suggesteddebt" : fourteenth,
                "suggestedhybrid" : fifteenth,
                "suggestedetf" : sixteenth,
                "internationalfund" : seventeenth
            };
            var id = db.collection('mutualfundspick').doc().id;
            db.collection("mutualfundspick").doc(id).set(x)
            .then(function(docRef) {
                setformattempted(true);

            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
        }
    }

    return (
        <div className='mutualfundspick'>
            <Header />
            	<div class="sec1cover">
	<div class="container sec1">
		{formattempted && <div class="sec1confirm">
			<h5>Your application is submitted !</h5>
            <button onClick={() => navigate("/volatilitydashboard")}>Back to Home</button>
		</div>}


		{!formattempted && <div class="sec1inner">

			<h3>Your Best Mutual Funds Pick</h3>
			<h5>VC dash board - Monthly Activities Updates ( Extra perks to those who update this every month)</h5>


			<h5>1. Enter your name </h5>
			<div class="input-group mb-3">
  				<div class="input-group-prepend">
    				<span class="input-group-text" id="basic-addon1">Name</span>
  				</div>
  				<input id="inp11" type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" value={name} onChange={e => setname(e.target.value)} />
			</div>



			<h5>2. Enter your ARN No </h5>
			<div class="input-group mb-3">
  				<div class="input-group-prepend">
    				<span class="input-group-text" id="basic-addon1">ARN</span>
  				</div>
  				<input id="newinp12" type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" value={arn} onChange={e => setArn(e.target.value)} />
			</div>


			<h5>3. Enter your Mobile No </h5>
			<div class="input-group mb-3">
  				<div class="input-group-prepend">
    				<span class="input-group-text" id="basic-addon1">Mobile</span>
  				</div>
  				<input id="newinp13" type="number" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" value={mobile} onChange={e => setMobile(e.target.value)} />
			</div>


			<h5>4. 1st Mutual Fund Pick For the Next 30 Days in Largecap </h5>
			<div class="input-group mb-3">
  				<div class="input-group-prepend">
    				<span class="input-group-text" id="basic-addon1">Largecap</span>
  				</div>
  				<select name="large1" id="large1" onChange={e => setfourth(e.target.value)}>
  					<option value="--">--</option>
  					<option value="ICICI Prudential Bluechip Fund">ICICI Prudential Bluechip Fund</option>
  					<option value="SBI Blue Chip Fund">SBI Blue Chip Fund</option>
  					<option value="Mirae Asset Large Cap Fund">Mirae Asset Large Cap Fund</option>
  					<option value="Aditya Birla Sun Life Frontline Equity Fund">Aditya Birla Sun Life Frontline Equity Fund</option>

  					<option value="HDFC Top 100 Fund">HDFC Top 100 Fund</option>
  					<option value="Axis Bluechip Fund">Axis Bluechip Fund</option>
  					<option value="Nippon India Large Cap Fund">Nippon India Large Cap Fund</option>
  					<option value="UTI Mastershare">UTI Mastershare</option>

  					<option value="Franklin India Bluechip Fund">Franklin India Bluechip Fund</option>
  					<option value="DSP Top 100 Equity Fund">DSP Top 100 Equity Fund</option>
  					<option value="Kotak Bluechip Fund">Kotak Bluechip Fund</option>
  					<option value="BNP Paribas Large Cap Fund">BNP Paribas Large Cap Fund</option>

  					<option value="TATA large Cap Fund">TATA large Cap Fund</option>
  					<option value="Canara Robeco Bluechip Equity Fund">Canara Robeco Bluechip Equity Fund</option>
  					<option value="HSBC Large Cap Fund">HSBC Large Cap Fund</option>
  					<option value="L&T india Large Cap Fund">L&T india Large Cap Fund</option>

  					<option value="JM Large Cap Fund">JM Large Cap Fund</option>
  					<option value="IDFC large Cap Fund">IDFC large Cap Fund</option>
  					<option value="IDBI India Top 100 Equity Fund">IDBI India Top 100 Equity Fund</option>
  					<option value="PGIM India Large Cap Fund">PGIM India Large Cap Fund</option>

  					<option value="None">None</option>
  					
				</select>
			</div>


			<h5>5. 2nd Mutual Fund Pick For the Next 30 Days in Largecap </h5>
			<div class="input-group mb-3">
  				<div class="input-group-prepend">
    				<span class="input-group-text" id="basic-addon1">Largecap</span>
  				</div>
  				<select name="large2" id="large2" onChange={e => setfifth(e.target.value)}>
  					<option value="--">--</option>
  					<option value="ICICI Prudential Bluechip Fund">ICICI Prudential Bluechip Fund</option>
  					<option value="SBI Blue Chip Fund">SBI Blue Chip Fund</option>
  					<option value="Mirae Asset Large Cap Fund">Mirae Asset Large Cap Fund</option>
  					<option value="Aditya Birla Sun Life Frontline Equity Fund">Aditya Birla Sun Life Frontline Equity Fund</option>

  					<option value="HDFC Top 100 Fund">HDFC Top 100 Fund</option>
  					<option value="Axis Bluechip Fund">Axis Bluechip Fund</option>
  					<option value="Nippon India Large Cap Fund">Nippon India Large Cap Fund</option>
  					<option value="UTI Mastershare">UTI Mastershare</option>

  					<option value="Franklin India Bluechip Fund">Franklin India Bluechip Fund</option>
  					<option value="DSP Top 100 Equity Fund">DSP Top 100 Equity Fund</option>
  					<option value="Kotak Bluechip Fund">Kotak Bluechip Fund</option>
  					<option value="BNP Paribas Large Cap Fund">BNP Paribas Large Cap Fund</option>

  					<option value="TATA large Cap Fund">TATA large Cap Fund</option>
  					<option value="Canara Robeco Bluechip Equity Fund">Canara Robeco Bluechip Equity Fund</option>
  					<option value="HSBC Large Cap Fund">HSBC Large Cap Fund</option>
  					<option value="L&T india Large Cap Fund">L&T india Large Cap Fund</option>

  					<option value="JM Large Cap Fund">JM Large Cap Fund</option>
  					<option value="IDFC large Cap Fund">IDFC large Cap Fund</option>
  					<option value="IDBI India Top 100 Equity Fund">IDBI India Top 100 Equity Fund</option>
  					<option value="PGIM India Large Cap Fund">PGIM India Large Cap Fund</option>

  					<option value="Invesco India Large Cap Fund">Invesco India Large Cap Fund</option>
  					<option value="Edelweiss Large Cap Fund">Edelweiss Large Cap Fund</option>
  					<option value="None">None</option>
  					
				</select>
			</div>



			<h5>6. 1st Mutual Fund Pick for The Next 30 Days in Mid Cap Category </h5>
			<div class="input-group mb-3">
  				<div class="input-group-prepend">
    				<span class="input-group-text" id="basic-addon1">Midcap</span>
  				</div>
  				<select name="mid1" id="mid1" onChange={e => setsixth(e.target.value)}>
  					<option value="--">--</option>
  					<option value="HDFC Midcap Opportunities Fund">HDFC Midcap Opportunities Fund</option>
  					<option value="DSP Mid Cap Opportunities Fund">DSP Mid Cap Opportunities Fund</option>
  					<option value="Kotak Emerging Equity Fund">Kotak Emerging Equity Fund</option>
  					<option value="Nippon India Growth Fund">Nippon India Growth Fund</option>

  					<option value="Franklin India Prima Fund">Franklin India Prima Fund</option>
  					<option value="AXIS Midcap Fund">AXIS Midcap Fund</option>
  					<option value="L&T Midcap Fund">L&T Midcap Fund</option>
  					<option value="Sundaram Midcap Fund">Sundaram Midcap Fund</option>

  					<option value="UTI Midcap Fund">UTI Midcap Fund</option>
  					<option value="SBI Magnum Midcap Fund">SBI Magnum Midcap Fund</option>
  					<option value="Mirae Asset Midcap Fund">Mirae Asset Midcap Fund</option>
  					<option value="Aditya Birla Sun Life Mid Cap Fund">Aditya Birla Sun Life Mid Cap Fund</option>

  					<option value="ICICI Prudential Midcap Fund">ICICI Prudential Midcap Fund</option>
  					<option value="Motilal Oswal Midcap 30 Fund">Motilal Oswal Midcap 30 Fund</option>
  					<option value="Invesco Midcap Fund">Invesco Midcap Fund</option>
  					<option value="Edelweiss Midcap Fund">Edelweiss Midcap Fund</option>

  					<option value="TATA Midcap Growth Fund">TATA Midcap Growth Fund</option>
  					<option value="BNP Paribas Midcap Growth Fund">BNP Paribas Midcap Growth Fund</option>
  					<option value="Principal Midcap Fund">Principal Midcap Fund</option>
  					<option value="PGIM India Midcap Opportunities Fund">PGIM India Midcap Opportunities Fund</option>

  					<option value="Invesco India Large Cap Fund">Union Midcap Fund</option>
  					<option value="Edelweiss Large Cap Fund">IDBI Midcap Fund</option>
  					<option value="Mahindra Manulife Midcap Unnati Yojna">Mahindra Manulife Midcap Unnati Yojna</option>
  					<option value="None">None</option>
  					
				</select>
			</div>



			<h5>7. 2nd Mutual Fund Pick for The Next 30 Days in Mid Cap Category </h5>
			<div class="input-group mb-3">
  				<div class="input-group-prepend">
    				<span class="input-group-text" id="basic-addon1">Midcap</span>
  				</div>
  				<select name="mid2" id="mid2" onChange={e => setseventh(e.target.value)}>
  					<option value="--">--</option>
  					<option value="HDFC Midcap Opportunities Fund">HDFC Midcap Opportunities Fund</option>
  					<option value="DSP Mid Cap Opportunities Fund">DSP Mid Cap Opportunities Fund</option>
  					<option value="Kotak Emerging Equity Fund">Kotak Emerging Equity Fund</option>
  					<option value="Nippon India Growth Fund">Nippon India Growth Fund</option>

  					<option value="Franklin India Prima Fund">Franklin India Prima Fund</option>
  					<option value="AXIS Midcap Fund">AXIS Midcap Fund</option>
  					<option value="L&T Midcap Fund">L&T Midcap Fund</option>
  					<option value="Sundaram Midcap Fund">Sundaram Midcap Fund</option>

  					<option value="UTI Midcap Fund">UTI Midcap Fund</option>
  					<option value="SBI Magnum Midcap Fund">SBI Magnum Midcap Fund</option>
  					<option value="Mirae Asset Midcap Fund">Mirae Asset Midcap Fund</option>
  					<option value="Aditya Birla Sun Life Mid Cap Fund">Aditya Birla Sun Life Mid Cap Fund</option>

  					<option value="ICICI Prudential Midcap Fund">ICICI Prudential Midcap Fund</option>
  					<option value="Motilal Oswal Midcap 30 Fund">Motilal Oswal Midcap 30 Fund</option>
  					<option value="Invesco Midcap Fund">Invesco Midcap Fund</option>
  					<option value="Edelweiss Midcap Fund">Edelweiss Midcap Fund</option>

  					<option value="TATA Midcap Growth Fund">TATA Midcap Growth Fund</option>
  					<option value="BNP Paribas Midcap Growth Fund">BNP Paribas Midcap Growth Fund</option>
  					<option value="Principal Midcap Fund">Principal Midcap Fund</option>
  					<option value="PGIM India Midcap Opportunities Fund">PGIM India Midcap Opportunities Fund</option>

  					<option value="Union Midcap Fund">Union Midcap Fund</option>
  					<option value="IDBI Midcap Fund">IDBI Midcap Fund</option>
  					<option value="Mahindra Manulife Midcap Unnati Yojna">Mahindra Manulife Midcap Unnati Yojna</option>
  					<option value="None">None</option>
  					
				</select>
			</div>



			<h5>8. 1st Mutual Fund Pick for The Next 30 Days in Small-Cap Category </h5>
			<div class="input-group mb-3">
  				<div class="input-group-prepend">
    				<span class="input-group-text" id="basic-addon1">Smallcap</span>
  				</div>
  				<select name="small1" id="small1" onChange={e => seteight(e.target.value)}>
  					<option value="--">--</option>
  					<option value="Nippon India Small Cap Fund">Nippon India Small Cap Fund</option>
  					<option value="HDFC Small Cap Fund">HDFC Small Cap Fund</option>
  					<option value="Franklin India Smaller Companies Fund">Franklin India Smaller Companies Fund</option>
  					<option value="L&T Emerging Business Fund">L&T Emerging Business Fund</option>

  					<option value="DSP Small Cap Fund">DSP Small Cap Fund</option>
  					<option value="SBI Small Cap Fund">SBI Small Cap Fund</option>
  					<option value="Axis Small Cap Fund">Axis Small Cap Fund</option>
  					<option value="Aditya Birla Sun Life Small Cap Fund">Aditya Birla Sun Life Small Cap Fund</option>

  					<option value="Kotak Small Cap Fund">Kotak Small Cap Fund</option>
  					<option value="ICICI Prudential Small Cap Fund">ICICI Prudential Small Cap Fund</option>
  					<option value="Sundaram Small Cap Fund">Sundaram Small Cap Fund</option>
  					<option value="TATA Small Cap Fund">TATA Small Cap Fund</option>

  					<option value="IDFC Emerging Businesses Fund">IDFC Emerging Businesses Fund</option>
  					<option value="Invesco India Small Cap Fund">Invesco India Small Cap Fund</option>
  					<option value="Edelweiss Small Cap Fund">Edelweiss Small Cap Fund</option>
  					<option value="Union Small Cap Fund">Union Small Cap Fund</option>

  					<option value="HSBC Small Cap Equity Fund">HSBC Small Cap Equity Fund</option>
  					<option value="ITI Small Cap">ITI Small Cap</option>
  					<option value="Pincipal Small Cap Fund">Pincipal Small Cap Fund</option>
  					<option value="IDBI Small Cap">IDBI Small Cap</option>

  					<option value="BOI AXA Small Cap Fund">BOI AXA Small Cap Fund</option>
  					<option value="Canara Small Cap">Canara Small Cap</option>
  					<option value="None">None</option>
  					
				</select>
			</div>



			<h5>9. 2nd Mutual Fund Pick for The Next 30 Days in Small-Cap Category </h5>
			<div class="input-group mb-3">
  				<div class="input-group-prepend">
    				<span class="input-group-text" id="basic-addon1">Smallcap</span>
  				</div>
  				<select name="small2" id="small2" onChange={e => setninth(e.target.value)}>
  					<option value="--">--</option>
  					<option value="Nippon India Small Cap Fund">Nippon India Small Cap Fund</option>
  					<option value="HDFC Small Cap Fund">HDFC Small Cap Fund</option>
  					<option value="Franklin India Smaller Companies Fund">Franklin India Smaller Companies Fund</option>
  					<option value="L&T Emerging Business Fund">L&T Emerging Business Fund</option>

  					<option value="DSP Small Cap Fund">DSP Small Cap Fund</option>
  					<option value="SBI Small Cap Fund">SBI Small Cap Fund</option>
  					<option value="Axis Small Cap Fund">Axis Small Cap Fund</option>
  					<option value="Aditya Birla Sun Life Small Cap Fund">Aditya Birla Sun Life Small Cap Fund</option>

  					<option value="Kotak Small Cap Fund">Kotak Small Cap Fund</option>
  					<option value="ICICI Prudential Small Cap Fund">ICICI Prudential Small Cap Fund</option>
  					<option value="Sundaram Small Cap Fund">Sundaram Small Cap Fund</option>
  					<option value="TATA Small Cap Fund">TATA Small Cap Fund</option>

  					<option value="IDFC Emerging Businesses Fund">IDFC Emerging Businesses Fund</option>
  					<option value="Invesco India Small Cap Fund">Invesco India Small Cap Fund</option>
  					<option value="Edelweiss Small Cap Fund">Edelweiss Small Cap Fund</option>
  					<option value="Union Small Cap Fund">Union Small Cap Fund</option>

  					<option value="HSBC Small Cap Equity Fund">HSBC Small Cap Equity Fund</option>
  					<option value="ITI Small Cap">ITI Small Cap</option>
  					<option value="Pincipal Small Cap Fund">Pincipal Small Cap Fund</option>
  					<option value="IDBI Small Cap">IDBI Small Cap</option>

  					<option value="BOI AXA Small Cap Fund">BOI AXA Small Cap Fund</option>
  					<option value="Canara Small Cap">Canara Small Cap</option>
  					<option value="None">None</option>
  					
				</select>
			</div>




			<h5>10. Top Mutual Fund Pick for The Next 30 Days in Asset Allocator Category (Choose AMC Name) </h5>
			<div class="input-group mb-3">
  				<div class="input-group-prepend">
    				<span class="input-group-text" id="basic-addon1">Asset Allocator</span>
  				</div>
  				<select name="asset1" id="asset1" onChange={e => settenth(e.target.value)}>
  					<option value="--">--</option>
  					<option value="AXIS Mutual Fund">AXIS Mutual Fund</option>
  					<option value="Kotak Mutual Fund">Kotak Mutual Fund</option>
  					<option value="Nippon India Mutual Fund">Nippon India Mutual Fund</option>
  					<option value="HDFC Mutual Fund">HDFC Mutual Fund</option>

  					<option value="SBI Mutual Fund">SBI Mutual Fund</option>
  					<option value="ICICI Prudential Mutual Fund">ICICI Prudential Mutual Fund</option>
  					<option value="Aditya Birla Sunlife Mutual Fund">Aditya Birla Sunlife Mutual Fund</option>
  					<option value="UTI Mutual Fund">UTI Mutual Fund</option>

  					<option value="Franklin Templeton Mutual Fund">Franklin Templeton Mutual Fund</option>
  					<option value="IDFC Mutual Fund">IDFC Mutual Fund</option>
  					<option value="DSP Mutual Fund">DSP Mutual Fund</option>
  					<option value="TATA Mutual Fund">TATA Mutual Fund</option>

  					<option value="L&T Mutual Fund">L&T Mutual Fund</option>
  					<option value="PGIM India Mutual Fund">PGIM India Mutual Fund</option>
  					<option value="Sundaram Mutual Fund">Sundaram Mutual Fund</option>
  					<option value="Invesco Mutual Fund">Invesco Mutual Fund</option>

  					<option value="LIC Mutual Fund">LIC Mutual Fund</option>
  					<option value="JM Financial Mutual Fund">JM Financial Mutual Fund</option>
  					<option value="Baroda Pioneer Mutual Fund">Baroda Pioneer Mutual Fund</option>
  					<option value="Canara Robeco Mutual Fund">Canara Robeco Mutual Fund</option>

  					<option value="HSBC Mutual Fund">HSBC Mutual Fund</option>
  					<option value="IDBI Mutual Fund">IDBI Mutual Fund</option>
  					<option value="Indiabull Mutual Fund">Indiabull Mutual Fund</option>
  					<option value="Motilal Oswal Mutual Fund">Motilal Oswal Mutual Fund</option>
  					<option value="BNP Paribas Mutual Fund">BNP Paribas Mutual Fund</option>
  					<option value="Mirae Asset Mutual Fund">Mirae Asset Mutual Fund</option>

  					<option value="Principal Mutual Fund">Principal Mutual Fund</option>
  					<option value="BOI AXA Mutual Fund">BOI AXA Mutual Fund</option>
  					<option value="Union Mutual Fund">Union Mutual Fund</option>
  					<option value="Tauras Mutual Fund">Tauras Mutual Fund</option>

  					<option value="Edelweiss Mutual Fund">Edelweiss Mutual Fund</option>
  					<option value="Essel mutual Fund">Essel mutual Fund</option>
  					<option value="Mahindra Mutual Fund">Mahindra Mutual Fund</option>
  					<option value="Quantam Mutual Fund">Quantam Mutual Fund</option>
  					<option value="PPFAS Mutual Fund">PPFAS Mutual Fund</option>
  					<option value="IIFL Mutual Fund">IIFL Mutual Fund</option>

  					<option value="Quant Mutual Fund">Quant Mutual Fund</option>
  					<option value="Shriram Mutual Fund">Shriram Mutual Fund</option>
  					<option value="Union Mutual Fund">Sahara Mutual Fund</option>
  					
  					<option value="None">None</option>
  					
				</select>
			</div>



			<h5>11. Top Mutual Fund Pick for The Short Term Debt Category (Choose AMC Name) </h5>
			<div class="input-group mb-3">
  				<div class="input-group-prepend">
    				<span class="input-group-text" id="basic-addon1">Short Term Debt</span>
  				</div>
  				<select name="sd1" id="sd1" onChange={e => seteleventh(e.target.value)}>
  					<option value="--">--</option>
  					<option value="AXIS Mutual Fund">AXIS Mutual Fund</option>
  					<option value="Kotak Mutual Fund">Kotak Mutual Fund</option>
  					<option value="Nippon India Mutual Fund">Nippon India Mutual Fund</option>
  					<option value="HDFC Mutual Fund">HDFC Mutual Fund</option>

  					<option value="SBI Mutual Fund">SBI Mutual Fund</option>
  					<option value="ICICI Prudential Mutual Fund">ICICI Prudential Mutual Fund</option>
  					<option value="Aditya Birla Sunlife Mutual Fund">Aditya Birla Sunlife Mutual Fund</option>
  					<option value="UTI Mutual Fund">UTI Mutual Fund</option>

  					<option value="Franklin Templeton Mutual Fund">Franklin Templeton Mutual Fund</option>
  					<option value="IDFC Mutual Fund">IDFC Mutual Fund</option>
  					<option value="DSP Mutual Fund">DSP Mutual Fund</option>
  					<option value="TATA Mutual Fund">TATA Mutual Fund</option>

  					<option value="L&T Mutual Fund">L&T Mutual Fund</option>
  					<option value="PGIM India Mutual Fund">PGIM India Mutual Fund</option>
  					<option value="Sundaram Mutual Fund">Sundaram Mutual Fund</option>
  					<option value="Invesco Mutual Fund">Invesco Mutual Fund</option>

  					<option value="LIC Mutual Fund">LIC Mutual Fund</option>
  					<option value="JM Financial Mutual Fund">JM Financial Mutual Fund</option>
  					<option value="Baroda Pioneer Mutual Fund">Baroda Pioneer Mutual Fund</option>
  					<option value="Canara Robeco Mutual Fund">Canara Robeco Mutual Fund</option>

  					<option value="HSBC Mutual Fund">HSBC Mutual Fund</option>
  					<option value="IDBI Mutual Fund">IDBI Mutual Fund</option>
  					<option value="Indiabull Mutual Fund">Indiabull Mutual Fund</option>
  					<option value="Motilal Oswal Mutual Fund">Motilal Oswal Mutual Fund</option>
  					<option value="BNP Paribas Mutual Fund">BNP Paribas Mutual Fund</option>
  					<option value="Mirae Asset Mutual Fund">Mirae Asset Mutual Fund</option>

  					<option value="Principal Mutual Fund">Principal Mutual Fund</option>
  					<option value="BOI AXA Mutual Fund">BOI AXA Mutual Fund</option>
  					<option value="Union Mutual Fund">Union Mutual Fund</option>
  					<option value="Tauras Mutual Fund">Tauras Mutual Fund</option>

  					<option value="Edelweiss Mutual Fund">Edelweiss Mutual Fund</option>
  					<option value="Essel mutual Fund">Essel mutual Fund</option>
  					<option value="Mahindra Mutual Fund">Mahindra Mutual Fund</option>
  					<option value="Quantam Mutual Fund">Quantam Mutual Fund</option>
  					<option value="PPFAS Mutual Fund">PPFAS Mutual Fund</option>
  					<option value="IIFL Mutual Fund">IIFL Mutual Fund</option>

  					<option value="Quant Mutual Fund">Quant Mutual Fund</option>
  					<option value="Shriram Mutual Fund">Shriram Mutual Fund</option>
  					<option value="Union Mutual Fund">Sahara Mutual Fund</option>
  					
  					<option value="None">None</option>
  					
				</select>
			</div>


			<h5>12. Top Mutual Fund Pick for The Long Term Debt Category ( Choose AMC Name ) </h5>
			<div class="input-group mb-3">
  				<div class="input-group-prepend">
    				<span class="input-group-text" id="basic-addon1">Long Term Debt</span>
  				</div>
  				<select name="ld1" id="ld1" onChange={e => settwelveth(e.target.value)}>
  					<option value="--">--</option>
  					<option value="AXIS Mutual Fund">AXIS Mutual Fund</option>
  					<option value="Kotak Mutual Fund">Kotak Mutual Fund</option>
  					<option value="Nippon India Mutual Fund">Nippon India Mutual Fund</option>
  					<option value="HDFC Mutual Fund">HDFC Mutual Fund</option>

  					<option value="SBI Mutual Fund">SBI Mutual Fund</option>
  					<option value="ICICI Prudential Mutual Fund">ICICI Prudential Mutual Fund</option>
  					<option value="Aditya Birla Sunlife Mutual Fund">Aditya Birla Sunlife Mutual Fund</option>
  					<option value="UTI Mutual Fund">UTI Mutual Fund</option>

  					<option value="Franklin Templeton Mutual Fund">Franklin Templeton Mutual Fund</option>
  					<option value="IDFC Mutual Fund">IDFC Mutual Fund</option>
  					<option value="DSP Mutual Fund">DSP Mutual Fund</option>
  					<option value="TATA Mutual Fund">TATA Mutual Fund</option>

  					<option value="L&T Mutual Fund">L&T Mutual Fund</option>
  					<option value="PGIM India Mutual Fund">PGIM India Mutual Fund</option>
  					<option value="Sundaram Mutual Fund">Sundaram Mutual Fund</option>
  					<option value="Invesco Mutual Fund">Invesco Mutual Fund</option>

  					<option value="LIC Mutual Fund">LIC Mutual Fund</option>
  					<option value="JM Financial Mutual Fund">JM Financial Mutual Fund</option>
  					<option value="Baroda Pioneer Mutual Fund">Baroda Pioneer Mutual Fund</option>
  					<option value="Canara Robeco Mutual Fund">Canara Robeco Mutual Fund</option>

  					<option value="HSBC Mutual Fund">HSBC Mutual Fund</option>
  					<option value="IDBI Mutual Fund">IDBI Mutual Fund</option>
  					<option value="Indiabull Mutual Fund">Indiabull Mutual Fund</option>
  					<option value="Motilal Oswal Mutual Fund">Motilal Oswal Mutual Fund</option>
  					<option value="BNP Paribas Mutual Fund">BNP Paribas Mutual Fund</option>
  					<option value="Mirae Asset Mutual Fund">Mirae Asset Mutual Fund</option>

  					<option value="Principal Mutual Fund">Principal Mutual Fund</option>
  					<option value="BOI AXA Mutual Fund">BOI AXA Mutual Fund</option>
  					<option value="Union Mutual Fund">Union Mutual Fund</option>
  					<option value="Tauras Mutual Fund">Tauras Mutual Fund</option>

  					<option value="Edelweiss Mutual Fund">Edelweiss Mutual Fund</option>
  					<option value="Essel mutual Fund">Essel mutual Fund</option>
  					<option value="Mahindra Mutual Fund">Mahindra Mutual Fund</option>
  					<option value="Quantam Mutual Fund">Quantam Mutual Fund</option>
  					<option value="PPFAS Mutual Fund">PPFAS Mutual Fund</option>
  					<option value="IIFL Mutual Fund">IIFL Mutual Fund</option>

  					<option value="Quant Mutual Fund">Quant Mutual Fund</option>
  					<option value="Shriram Mutual Fund">Shriram Mutual Fund</option>
  					<option value="Union Mutual Fund">Sahara Mutual Fund</option>
  					
  					<option value="None">None</option>
  					
				</select>
			</div>



			<h5>13. Which of The Following are You Bullish on in the Next 1 Year Time Horizon </h5>
			<div class="input-group mb-3">
  				<div class="input-group-prepend">
    				<span class="input-group-text" id="basic-addon1">Bullish</span>
  				</div>
  				<select name="customshort1" id="customshort1" onChange={e => setthirteenth(e.target.value)}>
  					<option value="--">--</option>
  					<option value="Equity Large Cap">Equity Large Cap</option>
  					<option value="Equity Mid Cap">Equity Mid Cap</option>
  					<option value="Equity Small Cap">Equity Small Cap</option>
  					<option value="Equity Multi cap">Equity Multi cap</option>

  					
  					
				</select>
			</div>



			<h5>14. Which Debt Category You Will Suggest For Next 1 Year </h5>
			<div class="input-group mb-3">
  				<div class="input-group-prepend">
    				<span class="input-group-text" id="basic-addon1">Debt</span>
  				</div>
  				<select name="customshort2" id="customshort2" onChange={e => setfourteenth(e.target.value)}>
  					<option value="--">--</option>
  					<option value="Debt Low Duration">Debt Low Duration</option>
  					<option value="Debt High Duration">Debt High Duration</option>
  					<option value="Long term Gilt">Long term Gilt</option>
  					<option value="Long term Corporate Bond">Long term Corporate Bond</option>
  					<option value="PSU and Banking Debt">PSU and Banking Debt</option>

  					
  					
				</select>
			</div>


			<h5>15. Which one will you suggest in Hybrid Category </h5>
			<div class="input-group mb-3">
  				<div class="input-group-prepend">
    				<span class="input-group-text" id="basic-addon1">Hybrid</span>
  				</div>
  				<select name="customshort3" id="customshort3" onChange={e => setfifteenth(e.target.value)}>
  					<option value="--">--</option>
  					<option value="Debt Low Duration">Asset Allocators (BAF category)</option>
  					<option value="Debt High Duration">Gold</option>
  					<option value="Long term Gilt">MIP</option>
  					<option value="Long term Corporate Bond">Fund of Funds</option>

  					
  					
				</select>
			</div>



			<h5>16. Which International Fund you will recommend? </h5>
			<div class="input-group mb-3">
  				<div class="input-group-prepend">
    				<span class="input-group-text" id="basic-addon1">Recommended International Fund</span>
  				</div>
  				<input id="customfundinput" type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" value={sixteenth} onChange={e => setsixteenth(e.target.value)}/>
			</div>



			<h5>17. Which ETF you will recommend? </h5>
			<div class="input-group mb-3">
  				<div class="input-group-prepend">
    				<span class="input-group-text" id="basic-addon1">ETF</span>
  				</div>
  				<select name="customshort4" id="customshort4" onChange={e => setseventeenth(e.target.value)}>
  					<option value="--">--</option>
  					<option value="NIFTY">NIFTY</option>
  					<option value="Bank NIFTY">Bank NIFTY</option>
  					<option value="Gold">Gold</option>
  					<option value="Small cap">Small cap</option>
  					<option value="Mid cap">Mid cap</option>
  					<option value="International">International</option>	
				</select>
			</div>
			<button onClick={submitted}>Submit</button>
		</div> }
	</div>
	</div>
        </div>
    )
}

export default Mutualfundspick
