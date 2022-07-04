import React , {useState , useEffect} from 'react'
import './Upperview.css';
import './Lowerview.css'
import * as Constants from './Constants.js';
import axios from 'axios';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Comparision from './Comparision.js';
import { getFCP } from 'web-vitals';
import rollingdata from './RollingData';
import dbmf from './Firebase';
import { auth } from '../Helpers/Firebase';
import { useNavigate, useParams } from "react-router-dom";



function Upperview({dp}) {
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
            } else {
                navigate('/');
            }
          });
    }, [])


    const [originallistingoffunds, setoriginallistingoffunds] = useState([]);

    const [allcategoryaveragesexist, setallcategoryaveragesexist] = useState({});
    const [entriestofetch, setentriestofetch] = useState(70);

    const [filteredwholescreenerdata, setfilteredwholescreenerdata] = useState([]);
    const [filterwholefundcarddata, setfilterwholefundcarddata] = useState([]);
    const [filterwholeanalyticaldata, setfilterwholeanalyticaldata] = useState([])

    const [wholescreenerdata, setwholescreenerdata] = useState([]);
    const [wholeanalyticaldata, setwholeanalyticaldata] = useState([]);
    const [wholefundcarddata, setwholefundcarddata] = useState([]);


    const [allportfoliofunds, setallportfoliofunds] = useState([]);
    const [sortby, setsortby] = useState("none");
    const [sortorder, setsortorder] = useState("ascending");
    const [sortedby, setsortedby] = useState("");

    const [minaumtyped, setminaumtyped] = useState(0);
    const [minaumapplied, setminaumapplied] = useState(0);

    const [allfundsinfo, setallfundsinfo] = useState([]);
    const [tempholder, settempholder] = useState([]);
    const [allfundsinfonecessary, setallfundsinfonecessary] = useState([]);
    const [portfoliofundsindetails, setportfoliofundsindetails] = useState([]);
    const [backupallfundsinfonecessary, setbackupallfundsinfonecessary] = useState([]);


    const [headingcategories, setheadingcategories] = useState([]);

    const [wholeexistportfoliofunds, setwholeexistportfoliofunds] = useState([]);

    // 'Sharpe 1M','Sharpe 3M','Sharpe 6M','Sharpe 1Y','Sharpe 3Y','Sharpe 5Y','Sharpe 7Y','Sortino 1M','Sortino 3M','Sortino 6M','Sortino 1Y','Sortino 3Y','Sortino 5Y','Sortino 7Y','St Dev 1M','St Dev 3M','St Dev 6M','St Dev 1Y','St Dev 3Y','St Dev 5Y','St Dev 7Y','Beta 1M','Beta 3M','Beta 6M','Beta 1Y','Beta 3Y','Beta 5Y','Beta 7Y','Treynor Ratio 1M','Treynor Ratio 3M','Treynor Ratio 6M','Treynor Ratio 1Y','Treynor Ratio 3Y','Treynor Ratio 5Y','Treynor Ratio 7Y','Jensens Alpha 1M','Jensens Alpha 3M','Jensens Alpha 6M','Jensens Alpha 1Y','Jensens Alpha 3Y','Jensens Alpha 5Y','Jensens Alpha 7Y','Information Ratio 1M','Information Ratio 3M','Information Ratio 6M','Information Ratio 1Y','Information Ratio 3Y','Information Ratio 5Y','Information Ratio 7Y','R Squared 1M','R Squared 3M','R Squared 6M','R Squared 1Y','R Squared 3Y','R Squared 5Y','R Squared 7Y'






    const [allavailableoptions, setallavailableoptions] = useState(['Scheme Name' , 'SEBI Classification' ,'Category', 'Nav', 'AUM Cr','TER','Net YTM','YTM','Av Mat','Dur','Sov','AAA','AA','A','PE','Largecap %','Midcap %','Smallcap %','YTD','2020','2019','2018','2017','2016','2015','1M','3M','6M','1Y','3Y','5Y','7Y','10Y','Sharpe 1M','Sharpe 3M','Sharpe 6M','Sharpe 1Y','Sharpe 3Y','Sharpe 5Y','Sharpe 7Y','Sortino 1M','Sortino 3M','Sortino 6M','Sortino 1Y','Sortino 3Y','Sortino 5Y','Sortino 7Y','St Dev 1M','St Dev 3M','St Dev 6M','St Dev 1Y','St Dev 3Y','St Dev 5Y','St Dev 7Y','Beta 1M','Beta 3M','Beta 6M','Beta 1Y','Beta 3Y','Beta 5Y','Beta 7Y','Treynor Ratio 1M','Treynor Ratio 3M','Treynor Ratio 6M','Treynor Ratio 1Y','Treynor Ratio 3Y','Treynor Ratio 5Y','Treynor Ratio 7Y','Jensens Alpha 1M','Jensens Alpha 3M','Jensens Alpha 6M','Jensens Alpha 1Y','Jensens Alpha 3Y','Jensens Alpha 5Y','Jensens Alpha 7Y','Information Ratio 1M','Information Ratio 3M','Information Ratio 6M','Information Ratio 1Y','Information Ratio 3Y','Information Ratio 5Y','Information Ratio 7Y','R Squared 1M','R Squared 3M','R Squared 6M','R Squared 1Y','R Squared 3Y','R Squared 5Y','R Squared 7Y']);

    const [displayportalvisible, setdisplayportalvisible] = useState("none");
    const [categoriesportalvisible, setcategoriesportalvisible] = useState("none");
    const [amcportalvisible, setamcportalvisible] = useState("none");
    const [compareviewvisible, setcompareviewvisible] = useState("none")

    const [allavailablecategories, setallavailablecategories] = useState([])
    const [allselectedcategories, setallselectedcategories] = useState([])


    const [allfieldswrapperaverages, setallfieldswrapperaverages] = useState([]);

    const [isallselected, setisallselected] = useState(false);

    const [globallocalapikey, setgloballocalapikey] = useState("nA0u7X8Bgj-sqhiYT6Wh");


const [allrollingreturnsthing, setallrollingreturnsthing] = useState({});




    const [allavailableamc, setallavailableamc] = useState([
         
{key : "Aditya Birla Sun Life AMC Limited", value : "AMC1"},
{key : "Axis Asset Management Company Ltd.", value : "AMC2"},
{key : "Baroda Asset Management India Limited", value : "AMC3"},
{key : "ICICI Prudential Asset Management Company Limited", value : "AMC14"},
{key : "Edelweiss Asset Management Limited", value : "AMC9"},
{key : "BNP Paribas Asset Management India Pvt. Ltd.", value : "AMC4"},
{key : "BOI AXA Investment Managers Private Limited", value : "AMC5"},
{key : "Canara Robeco Asset Management Company Limited", value : "AMC6"},
{key : "Nippon Life India Asset Management Limited", value : "AMC31"},
{key : "DSP Investment Managers Private Limited", value : "AMC8"},
{key : "Essel Finance AMC Limited", value : "AMC10"},
{key : "Franklin Templeton Asset Management (India) Private Limited", value : "AMC11"},
{key : "HDFC Asset Management Company Limited", value : "AMC12"},
{key : "HSBC Global Asset Management (India) Private Limited", value : "AMC13"},
{key : "IDBI Asset Management Ltd.", value : "AMC15"},
{key : "IDFC Asset Management Company Limited", value : "AMC16"},
{key : "IIFL Asset Management Co. Ltd.", value : "AMC17"},
{key : "Indiabulls Asset Management Company Limited", value : "AMC18"},
{key : "Invesco Asset Management Company Pvt Ltd.", value : "AMC19"},
{key : "ITI Asset Management Limited", value : "AMC41"},
{key : "JM Financial Asset Management Private Limited", value : "AMC20"},
{key : "Kotak Mahindra Asset Management Company Limited", value : "AMC21"},
{key : "L&T Investment Management Limited", value : "AMC22"},
{key : "LIC Mutual Fund Asset Management Limited", value : "AMC23"},
{key : "Mahindra Manulife Investment Management Private Limited", value : "AMC24"},
{key : "Mirae Asset Investment Managers (India) Private Limited", value : "AMC25"},
{key : "Motilal Oswal Asset Management Company Limited", value : "AMC26"},
{key : "Nippon Life India Asset Management Limited", value : "AMC31"},
{key : "PPFAS Asset Management Pvt. Ltd.", value : "AMC27"},
{key : "PGIM India Asset Management Private Limited", value : "AMC7"},
{key : "Principal Asset Management Company Private Limited", value : "AMC28"},
{key : "Quant Money Managers Limited", value : "AMC29"},
{key : "Quantum Asset Management Company Private Limited", value : "AMC30"},
{key : "SBI Funds Management Private Limited", value : "AMC33"},
{key : "Shriram Asset Management Company Limited", value : "AMC34"},
{key : "Sundaram Asset Management Company Limited", value : "AMC35"},
{key : "Tata Asset Management Limited", value : "AMC36"},
{key : "Taurus Asset Management Company Limited", value : "AMC37"},
{key : "Franklin Templeton Asset Management (India) Private Limited", value : "AMC11"},
{key : "Union Asset Management Company Pvt. Ltd.", value : "AMC38"},
{key : "UTI Asset Management Company Private Limited", value : "AMC39"},
{key : "YES Asset Management (India) Limited", value : "AMC40"}
    ])
    const [allselectedamc, setallselectedamc] = useState([])

    
    const [alldisplayingcoloumns, setalldisplayingcoloumns] = useState([]);
    const [alloriginaldisplayingcolumns, setalloriginaldisplayingcolumns] = useState([]);

    const [loginkey, setloginkey] = useState("");

    const [loadingdone, setloadingdone] = useState(false);

    const [commoditysubcats, setcommoditysubcats] = useState([]);
    const [equitysubcats, setequitysubcats] = useState([]);
    const [fixedincomesubcats, setfixedincomesubcats] = useState([]);
    const [globalsubcats, setglobalsubcats] = useState([]);
    const [hybridsubcats, sethybridsubcats] = useState([]);
    const [allaverages, setallaverages] = useState([]);


    const [lastupdated, setlastupdated] = useState("");

    const findallaverages = (paramsportfolio) => {

        var allavgscalc = [];
        if(originallistingoffunds.length > 0) {
            var firstfund = originallistingoffunds[0];
            for(var eachkey in firstfund) {
                if(eachkey == "scheme_code" || eachkey == "Scheme Name" || eachkey == "SEBI Classification" || eachkey == "Category") {
                    continue;
                }
                var totalvalue = 0;
                var count = 0;
                
                originallistingoffunds.map(eachfund => {
                    paramsportfolio.map(eachportfoliofund => {
                        if(eachportfoliofund["SEBI Classification"] == eachfund["SEBI Classification"] || eachportfoliofund["Category"] == eachfund["Category"]) {
                            if(eachfund[eachkey] !== undefined && eachfund[eachkey] !== NaN && eachfund[eachkey] !== "NaN" && eachfund[eachkey] !== "NA" && isNaN(eachfund[eachkey]) == false) {
                                if(eachkey == "Treynor Ratio 1Y") {
                                }
                                totalvalue = totalvalue + Number(eachfund[eachkey]);
                                count = count + 2;
                            }
                        }
                    });
                });
                var newm = {key : eachkey , avg : (totalvalue/count)};

                allavgscalc.push(newm);
                setallaverages(allavgscalc);
            } 
        }
    }


    useEffect(() => {
        handlerollingreturns();
        getallcategories();
        var cpy = ['Scheme Name' , 'SEBI Classification' ,'Category', 'Nav', 'AUM Cr','TER','Net YTM','YTM','Av Mat','Dur','Sov','AAA','AA','A','PE','Largecap %','Midcap %','Smallcap %','YTD','1M','3M','6M','1Y','3Y','5Y','7Y','10Y','2020','2019','2018','2017','2016','2015','Sharpe 1Y','Sortino 1Y','St Dev 1Y','Beta 1Y','Treynor Ratio 1Y','Jensens Alpha 1Y','Information Ratio 1Y','R Squared 1Y'];
        setalldisplayingcoloumns(cpy);
        setalloriginaldisplayingcolumns(cpy);
        setloginkey('nA0u7X8Bgj-sqhiYT6Wh');
        dbmf.collection('categoryaverages').get().then((querySnapshot) => {
            var x = {};
            querySnapshot.forEach(doc => {
                
                x[doc.id] = doc.data().value;
            });
            
            
            setallcategoryaveragesexist(x);
            fetchfundsfirebase(x , [] , []);
        })
        .catch((error) => {
            
            console.log("Error getting documents: ", error);
        });
        
        dbmf.collection('lastupdated').doc('lastupdated').get().then(updata => {
            var dt = updata.data().value;
            var mg = dt.split("GMT")[0];
            setlastupdated(mg);
        })

    }, [])


    const aumtyped = (e) => {
        setminaumtyped(parseFloat(e.target.value));
    }

    const sortbychanged = (e) => {
        setsortby(e.target.value);
        arrangesortedfunds(e.target.value , sortorder);
       
    }

    const checkoutsorting = (val) => {
        if(sortorder == "ascending") {
            arrangesortedfunds(val,"descending");
            setsortorder("descending");
            setsortedby(val);
        }
        // if(sortorder == "descending") {
        //     arrangesortedfunds("None","ascending");
        //     setsortorder("ascending");
        //     setsortedby("");
        // }
        if(sortorder == "descending") {
            arrangesortedfunds(val,"ascending");
            setsortorder("ascending");
            setsortedby(val);
        }
    }
    const sortorderchanged = (e) => {
        setsortorder(e.target.value);
        arrangesortedfunds(sortby,e.target.value);
    }

    const aumtypeapplied = () => {
        setminaumapplied(minaumtyped);
        fetchfundsfirebase(allcategoryaveragesexist,allselectedcategories, allselectedamc);
    }







    const arrangesortedfunds = (tm,bm) => 
    {
        
        if(tm === "None") {
            setallfundsinfonecessary(backupallfundsinfonecessary);
        }
        else if(tm === "Scheme Name" || tm === "SEBI Classification") {
            if(bm === "ascending") {
                var tmparray = allfundsinfonecessary.sort((a, b) => a[tm] > b[tm] ? 1 : -1)
                setallfundsinfonecessary(tmparray);
            }
            else {
                var tmparray = allfundsinfonecessary.sort((a, b) => a[tm] > b[tm] ? -1 : 1)
                setallfundsinfonecessary(tmparray);
            }
        }
        else  {
            if(bm === "ascending") {
                var tmparray = allfundsinfonecessary.sort((a, b) => parseFloat(a[tm]) > parseFloat(b[tm]) ? 1 : -1)
                setallfundsinfonecessary(tmparray);
            }
            else {
                var tmparray = allfundsinfonecessary.sort((a, b) => parseFloat(a[tm]) > parseFloat(b[tm]) ? -1 : 1)
                setallfundsinfonecessary(tmparray);
            }
            
        }
    }

    const clearportfoliofunds = () => {
        setallportfoliofunds([]);
    }
  
    const compareportfoliofunds = () => {



        var reqarr = [];
        var holdingarrtemp = [];
        allportfoliofunds.map(pf => {
            
            var fm = allfundsinfonecessary.filter(mk => mk.scheme_code === pf)
            if(fm.length > 0) {
                holdingarrtemp.push(fm[0]);
                // reqarr.push(primarycallfirebase(fm[0] , globallocalapikey));
            }
            
        });
        setloadingdone(false);
        findallaverages(holdingarrtemp);
        setloadingdone(true);

        Promise.all(reqarr).then((alldatafinal) => {
            var dn = [];
            setloadingdone(true);
            setportfoliofundsindetails([]);
            setfilterwholefundcarddata([]);
            setfilteredwholescreenerdata([]);
            setfilterwholeanalyticaldata([]);
            allportfoliofunds.map(pf => {
                var fm = allfundsinfonecessary.filter(mk => mk.scheme_code === pf)
                if(fm.length > 0) {
                    dn.push(fm[0])
                }
            })
            setportfoliofundsindetails(dn);
           
        var aa = [];
        var bb = [];
        var cc = [];
    
        allportfoliofunds.map(pf => {
                
            var fm = wholefundcarddata.filter(mk => mk.key === pf)
            if(fm.length > 0) {
                
                aa.push(fm[0]);
                setfilterwholefundcarddata(aa);
            }
    
            var gm = wholeanalyticaldata.filter(mk => mk.key === pf)
            if(gm.length > 0) {
                
                bb.push(gm[0]);
                setfilterwholeanalyticaldata(bb);
            }
    
    
            var hm = wholescreenerdata.filter(mk => mk.key === pf)
            if(hm.length > 0) {
                var d = filteredwholescreenerdata;
                cc.push(hm[0]);
                setfilteredwholescreenerdata(cc);
            }
    
    
        })
    
      
    

        // setallportfoliofunds([]);
    
            setcompareviewvisible("block");
           
        })



    }

    const handleportfoliofund = (e) => {
        // console.log(e.target.value);
        // console.log(allportfoliofunds);

       



        var damn = allportfoliofunds.filter(dm => dm === e.target.value);
        
        if(damn.length == 0) {
            var tmparray = [];
            allportfoliofunds.map(kl => {
                
                    tmparray.push(kl);
                
            })
            tmparray.push(e.target.value);
            setallportfoliofunds([...allportfoliofunds , e.target.value]);
        }   
        else {
            var tmparray = [];
            allportfoliofunds.map(kl => {
                if(kl !== e.target.value) {
                    tmparray.push(kl);
                }
                
            })
            setallportfoliofunds(allportfoliofunds.filter(ml => ml != e.target.value));
            
        }

        

        // setfilterwholefundcarddata([]);
        // setfilteredwholescreenerdata([]);
        // setfilterwholeanalyticaldata([]);
        // allportfoliofunds.map(pf => {
            
        //     var fm = wholefundcarddata.filter(mk => mk.key === pf)
        //     if(fm.length > 0) {
        //         var d = filterwholefundcarddata;
        //         d.push(fm[0]);
        //         setfilterwholefundcarddata(d);
        //     }
    
        //     var gm = wholeanalyticaldata.filter(mk => mk.key === pf)
        //     if(gm.length > 0) {
        //         var d = filterwholeanalyticaldata;
        //         d.push(gm[0]);
        //         setfilterwholeanalyticaldata(d);
        //     }
    
    
        //     var hm = wholescreenerdata.filter(mk => mk.key === pf)
        //     if(hm.length > 0) {
        //         var d = filteredwholescreenerdata;
        //         d.push(hm[0]);
        //         setfilteredwholescreenerdata(d);
        //     }
    
    
        // })


      
        
    }


    const restricttotwodigits = (m) => {
        var k = parseFloat(m);


        if(isNaN(k)){
            return 0;
        }
        else if( k === undefined) {
            return m;
        }
        else {
            return k.toFixed(2);
        }
    }



    const handlerollingreturns = () => {
        var gotit = rollingdata[0].data;
        var temparray = [];
        var calculatedreturns = [];
        var averagesum = 0;
        var blankcount = 0;
        var approvedcount = 0;
        for(var j = 0; j < gotit.length ; j ++)
        {
            temparray[j] = 0;
        }
        for(var i = gotit.length -1; i >= blankcount; i--) {
            temparray[i-1] = Number(restricttotwodigits(gotit[i-2]));
            calculatedreturns[i - 1] =  ((gotit[i-1]/temparray[i-1]) - 1) * 100;
            var kl =  Number(restricttotwodigits((((gotit[i-1]/temparray[i-1]) - 1)) * 100));
            if(!isNaN(kl) && kl !== Infinity) {
                
                if(kl != 0) {

                averagesum = averagesum + kl;
                approvedcount = approvedcount + 1;
                }
            }
            

        }
        // for(var j = 0; j < gotit.length ; j ++)
        // {
        //     calculatedreturns[j] = ((gotit[j]/temparray[j]) - 1) * 100;
        //     averagesum = averagesum + (((gotit[j]/temparray[j]) - 1) * 100);
        // }
        averagesum = (Number(averagesum)/Number(approvedcount));
        if (averagesum < 0) {
            averagesum = averagesum * -1;
        }
        var last = (Math.pow((1 + (averagesum/100)),365) - 1);
        
    }






    const  fetchfundsfirebase = async ( aravgexist = {} , arcat = [] , aramc = [] ) => {
        var allrequests = [];
        var amcsubstring = [];
        if(globallocalapikey === "") {
            var localapikey = "";
            // await axios.post('https://pulsedb-qa.pulselabs.co.in/rest/api/v1/partner_login', {
            //     partner: Constants.partner,
            //     key: Constants.key
            // })
            // .then(function (response) {
            //     localapikey = response.data.data.auth;
            //     setgloballocalapikey(localapikey);
            // })
        }
        if(aramc.length > 0) {
            aramc.map(kj => {
                var gh = allavailableamc.filter(item => item.key === kj)
                if(gh.length > 0) {
                    amcsubstring.push(gh[0].value);
                }
            });
        }

        var subcatstring= [];
        if(allavailablecategories.length > 0) {
            arcat.map((ml) => {
                subcatstring.push(ml);
            })
        }
        setloadingdone(true);
     
        setloadingdone(false);

        var combinedcheckarray = ["SEBI Classification" , "asset_category"];


        

        if(subcatstring.length > 0 && amcsubstring.length == 0){


                dbmf.collection("allfundsdata").where('combinedcheckarray', 'array-contains-any', subcatstring)
            .get()
            .then((querySnapshot) => {
                setloadingdone(true);
                distributedata(querySnapshot,aravgexist);
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                });
            })
            .catch((error) => {
                setloadingdone(true);
                console.log("Error getting documents: ", error);
            });
        }
        else if(subcatstring.length == 0 && amcsubstring.length > 0){

            dbmf.collection("allfundsdata").where("AMC Code", 'in', amcsubstring)
        .get()
        .then((querySnapshot) => {
            setloadingdone(true);
            distributedata(querySnapshot,aravgexist);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
            });
        })
        .catch((error) => {
            setloadingdone(true);
            console.log("Error getting documents: ", error);
        });
    }
    else if(subcatstring.length > 0 && amcsubstring.length > 0){

        dbmf.collection("allfundsdata").where('combinedcheckarray', 'array-contains-any', subcatstring)
    .get()
    .then((querySnapshot) => {
        setloadingdone(true);
        distributedatawithamc(querySnapshot,aravgexist);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
        });
    })
    .catch((error) => {
        setloadingdone(true);
        console.log("Error getting documents: ", error);
    });
}
        else {
            dbmf.collection("allfundsdata")
            .get()
            .then((querySnapshot) => {
                setloadingdone(true);
                distributedata(querySnapshot,aravgexist);
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                });
            })
            .catch((error) => {
                setloadingdone(true);
                console.log("Error getting documents: ", error);
            });
        }




    }

    const distributedatawithamc = (querySnapshot , aravgexist) => {
        var tmpfunds = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            var ed = doc.data();
            var x = {
                'scheme_code' : ed['scheme_code'],
                    'scheme_name_unique' : ed['scheme_name_unique'],
                    'isin' : ed['isin'],
                    'asset_category' : ed['asset_category'],
                    'AMC Code' : ed['AMC Code'],
                    'asset_sub_category' : ed['asset_sub_category'],
                    'plan_name' : ed['plan_name'],
                    'option_name' : ed['option_name'],
                    'expense_ratio' : ed['expense_ratio'],
                    'risk_rating' : ed['risk_rating'],
                    'rta_name' : ed['rta_name'],
                    'scheme_code_bse' : ed['scheme_code_bse'],
                    'amc_code_bse' : ed['amc_code_bse'],
                    'amc_name' : ed['amc_name'],
                    'vr_rating' : ed['vr_rating'],
                    'amc_scheme_code_bse' : ed['amc_scheme_code_bse'],
                    'rta_scheme_code_bse' : ed['rta_scheme_code_bse'],
                    'scheme_description' : ed['scheme_description'],
                    'scheme_description_bse' : ed['scheme_description_bse'],
                    'investment_option' : ed['investment_option'],
                    'nature' : ed['nature'],
                    'purchase_allowed' : ed['purchase_allowed'],
                    'purchase_transaction_mode' : ed['purchase_transaction_mode'],
                    'min_initial_investment' : ed['min_initial_investment'],
                    'initial_investment_multiples' : ed['initial_investment_multiples'],
                    'min_additional_investment' : ed['min_additional_investment'],
                    'additional_investment_multiples' : ed['additional_investment_multiples'],
                    'min_withdrawal_amount' : ed['min_withdrawal_amount'],
                    'sip_allowed' : ed['sip_allowed'],
                    'sip_frequency' : ed['sip_frequency'],
                    'sip_date'  :ed['sip_date'],
                    'min_sip_amount' : ed['min_sip_amount'],
                    'min_sip_installments' : ed['min_sip_installments'],
                    'max_sip_installments'  : ed['max_sip_installments'],
                    'sip_multiples' : ed['sip_multiples'],
                    'min_sip_gap'  : ed['min_sip_gap'],
                    'max_sip_gap' : ed['max_sip_gap'],
                    'sip_installment_gap' : ed['sip_installment_gap'],
                    'sip_status' : ed['sip_status'],
                    'switch_allowed' : ed['switch_allowed'],
                    'switch_min_amt' : ed['switch_min_amt'],
                    'switch_multiples' : ed['switch_multiples'],
                    'switch_additional_amt' : ed['switch_additional_amt'],
                    'stp_allowed' : ed['stp_allowed'],
                    'stp_frequency'  :ed['stp_frequency'],
                    'stp_dates' : ed['stp_dates'],
                    'stp_min_amount' : ed['stp_min_amount'],
                    'swp_allowed' : ed['swp_allowed'],
                    'swp_min_amount' : ed['swp_min_amount'],
                    'lock_in_period' : ed['lock_in_period'],
                    'risk_profile' : ed['risk_profile'],
                    'exit_load_period_remark' : ed['exit_load_period_remark'],
                    'exit_load_rate' : ed['exit_load_rate'],
                    'fund_size' : ed['fund_size'],
                'Scheme Name' : ed['Scheme Name'],
                'Category' : ed['asset_category'],
                'Category Average' : aravgexist[ed['asset_category']],
                'SEBI Classification' :ed['SEBI Classification'],
                'Nav' : ed['Nav'],
                'AUM Cr' : Number(restricttotwodigits(ed['AUM Cr'])),
                'TER' : Number(restricttotwodigits(ed['TER'])),
                'Net YTM' : ed['Net YTM2'],
                'YTM' : ed['YTM'],
                'Av Mat' : restricttotwodigits(ed['Av Mat']),
                'Dur' : ed['Dur'],
                'Sov' : ed['Sov'],
                'AAA' : ed['AAA'],
                'AA' : ed['AA'],
                'A' : ed['A'],
                'Others' : ed['Others'],
                'PE' : ed['PE'],
                'PB' : ed['PB'],
                'Largecap %' : ed['Largecap %'],
                'Midcap %' : ed['Midcap %'],
                'Smallcap %' : ed['Smallcap %'],
                'Top 3 Holdings' : ed['Top 3 Holdings'],
                'Top 5 Holdings' : ed['Top 5 Holdings'],
                'Top 10 Holdings' : ed['Top 10 Holdings'],
                'Top 20 Holdings' : ed['Top 20 Holdings'],
                'Sharpe 1M' : ed['Sharpe 1M'],
                'Sharpe 3M' : ed['Sharpe 3M'],
                'Sharpe 6M' : ed['Sharpe 6M'],
                'Sharpe 1Y' : ed['Sharpe 1Y'],
                'Sharpe 3Y' : ed['Sharpe 3Y'],
                'Sharpe 5Y' : ed['Sharpe 5Y'],
                'Sharpe 7Y' : ed['Sharpe 7Y'],
                'VaR(H)' : ed['VaR(H)'],
                'VaR(I)' : ed['VaR(I)'],
                'Sortino 1M' : ed['Sortino 1M'],
                'Sortino 3M' : ed['Sortino 3M'],
                'Sortino 6M' : ed['Sortino 6M'],
                'Sortino 1Y' : ed['Sortino 1Y'],
                'Sortino 3Y' : ed['Sortino 3Y'],
                'Sortino 5Y' : ed['Sortino 5Y'],
                'Sortino 7Y' : ed['Sortino 7Y'],
                'St Dev 1M' : ed['St Dev 1M'],
                'St Dev 3M' : ed['St Dev 3M'],
                'St Dev 6M' : ed['St Dev 6M'],
                'St Dev 1Y' : ed['St Dev 1Y'],
                'St Dev 3Y' : ed['St Dev 3Y'],
                'St Dev 5Y' : ed['St Dev 5Y'],
                'St Dev 7Y' : ed['St Dev 7Y'],
                'MTD' : ed['MTD'],
                'YTD' : ed['YTD'],
                'Inception' : ed['Inception'],
                '2020' : ed['2020'],
                '2019' : ed['2019'],
                '2018' : ed['2018'],
                '2017' : ed['2017'],
                '2016' : ed['2016'],
                '2015' : ed['2015'],
                '2014' : ed['2014'],
                '2013' : ed['2013'],
                '2012' : ed['2012'],
                '2011' : ed['2011'],
                '1M' : ed['1M'],
                '3M' : ed['3M'],
                '6M' : ed['6M'],
                '1Y' : ed['1Y'],
                '2Y' : ed['2Y'],
                '3Y' : ed['3Y'],
                '5Y' : ed['5Y'],
                '7Y' : ed['7Y'],
                '10Y' : ed['10Y'],
                '15Y' : ed['15Y'],
                '6M Roll' : ed['6M Roll'],
                '1Y Roll' : ed['1Y Roll'],
                '3Y Roll' : ed['3Y Roll'],
                'Age in Yrs' : ed['Age in Yrs'],
                'AMC Code' : ed['AMC Code'],
                'Beta 1M' : ed['Beta 1M'],
                'Beta 3M' : ed['Beta 3M'],
                'Beta 6M' : ed['Beta 6M'],
                'Beta 1Y' : ed['Beta 1Y'],
                'Beta 3Y' : ed['Beta 3Y'],
                'Beta 5Y' : ed['Beta 5Y'],
                'Beta 7Y' : ed['Beta 7Y'],
                'Treynor Ratio 1M' : ed['Treynor Ratio 1M'],
                'Treynor Ratio 3M' : ed['Treynor Ratio 3M'],
                'Treynor Ratio 6M' : ed['Treynor Ratio 6M'],
                'Treynor Ratio 1Y' : ed['Treynor Ratio 1Y'],
                'Treynor Ratio 3Y' : ed['Treynor Ratio 3Y'],
                'Treynor Ratio 5Y' : ed['Treynor Ratio 5Y'],
                'Treynor Ratio 7Y' : ed['Treynor Ratio 7Y'],
                'Jensens Alpha 1M' : ed['Jensens Alpha 1M'],
                'Jensens Alpha 3M' : ed['Jensens Alpha 3M'],
                'Jensens Alpha 6M' : ed['Jensens Alpha 6M'],
                'Jensens Alpha 1Y' : ed['Jensens Alpha 1Y'],
                'Jensens Alpha 3Y' : ed['Jensens Alpha 3Y'],
                'Jensens Alpha 5Y' : ed['Jensens Alpha 5Y'],
                'Jensens Alpha 7Y' : ed['Jensens Alpha 7Y'],
                'Information Ratio 1M' : ed['Information Ratio 1M'],
                'Information Ratio 3M' : ed['Information Ratio 3M'],
                'Information Ratio 6M' : ed['Information Ratio 6M'],
                'Information Ratio 1Y' : ed['Information Ratio 1Y'],
                'Information Ratio 3Y' : ed['Information Ratio 3Y'],
                'Information Ratio 5Y' : ed['Information Ratio 5Y'],
                'Information Ratio 7Y' : ed['Information Ratio 7Y'],
                'R Squared 1M' : ed['R Squared 1M'],
                'R Squared 3M' : ed['R Squared 3M'],
                'R Squared 6M' : ed['R Squared 6M'],
                'R Squared 1Y' : ed['R Squared 1Y'],
                'R Squared 3Y' : ed['R Squared 3Y'],
                'R Squared 5Y' : ed['R Squared 5Y'],
                'R Squared 7Y' : ed['R Squared 7Y']
            }
            
           
            
            if(Number(restricttotwodigits(ed['AUM Cr'])) >= minaumtyped) {
            
                var fnm = allavailableamc.filter(item => item.value === ed['AMC Code']);
                fnm.map(eachamc => {
                    var gh = allselectedamc.filter(item => item === eachamc.key)
                    if (gh.length > 0) {
                        tmpfunds.push(x);
                    }
                });
                
                
               
            
            }
                
        });
        setallfundsinfo(tmpfunds);
    
                setallfundsinfonecessary(tmpfunds);
                if(originallistingoffunds.length == 0 ) {
                    setoriginallistingoffunds(tmpfunds);
                }

    }

    const distributedata = (querySnapshot,aravgexist) => {
        var tmpfunds = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            var ed = doc.data();
           
            var x = {
                'scheme_code' : ed['scheme_code'],
                    'scheme_name_unique' : ed['scheme_name_unique'],
                    'isin' : ed['isin'],
                    'asset_category' : ed['asset_category'],
                    'AMC Code' : ed['AMC Code'],
                    'asset_sub_category' : ed['asset_sub_category'],
                    'plan_name' : ed['plan_name'],
                    'option_name' : ed['option_name'],
                    'expense_ratio' : ed['expense_ratio'],
                    'risk_rating' : ed['risk_rating'],
                    'rta_name' : ed['rta_name'],
                    'scheme_code_bse' : ed['scheme_code_bse'],
                    'amc_code_bse' : ed['amc_code_bse'],
                    'amc_name' : ed['amc_name'],
                    'vr_rating' : ed['vr_rating'],
                    'amc_scheme_code_bse' : ed['amc_scheme_code_bse'],
                    'rta_scheme_code_bse' : ed['rta_scheme_code_bse'],
                    'scheme_description' : ed['scheme_description'],
                    'scheme_description_bse' : ed['scheme_description_bse'],
                    'investment_option' : ed['investment_option'],
                    'nature' : ed['nature'],
                    'purchase_allowed' : ed['purchase_allowed'],
                    'purchase_transaction_mode' : ed['purchase_transaction_mode'],
                    'min_initial_investment' : ed['min_initial_investment'],
                    'initial_investment_multiples' : ed['initial_investment_multiples'],
                    'min_additional_investment' : ed['min_additional_investment'],
                    'additional_investment_multiples' : ed['additional_investment_multiples'],
                    'min_withdrawal_amount' : ed['min_withdrawal_amount'],
                    'sip_allowed' : ed['sip_allowed'],
                    'sip_frequency' : ed['sip_frequency'],
                    'sip_date'  :ed['sip_date'],
                    'min_sip_amount' : ed['min_sip_amount'],
                    'min_sip_installments' : ed['min_sip_installments'],
                    'max_sip_installments'  : ed['max_sip_installments'],
                    'sip_multiples' : ed['sip_multiples'],
                    'min_sip_gap'  : ed['min_sip_gap'],
                    'max_sip_gap' : ed['max_sip_gap'],
                    'sip_installment_gap' : ed['sip_installment_gap'],
                    'sip_status' : ed['sip_status'],
                    'switch_allowed' : ed['switch_allowed'],
                    'switch_min_amt' : ed['switch_min_amt'],
                    'switch_multiples' : ed['switch_multiples'],
                    'switch_additional_amt' : ed['switch_additional_amt'],
                    'stp_allowed' : ed['stp_allowed'],
                    'stp_frequency'  :ed['stp_frequency'],
                    'stp_dates' : ed['stp_dates'],
                    'stp_min_amount' : ed['stp_min_amount'],
                    'swp_allowed' : ed['swp_allowed'],
                    'swp_min_amount' : ed['swp_min_amount'],
                    'lock_in_period' : ed['lock_in_period'],
                    'risk_profile' : ed['risk_profile'],
                    'exit_load_period_remark' : ed['exit_load_period_remark'],
                    'exit_load_rate' : ed['exit_load_rate'],
                    'fund_size' : ed['fund_size'],
                'Scheme Name' : ed['Scheme Name'],
                'Category' : ed['asset_category'],
                'Category Average' : aravgexist[ed['asset_category']],
                'SEBI Classification' :ed['SEBI Classification'],
                'Nav' : ed['Nav'],
                'AUM Cr' : Number(restricttotwodigits(ed['AUM Cr'])),
                'TER' : Number(restricttotwodigits(ed['TER'])),
                'Net YTM' : Number(restricttotwodigits(ed['Net YTM2'])),
                'YTM' : Number(restricttotwodigits(ed['YTM'])),
                'Av Mat' : Number(restricttotwodigits(ed['Av Mat'])),
                'Dur' : Number(restricttotwodigits(ed['Dur'])),
                'Sov' : Number(restricttotwodigits(ed['Sov'])),
                'AAA' : Number(restricttotwodigits(ed['AAA'])),
                'AA' : Number(restricttotwodigits(ed['AA'])),
                'A' : Number(restricttotwodigits(ed['A'])),
                'Others' : Number(restricttotwodigits(ed['Others'])),
                'PE' : Number(restricttotwodigits(ed['PE'])),
                'PB' : Number(restricttotwodigits(ed['PB'])),
                'Largecap %' : Number(restricttotwodigits(ed['Largecap %'])),
                'Midcap %' : Number(restricttotwodigits(ed['Midcap %'])),
                'Smallcap %' : Number(restricttotwodigits(ed['Smallcap %'])),
                'Top 3 Holdings' : Number(restricttotwodigits(ed['Top 3 Holdings'])),
                'Top 5 Holdings' : Number(restricttotwodigits(ed['Top 5 Holdings'])),
                'Top 10 Holdings' : Number(restricttotwodigits(ed['Top 10 Holdings'])),
                'Top 20 Holdings' : Number(restricttotwodigits(ed['Top 20 Holdings'])),
                'Sharpe 1M' : Number(restricttotwodigits(ed['Sharpe 1M'])),
                'Sharpe 3M' : Number(restricttotwodigits(ed['Sharpe 3M'])),
                'Sharpe 6M' : Number(restricttotwodigits(ed['Sharpe 6M'])),
                'Sharpe 1Y' : Number(restricttotwodigits(ed['Sharpe 1Y'])),
                'Sharpe 3Y' : Number(restricttotwodigits(ed['Sharpe 3Y'])),
                'Sharpe 5Y' : Number(restricttotwodigits(ed['Sharpe 5Y'])),
                'Sharpe 7Y' : Number(restricttotwodigits(ed['Sharpe 7Y'])),
                'VaR(H)' : Number(restricttotwodigits(ed['VaR(H)'])),
                'VaR(I)' : Number(restricttotwodigits(ed['VaR(I)'])),
                'Sortino 1M' : Number(restricttotwodigits(ed['Sortino 1M'])),
                'Sortino 3M' : Number(restricttotwodigits(ed['Sortino 3M'])),
                'Sortino 6M' : Number(restricttotwodigits(ed['Sortino 6M'])),
                'Sortino 1Y' : Number(restricttotwodigits(ed['Sortino 1Y'])),
                'Sortino 3Y' : Number(restricttotwodigits(ed['Sortino 3Y'])),
                'Sortino 5Y' : Number(restricttotwodigits(ed['Sortino 5Y'])),
                'Sortino 7Y' : Number(restricttotwodigits(ed['Sortino 7Y'])),
                'St Dev 1M' : Number(restricttotwodigits(ed['St Dev 1M'])),
                'St Dev 3M' : Number(restricttotwodigits(ed['St Dev 3M'])),
                'St Dev 6M' : Number(restricttotwodigits(ed['St Dev 6M'])),
                'St Dev 1Y' : Number(restricttotwodigits(ed['St Dev 1Y'])),
                'St Dev 3Y' : Number(restricttotwodigits(ed['St Dev 3Y'])),
                'St Dev 5Y' : Number(restricttotwodigits(ed['St Dev 5Y'])),
                'St Dev 7Y' : Number(restricttotwodigits(ed['St Dev 7Y'])),
                'MTD' : Number(restricttotwodigits(ed['MTD'])),
                'YTD' : Number(restricttotwodigits(ed['YTD'])),
                'Inception' : Number(restricttotwodigits(ed['Inception'])),
                '2020' : Number(restricttotwodigits(ed['2020'])),
                '2019' : Number(restricttotwodigits(ed['2019'])),
                '2018' : Number(restricttotwodigits(ed['2018'])),
                '2017' : Number(restricttotwodigits(ed['2017'])),
                '2016' : Number(restricttotwodigits(ed['2016'])),
                '2015' : Number(restricttotwodigits(ed['2015'])),
                '2014' : Number(restricttotwodigits(ed['2014'])),
                '2013' : Number(restricttotwodigits(ed['2013'])),
                '2012' : Number(restricttotwodigits(ed['2012'])),
                '2011' : Number(restricttotwodigits(ed['2011'])),
                '1M' : Number(restricttotwodigits(ed['1M'])),
                '3M' : Number(restricttotwodigits(ed['3M'])),
                '6M' : Number(restricttotwodigits(ed['6M'])),
                '1Y' : Number(restricttotwodigits(ed['1Y'])),
                '2Y' : Number(restricttotwodigits(ed['2Y'])),
                '3Y' : Number(restricttotwodigits(ed['3Y'])),
                '5Y' : Number(restricttotwodigits(ed['5Y'])),
                '7Y' : Number(restricttotwodigits(ed['7Y'])),
                '10Y' : Number(restricttotwodigits(ed['10Y'])),
                '15Y' : Number(restricttotwodigits(ed['15Y'])),
                '6M Roll' : Number(restricttotwodigits(ed['6M Roll'])),
                '1Y Roll' : Number(restricttotwodigits(ed['1Y Roll'])),
                '3Y Roll' : Number(restricttotwodigits(ed['3Y Roll'])),
                'Age in Yrs' : Number(restricttotwodigits(ed['Age in Yrs'])),
                'AMC Code' : Number(restricttotwodigits(ed['AMC Code'])),
                'Beta 1M' : Number(restricttotwodigits(ed['Beta 1M'])),
                'Beta 3M' : Number(restricttotwodigits(ed['Beta 3M'])),
                'Beta 6M' : Number(restricttotwodigits(ed['Beta 6M'])),
                'Beta 1Y' : Number(restricttotwodigits(ed['Beta 1Y'])),
                'Beta 3Y' : Number(restricttotwodigits(ed['Beta 3Y'])),
                'Beta 5Y' : Number(restricttotwodigits(ed['Beta 5Y'])),
                'Beta 7Y' : Number(restricttotwodigits(ed['Beta 7Y'])),
                'Treynor Ratio 1M' : Number(restricttotwodigits(ed['Treynor Ratio 1M'])),
                'Treynor Ratio 3M' : Number(restricttotwodigits(ed['Treynor Ratio 3M'])),
                'Treynor Ratio 6M' : Number(restricttotwodigits(ed['Treynor Ratio 6M'])),
                'Treynor Ratio 1Y' : Number(restricttotwodigits(ed['Treynor Ratio 1Y'])),
                'Treynor Ratio 3Y' : Number(restricttotwodigits(ed['Treynor Ratio 3Y'])),
                'Treynor Ratio 5Y' : Number(restricttotwodigits(ed['Treynor Ratio 5Y'])),
                'Treynor Ratio 7Y' : Number(restricttotwodigits(ed['Treynor Ratio 7Y'])),
                'Jensens Alpha 1M' : Number(restricttotwodigits(ed['Jensens Alpha 1M'])),
                'Jensens Alpha 3M' : Number(restricttotwodigits(ed['Jensens Alpha 3M'])),
                'Jensens Alpha 6M' : Number(restricttotwodigits(ed['Jensens Alpha 6M'])),
                'Jensens Alpha 1Y' : Number(restricttotwodigits(ed['Jensens Alpha 1Y'])),
                'Jensens Alpha 3Y' : Number(restricttotwodigits(ed['Jensens Alpha 3Y'])),
                'Jensens Alpha 5Y' : Number(restricttotwodigits(ed['Jensens Alpha 5Y'])),
                'Jensens Alpha 7Y' : Number(restricttotwodigits(ed['Jensens Alpha 7Y'])),
                'Information Ratio 1M' : Number(restricttotwodigits(ed['Information Ratio 1M'])),
                'Information Ratio 3M' : Number(restricttotwodigits(ed['Information Ratio 3M'])),
                'Information Ratio 6M' : Number(restricttotwodigits(ed['Information Ratio 6M'])),
                'Information Ratio 1Y' : Number(restricttotwodigits(ed['Information Ratio 1Y'])),
                'Information Ratio 3Y' : Number(restricttotwodigits(ed['Information Ratio 3Y'])),
                'Information Ratio 5Y' : Number(restricttotwodigits(ed['Information Ratio 5Y'])),
                'Information Ratio 7Y' : Number(restricttotwodigits(ed['Information Ratio 7Y'])),
                'R Squared 1M' : Number(restricttotwodigits(ed['R Squared 1M'])),
                'R Squared 3M' : Number(restricttotwodigits(ed['R Squared 3M'])),
                'R Squared 6M' : Number(restricttotwodigits(ed['R Squared 6M'])),
                'R Squared 1Y' : Number(restricttotwodigits(ed['R Squared 1Y'])),
                'R Squared 3Y' : Number(restricttotwodigits(ed['R Squared 3Y'])),
                'R Squared 5Y' : Number(restricttotwodigits(ed['R Squared 5Y'])),
                'R Squared 7Y' : Number(restricttotwodigits(ed['R Squared 7Y']))
            }
            

           
            var originaldata = allfieldswrapperaverages;
            for(var eachkey in x) {
                var customkey = eachkey;
                if(eachkey == "scheme_code" || eachkey == "Scheme Name" || eachkey == "SEBI Classification" || eachkey == "Category") {
                    
                    continue;
                }
                if(eachkey == "Net YTM")
                {
                    customkey = "Net YTM2";
                }
                if(allfieldswrapperaverages.filter(item => item.key == customkey).length == 0)
                {
                    if(ed[customkey] !== undefined && ed[customkey] !== NaN && ed[customkey] !== "NA" && ed[customkey] !== "NaN" && isNaN(ed[customkey]) == false ) {
                        var xm = {key : eachkey , value : ed[customkey] , count : 1 , avg : ed[customkey],cat :ed['asset_category'] , sebi : ed['SEBI Classification']}
                     
                        originaldata.push(xm);
                        setallfieldswrapperaverages(originaldata);
                    }
                }
                else {
                    if(ed[customkey] !== undefined && ed[customkey] !== NaN && ed[customkey] !== "NA" && ed[customkey] !== "NaN" && isNaN(ed[customkey]) == false ) {
                       
                        
                        var dh = allfieldswrapperaverages.filter(item => item.key == customkey);
                        if (dh.length > 0) {
                            var ys = Number(Number(dh[0].value) + Number(ed[customkey]));
                            dh[0].value = ys;
                      
                            dh[0].count = dh[0].count + 1;
                            dh[0].avg = Number(restricttotwodigits(Number(dh[0].value)/Number(dh[0].count)));
                            
                        }
                    
                    }
                }
               
            }


            
            if(Number(restricttotwodigits(ed['AUM Cr'])) >= minaumtyped) {
            tmpfunds.push(x);
            }
                
        });
        setallfundsinfo(tmpfunds);
                setallfundsinfonecessary(tmpfunds);
                if(originallistingoffunds.length == 0 ) {
                    setoriginallistingoffunds(tmpfunds);
                }
       

    }


    const  fetchfunds = async (reset = false , mau = 0  ) => {
        

        var allrequests = [];
        var amcsubstring = ""
        if(allselectedamc.length > 0) {
            allselectedamc.map(kj => {
                var gh = allavailableamc.filter(item => item.key === kj)
                if(gh.length > 0) {
                    amcsubstring = gh[0].value;
                }
            });
        }

        var subcatstring= "";
        if(allavailablecategories.length > 0) {
            allselectedcategories.map((ml) => {
                subcatstring = subcatstring + ml + ",";
            })
        }
        if(subcatstring !== "") {
            subcatstring = subcatstring.slice(0,-1);
        }

        var url = "https://pulsedb-qa.pulselabs.co.in/rest/api/v1/screener/search";

        var localapikey = "";
        await axios.post('https://pulsedb-qa.pulselabs.co.in/rest/api/v1/partner_login', {
            partner: Constants.partner,
            key: Constants.key
        })
        .then(function (response) {
            localapikey = response.data.data.auth;
            setgloballocalapikey(localapikey);
            setloadingdone(false);
            axios.post(url, {
                auth: localapikey,
                "from": 0,
		"size": "",
		"min_initial_investment":"",
		"min_sip_amount":"",
		"risk_profile": "",
		"amc_code": "",
		"plan_name":"Broker",
		"option_name": "Growth",
		"asset_category": "",
		"asset_sub_category": subcatstring,
		"search_text": "",
		"scheme_code": "",
		"holding_period":"1M",
		"returns_perc": "" ,
		"sort_by":"",
		"sort_order":""
              })
              .then(function (response) {
                const obtain = response.data;
                var tmparray = [];
                if(reset) {
                    settempholder([]);
                    setallfundsinfonecessary([]);
                    setbackupallfundsinfonecessary([]);
                    setallfundsinfo([]);
                }
                
                
                obtain.data.map(ed => {
                    
                    if(parseFloat(ed['fund_size']) > mau ) {

                        var jm = {key : ed['scheme_code'] ,fund :ed['scheme_name'] , value : ed};
                        var back = wholescreenerdata;
                        back.push(jm);
                        setwholescreenerdata(back);

                    var x = {
                        'amc code' : ed['AMC Code'],
                        'scheme_code' : ed['scheme_code'],
                        'Scheme Name' : ed['scheme_name'],
                        'SEBI Classification' :ed['asset_sub_category'],
                        'Nav' : ed['asset_sub_category'],
                        'AUM Cr' : restricttotwodigits(ed['fund_size']),
                        'TER' : restricttotwodigits(ed['expense_ratio']),
                        'Net YTM' : 'NOT AVAILABLE',
                        'YTM' : 'NOT AVAILABLE',
                        'Av Mat' : restricttotwodigits(ed['exit_load_rate']),
                        'Dur' : 'NOT AVAILABLE',
                        'Sov' : 'NOT AVAILABLE',
                        'AAA' : 'NOT AVAILABLE',
                        'AA' : 'NOT AVAILABLE',
                        'A' : 'NOT AVAILABLE',
                        'Others' : 'NOT AVAILABLE',
                        'PE' : 'NOT AVAILABLE',
                        'PB' : 'NOT AVAILABLE',
                        'Largecap %' : 'NOT AVAILABLE',
                        'Midcap %' : 'NOT AVAILABLE',
                        'Smallcap %' : 'NOT AVAILABLE',
                        'Top 3 Holdings' : ed['asset_sub_category'],
                        'Top 5 Holdings' : ed['asset_sub_category'],
                        'Top 10 Holdings' : ed['asset_sub_category'],
                        'Top 20 Holdings' : ed['asset_sub_category'],
                        'Sharpe' : '',
                        'VaR(H)' : 'NOT AVAILABLE',
                        'VaR(I)' : 'NOT AVAILABLE',
                        'Sortino' : '',
                        'St Dev' : '',
                        'MTD' : 'NOT AVAILABLE',
                        'YTD' : 'NOT AVAILABLE',
                        'Inception' : 'NOT AVAILABLE',
                        '2020' : ed['asset_sub_category'],
                        '2019' : ed['asset_sub_category'],
                        '2018' : ed['asset_sub_category'],
                        '2017' : ed['asset_sub_category'],
                        '2016' : ed['asset_sub_category'],
                        '2015' : ed['asset_sub_category'],
                        '2014' : ed['asset_sub_category'],
                        '2013' : ed['asset_sub_category'],
                        '2012' : ed['asset_sub_category'],
                        '2011' : ed['asset_sub_category'],
                        '1M' : ed['asset_sub_category'],
                        '3M' : ed['asset_sub_category'],
                        '6M' : ed['asset_sub_category'],
                        '1Y' : ed['asset_sub_category'],
                        '2Y' : ed['asset_sub_category'],
                        '3Y' : ed['asset_sub_category'],
                        '5Y' : ed['asset_sub_category'],
                        '7Y' : ed['asset_sub_category'],
                        '10Y' : ed['asset_sub_category'],
                        '15Y' : ed['asset_sub_category'],
                        '6M Roll' : ed['asset_sub_category'],
                        '1Y Roll' : ed['asset_sub_category'],
                        '3Y Roll' : ed['asset_sub_category'],
                        'Age in Yrs' : ed['asset_sub_category']
                    }

                    tmparray.push(x);
                    if(tmparray.length <= entriestofetch) {
                    var userrequest = (primarycall(x,localapikey));

                    allrequests.push(userrequest);

                    settempholder(tmparray);
                    }
                  
                    }
                    // tmparrayrequests.push(primarycall(x,localapikey));
                });
                
                
               
                
                
                

                Promise.all(allrequests).then((alldatafinal) => {
                    setloadingdone(true);
                    
                    setallfundsinfonecessary(alldatafinal);
                    setbackupallfundsinfonecessary(alldatafinal);
                    // arrangesortedfunds(sortby,sortorder);
                   
                })


                // Promise.all(tmparrayrequests).then((alluserdata) => {
                //     console.log("All USER DATA");
                //     console.log(alluserdata);
                // })

                    
                 })

                })

    }



    const  fetchfundswitharray = async (catarr = [] , amcarr = []) => {
        
        var reset = true;
        var mau =  minaumtyped;
        var allrequests = [];
        var amcsubstring = ""
        if(amcarr.length > 0) {
            amcarr.map(kj => {
                var gh = allavailableamc.filter(item => item.key === kj)
                if(gh.length > 0) {
                    amcsubstring = gh[0].value;
                }
            });
        }

        var subcatstring= "";
        if(catarr.length > 0) {
            catarr.map((ml) => {
                subcatstring = subcatstring + ml + ",";
            })
        }
        if(subcatstring !== "") {
            subcatstring = subcatstring.slice(0,-1);
        }

        var url = "https://pulsedb-qa.pulselabs.co.in/rest/api/v1/screener/search";

        var localapikey = "";
        await axios.post('https://pulsedb-qa.pulselabs.co.in/rest/api/v1/partner_login', {
            partner: Constants.partner,
            key: Constants.key
        })
        .then(function (response) {
            localapikey = response.data.data.auth;
            setloadingdone(false);
            axios.post(url, {
                auth: localapikey,
                "from": 0,
		"size": "",
		"min_initial_investment":"",
		"min_sip_amount":"",
		"risk_profile": "",
		"amc_code": amcsubstring,
		"plan_name":"Broker",
		"option_name": "Growth",
		"asset_category": "",
		"asset_sub_category": subcatstring,
		"search_text": "",
		"scheme_code": "",
		"holding_period":"1M",
		"returns_perc": "" ,
		"sort_by":"",
		"sort_order":""
              })
              .then(function (response) {
                const obtain = response.data;
                var tmparray = [];
                if(reset) {
                    settempholder([]);
                    setallfundsinfonecessary([]);
                    setallfundsinfo([]);
                }
                
                
                obtain.data.map(ed => {
                    
                    if(parseFloat(ed['fund_size']) > mau ) {

                    var x = {
                        'scheme_code' : ed['scheme_code'],
                        'Scheme Name' : ed['scheme_name'],
                        'SEBI Classification' :ed['asset_sub_category'],
                        'Nav' : ed['asset_sub_category'],
                        'AUM Cr' : restricttotwodigits(ed['fund_size']),
                        'TER' : restricttotwodigits(ed['expense_ratio']),
                        'Net YTM' : 'NOT AVAILABLE',
                        'YTM' : 'NOT AVAILABLE',
                        'Av Mat' : restricttotwodigits(ed['exit_load_rate']),
                        'Dur' : 'NOT AVAILABLE',
                        'Sov' : 'NOT AVAILABLE',
                        'AAA' : 'NOT AVAILABLE',
                        'AA' : 'NOT AVAILABLE',
                        'A' : 'NOT AVAILABLE',
                        'Others' : 'NOT AVAILABLE',
                        'PE' : 'NOT AVAILABLE',
                        'PB' : 'NOT AVAILABLE',
                        'Largecap %' : 'NOT AVAILABLE',
                        'Midcap %' : 'NOT AVAILABLE',
                        'Smallcap %' : 'NOT AVAILABLE',
                        'Top 3 Holdings' : ed['asset_sub_category'],
                        'Top 5 Holdings' : ed['asset_sub_category'],
                        'Top 10 Holdings' : ed['asset_sub_category'],
                        'Top 20 Holdings' : ed['asset_sub_category'],
                        'Sharpe' : '',
                        'VaR(H)' : 'NOT AVAILABLE',
                        'VaR(I)' : 'NOT AVAILABLE',
                        'Sortino' : '',
                        'St Dev' : '',
                        'MTD' : 'NOT AVAILABLE',
                        'YTD' : 'NOT AVAILABLE',
                        'Inception' : 'NOT AVAILABLE',
                        '2020' : ed['asset_sub_category'],
                        '2019' : ed['asset_sub_category'],
                        '2018' : ed['asset_sub_category'],
                        '2017' : ed['asset_sub_category'],
                        '2016' : ed['asset_sub_category'],
                        '2015' : ed['asset_sub_category'],
                        '2014' : ed['asset_sub_category'],
                        '2013' : ed['asset_sub_category'],
                        '2012' : ed['asset_sub_category'],
                        '2011' : ed['asset_sub_category'],
                        '1M' : ed['asset_sub_category'],
                        '3M' : ed['asset_sub_category'],
                        '6M' : ed['asset_sub_category'],
                        '1Y' : ed['asset_sub_category'],
                        '2Y' : ed['asset_sub_category'],
                        '3Y' : ed['asset_sub_category'],
                        '5Y' : ed['asset_sub_category'],
                        '7Y' : ed['asset_sub_category'],
                        '10Y' : ed['asset_sub_category'],
                        '15Y' : ed['asset_sub_category'],
                        '6M Roll' : ed['asset_sub_category'],
                        '1Y Roll' : ed['asset_sub_category'],
                        '3Y Roll' : ed['asset_sub_category'],
                        'Age in Yrs' : ed['asset_sub_category']
                    }

                    tmparray.push(x);
                    if(tmparray.length <= entriestofetch) {
                    var userrequest = (primarycall(x,localapikey));

                    allrequests.push(userrequest);

                    settempholder(tmparray);
                    }
                  
                    }
                    // tmparrayrequests.push(primarycall(x,localapikey));
                });
                
                
               
                
                
                

                Promise.all(allrequests).then((alldatafinal) => {
                    setloadingdone(true);
                    
                    setallfundsinfonecessary(alldatafinal);
                   
                })


                // Promise.all(tmparrayrequests).then((alluserdata) => {
                //     console.log("All USER DATA");
                //     console.log(alluserdata);
                // })

                    
                 })

                })

    }

    const handlemidway = async (localapikey) => {

        
       
        var allrequests = [];

       
        tempholder.map((x) => {
            
            
            
        })

        
        Promise.all(allrequests).then((alldatafinal) => {
        })
        
    }



    function primarycallfirebase(x,localapikey) {
        
        return new Promise((resolve,reject) => {
            var nestedurl = 'https://pulsedb-qa.pulselabs.co.in/rest/api/v1/fundcard';
            var nestedparams = {
                "auth": localapikey,
                "scheme_code": x.scheme_code,
                "plan_name": "",
                 "as_on": "2021-05-15"
            };
    
            
               
    
                var innernestedurl = 'https://pulsedb-qa.pulselabs.co.in/rest/api/v1/mf/analytical-data';
                var innernestedparams = {
                    "auth": localapikey,
                    "scheme_code":  x['scheme_code']
                }
    
    
    
                
                    
                        
                  
    
    
                
    
                const tmparray = [];
    
                axios.post(nestedurl, nestedparams).then(function (apin) {
                    const nestedobtain = apin["data"];
                    

                
                            var jm = {key : x.scheme_code ,fund :x['Scheme Name'], value : nestedobtain};
                            var back2 = wholefundcarddata;
                            back2.push(jm);
                            setwholefundcarddata(back2);
                            

                            axios.post("https://pulsedb-qa.pulselabs.co.in/rest/api/v1/screener/search", {
                                auth: localapikey,
                                "from": 0,
                        "size": "",
                        "min_initial_investment":"",
                        "min_sip_amount":"",
                        "risk_profile": "",
                        "amc_code": "",
                        "plan_name":"Broker",
                        "option_name": "Growth",
                        "asset_category": "",
                        "asset_sub_category": "",
                        "search_text": "",
                        "scheme_code": x.scheme_code,
                        "holding_period":"1M",
                        "returns_perc": "" ,
                        "sort_by":"",
                        "sort_order":""
                              })
                              .then(function (response) {
                                const obtain = response.data;
                                var tmparray = [];
                               
                                
                                obtain.data.map(ed => {
           
                
                                        var jm = {key : ed['scheme_code'] ,fund :ed['scheme_name'] , value : ed};
                                        var back = wholescreenerdata;
                                        back.push(jm);
                                        setwholescreenerdata(back);
                                        

                                        axios.post(innernestedurl, innernestedparams).then(function (innerapin) {
                    
                                            const innerestedobtain = innerapin.data;
                                            var co = x.scheme_code;
                                            
                                                    var jm = {key : co,fund :x['Scheme Name']  , value : innerestedobtain.data[co]};
                                                    var back = wholeanalyticaldata;
                                                    back.push(jm);
                                                    setwholeanalyticaldata(back);
                                                    resolve(x);
                            
                            
                                            

                                    }).catch(err => {
                                        console.log(err);
                                        reject(err);
                                    })
                
                                    
                                  
                                    
                                });
                                
                                
                
                                    
                                 })





                });
                
    
            })
    }



    function primarycall(x,localapikey) {
        return new Promise((resolve,reject) => {
        var nestedurl = 'https://pulsedb-qa.pulselabs.co.in/rest/api/v1/fundcard';
        var nestedparams = {
            "auth": localapikey,
            "scheme_code": x.scheme_code,
            "plan_name": "",
             "as_on": "2021-05-15"
        };

        
           

            var innernestedurl = 'https://pulsedb-qa.pulselabs.co.in/rest/api/v1/mf/analytical-data';
            var innernestedparams = {
                "auth": localapikey,
                "scheme_code":  x['scheme_code']
            }



            axios.post(innernestedurl, innernestedparams).then(function (innerapin) {
                
                const innerestedobtain = innerapin.data;
                var co = x.scheme_code;
                
                        var jm = {key : co,fund :x['Scheme Name']  , value : innerestedobtain.data[co]};
                        var back = wholeanalyticaldata;
                        back.push(jm);
                        setwholeanalyticaldata(back);


                var use = innerestedobtain.data[co].market_cap;
                
                    
                x['Largecap %'] = restricttotwodigits(use.market_cap_large);
            x['Midcap %'] = restricttotwodigits(use.market_cap_mid);
            x['Smallcap %'] = restricttotwodigits(use.market_cap_small);
            x['YTM'] = restricttotwodigits(innerestedobtain.data[co].yield_to_maturity);
            x['Dur'] = restricttotwodigits(innerestedobtain.data[co].average_maturity.avg_maturity_years);
            x['PE'] = restricttotwodigits(innerestedobtain.data[co].pe_ratio);
            x['A'] = restricttotwodigits(innerestedobtain.data[co].credit_breakup.a);
            x['AA'] = restricttotwodigits(innerestedobtain.data[co].credit_breakup.aa);
            x['AAA'] = restricttotwodigits(innerestedobtain.data[co].credit_breakup.aaa);
            x['Sov'] = restricttotwodigits(innerestedobtain.data[co].credit_breakup.sov);


            

            const tmparray = [];

            axios.post(nestedurl, nestedparams).then(function (apin) {
                const nestedobtain = apin["data"];
                
            
                        var jm = {key : x.scheme_code ,fund :x['Scheme Name'], value : nestedobtain};
                        var back2 = wholefundcarddata;
                        back2.push(jm);
                        setwholefundcarddata(back2);

               
                if(nestedobtain !== undefined && nestedobtain.data !==undefined) {

                    var mta = nestedobtain.data.metadata;
                    var rdk = nestedobtain.data["risk_parameters"];
                    var arrt = nestedobtain.data.annual_returns;
                    var mft = nestedobtain.data.mf_trailing;

                    if(mta !== undefined) {
                        if(mta.nav !== undefined) {
                            x['Nav'] = restricttotwodigits(nestedobtain.data.metadata.nav);
                        }
                        if(mta.fund_size !== undefined) {
                            x['AUM Cr'] = restricttotwodigits(nestedobtain.data.metadata.fund_size);
                        }
                        
                        
                    }
                    if(rdk !== undefined) {
                        
                        if(rdk["1Y"] !== undefined && rdk["1Y"] !== null) {
                        if(rdk["1Y"].sharpe_ratio !== undefined && rdk["1Y"].sharpe_ratio !== null) {
                            x['Sharpe'] = restricttotwodigits(rdk["1Y"].sharpe_ratio);
                        }
                        if(rdk["1Y"].sortino_ratio !== undefined) {
                            x['Sortino'] = restricttotwodigits(rdk["1Y"].sortino_ratio);
                        }
                        if(rdk["1Y"].annual_sd !== undefined) {
                            x['St Dev'] = restricttotwodigits(rdk["1Y"].annual_sd);
                        }
                    }
                        
                        
                    }
                    if(arrt !== undefined) {

                        if(arrt["2021"] !== undefined) {
                            if(arrt["2021"]["YTD"] !== undefined) {
                                x['YTD'] = restricttotwodigits(nestedobtain.data.annual_returns["2021"].YTD);
                            }
                        }

                        if(arrt["2020"] !== undefined) {
                            if(arrt["2020"]["annual"] !== undefined) {
                                x['2020'] = restricttotwodigits(arrt["2020"]["annual"]);
                            }
                        }

                        if(arrt["2019"] !== undefined) {
                            if(arrt["2019"]["annual"] !== undefined) {
                                x['2019'] = restricttotwodigits(arrt["2019"]["annual"]);
                            }
                        }

                        if(arrt["2018"] !== undefined) {
                            if(arrt["2018"]["annual"] !== undefined) {
                                x['2018'] = restricttotwodigits(arrt["2018"]["annual"]);
                            }
                        }

                        if(arrt["2017"] !== undefined) {
                            if(arrt["2017"]["annual"] !== undefined) {
                                x['2017'] = restricttotwodigits(arrt["2017"]["annual"]);
                            }
                        }

                        if(arrt["2016"] !== undefined) {
                            if(arrt["2016"]["annual"] !== undefined) {
                                x['2016'] = restricttotwodigits(arrt["2016"]["annual"]);
                            }
                        }

                        if(arrt["2015"] !== undefined) {
                            if(arrt["2015"]["annual"] !== undefined) {
                                x['2015'] = restricttotwodigits(arrt["2015"]["annual"]);
                            }
                        }
                        
                        
                        
                        
                        
                        
                    }
                    if(mft !== undefined) {
                        if(mft.length > 0) {
                            if(mft[0]["1M"] !== undefined) {
                                x['1M'] = restricttotwodigits(nestedobtain.data.mf_trailing[0]["1M"]);
                            }
                        }
                        if(mft.length > 1) {
                            if(mft[1]["3M"] !== undefined) {
                                x['3M'] = restricttotwodigits(nestedobtain.data.mf_trailing[1]["3M"]);
                            }
                        }
                        if(mft.length > 2) {
                            if(mft[2]["6M"] !== undefined) {
                                x['6M'] = restricttotwodigits(nestedobtain.data.mf_trailing[2]["6M"]);
                            }
                        }
                        if(mft.length > 3) {
                            if(mft[3]["1Y"] !== undefined) {
                                x['1Y'] = restricttotwodigits(nestedobtain.data.mf_trailing[3]["1Y"]);
                            }
                        }
                        if(mft.length > 4) {
                            if(mft[4]["3Y"] !== undefined) {
                                x['3Y'] = restricttotwodigits(nestedobtain.data.mf_trailing[4]["3Y"]);
                            }
                        }
                        if(mft.length > 5) {
                            if(mft[5]["5Y"] !== undefined) {
                                x['5Y'] = restricttotwodigits(nestedobtain.data.mf_trailing[5]["5Y"]);
                            }
                        }

                        if(mft.length > 6) {
                            if(mft[6]["7Y"] !== undefined) {
                                x['7Y'] = restricttotwodigits(nestedobtain.data.mf_trailing[6]["7Y"]);
                            }
                        }

                       
                        
                        
                        
                        
                        
                       
                    }
             

                    
                
              
                
                
                x['Net YTM'] = restricttotwodigits(100.0 - (parseFloat(x['Sov']) - parseFloat(x['A']) - parseFloat(x['AA']) - parseFloat(x['AAA'])));
            }
            else {
               
            }

                tmparray.push(x);
                setallfundsinfo(tmparray);
    
                setallfundsinfonecessary(tmparray);
                resolve(x);
            
                
                    
                
            });


            
                

            }).catch(err => {
                console.log(err);
                reject(err);
            })

        })
    }

    const getmesubcats = (localapikey,x) =>
    {

        return new Promise((resolve,reject) => {
                            
        var mk = axios.post('https://pulsedb-qa.pulselabs.co.in/rest/api/v1/mf/asset_sub_categories', {
            auth: localapikey,
            asset_category: x,
            amc_codes: ""
          }).then(function(response) {
            if(x == "Commodity") {

                setcommoditysubcats(response.data.data.asset_sub_categories);
            }
            else if(x == "Equity") {
                setequitysubcats(response.data.data.asset_sub_categories);
            }
            else if(x == "Fixed Income") {
                setfixedincomesubcats(response.data.data.asset_sub_categories);
            }
            else if(x == "Global") {
                setglobalsubcats(response.data.data.asset_sub_categories);
            }
            else if(x == "Hybrid") {
                sethybridsubcats(response.data.data.asset_sub_categories);
            }
          })
          
        })

    }


    const getallcategories = () => {

        var allnestedrequests = [];
       
         var localapikey = "nA0u7X8Bgj-sqhiYT6Wh";
        // axios.post('https://pulsedb-qa.pulselabs.co.in/rest/api/v1/partner_login', {
        //     partner: Constants.partner,
        //     key: Constants.key
        // })
        // .then(function (response) {
        //     localapikey = response.data.data.auth;
            axios.post('https://pulsedb-qa.pulselabs.co.in/rest/api/v1/mf/asset_categories', {
                auth: localapikey,
                amc_codes: ""
              })
              .then(function (response) {
                const obtain = response.data.data['asset_categories'];
                setallavailablecategories(obtain);
                obtain.map(ki => {
                    getmesubcats(localapikey , ki);
                });
                


                
              
              })
              .catch(function (error) {
                console.log(error);
              });

        // })
        // .catch(function (error) {
        //     console.log(error);
        // });



       
    }


    function userExists(username) {
        var found = false;
        for(var i = 0; i < alldisplayingcoloumns.length;i++)
        {
            if(alldisplayingcoloumns[i] === username) {
                return true;
            }
        }
        return false;
       }
 
       const closedisplayportal = () => {
         setdisplayportalvisible('none');
       }

       const closecategoriesportal = () => {
        setcategoriesportalvisible('none');
      }

      const closeamcportal = () => {
        setamcportalvisible('none');
      }


      const handlecheckboxforamc= (e) => {
        var isChecked = e.target.checked;  
        var item = e.target.value;  
      
        if(allselectedamc.includes(item)) {
            var array = [...allselectedamc];
            var tp = [];
            var index = array.indexOf(item);
            for(var i=0;i<array.length;i++)
            {
                if(array[i] !== item) {
                    tp.push(array[i]);
                }
            }
            setallselectedamc(tp);
            setamcportalvisible(false);
            fetchfundsfirebase(allcategoryaveragesexist,allselectedcategories,tp);
            // fetchfundswitharray(allselectedcategories,tp);
        }
        else {
           
            var ag = [...allselectedamc];
            ag.push(item);
            setallselectedamc(ag);
            setamcportalvisible(false);
            fetchfundsfirebase(allcategoryaveragesexist,allselectedcategories,ag);
            // fetchfundswitharray(allselectedcategories,ag);
            
        }
       }


       useEffect(() => {
          if(allfundsinfonecessary.length > 0) {
           var distnctcats = [];
           var anyextracats = false;
           allselectedcategories.forEach((category) => {
               if(category == "Equity" || category == "Fixed Income") {
                   distnctcats.push(category);
               }
               else {
                   var find1 = equitysubcats.filter((ek) => ek === category);
                   var find2 = fixedincomesubcats.filter((ek) => ek === category);
                   if(find1.length > 0) {
                       if(distnctcats.includes("Equity")) {

                       }
                       else {
                           distnctcats.push("Equity");
                       }
                   }
                   if(find2.length > 0) {
                    if(distnctcats.includes("Fixed Income")) {

                    }
                    else {
                        distnctcats.push("Fixed Income");
                    }
                }
                if(find1.length == 0 && find2.length == 0) {
                    if(category == "Commodity" || category == "Global" || category == "Hybrid") {
                        anyextracats = true;
                    }
                    else {
                        var find3 = commoditysubcats.filter((ek) => ek === category);
                        var find4 = globalsubcats.filter((ek) => ek === category);
                        var find5 = hybridsubcats.filter((ek) => ek === category);
                        if(find3.length > 0 || find4.length > 0 || find5.length > 0) {
                            anyextracats = true;
                        }
                    }
                }
               }
           });
           if(distnctcats.length == 1) {
               if(distnctcats[0] == "Equity") {
                var cpy = ['Scheme Name' , 'SEBI Classification' ,'Category', 'Nav', 'AUM Cr','TER','PE','Largecap %','Midcap %','Smallcap %','YTD','1M','3M','6M','1Y','3Y','5Y','7Y','10Y','2020','2019','2018','2017','2016','2015','Sharpe 1Y','Sortino 1Y','St Dev 1Y','Beta 1Y','Treynor Ratio 1Y','Jensens Alpha 1Y','Information Ratio 1Y','R Squared 1Y'];
                setalldisplayingcoloumns(cpy);
               }
               else if(distnctcats[0] == "Fixed Income") {
                var cpy = ['Scheme Name' , 'SEBI Classification' ,'Category', 'Nav', 'AUM Cr','TER','Net YTM','YTM','Av Mat','Dur','Sov','AAA','AA','A','YTD','1M','3M','6M','1Y','3Y','5Y','7Y','10Y','2020','2019','2018','2017','2016','2015','Sharpe 1Y','Sortino 1Y','St Dev 1Y','Beta 1Y','Treynor Ratio 1Y','Jensens Alpha 1Y','Information Ratio 1Y','R Squared 1Y'];
                setalldisplayingcoloumns(cpy);
               }
           }
           else {
               setalldisplayingcoloumns(alloriginaldisplayingcolumns);
           }

           if(distnctcats.length == 0 || anyextracats) {
            setalldisplayingcoloumns(alloriginaldisplayingcolumns);
           }
        }
       }, [allselectedcategories]);


       const handlecheckboxforcategories = (e) => {
        var isChecked = e.target.checked;  
        var item = e.target.value;  
       
        if(allselectedcategories.includes(item)) {
            var array = [...allselectedcategories];
            var tp = [];
            var index = array.indexOf(item);
            for(var i=0;i<array.length;i++)
            {
                if(array[i] !== item) {
                    tp.push(array[i]);
                }
            }
            
            setallselectedcategories(tp);
            setcategoriesportalvisible(false);
            fetchfundsfirebase(allcategoryaveragesexist, tp , allselectedamc);
            // fetchfundswitharray(tp,allselectedamc);
        }
        else {
           
            var ag = [...allselectedcategories];
            ag.push(item);
            setallselectedcategories(ag);
            setcategoriesportalvisible(false);
       
            fetchfundsfirebase(allcategoryaveragesexist, ag , allselectedamc);
            // fetchfundswitharray(ag,allselectedamc);
   
        }
        
        
     
       }

       const handlecheckboxfordisplay = (e) => {
        var isChecked = e.target.checked;  
        var item = e.target.value;  
       
        if(alldisplayingcoloumns.includes(item)) {
            var array = [...alldisplayingcoloumns];
            var tp = [];
            var index = array.indexOf(item);
           
            var ogindex = allavailableoptions.indexOf(item);
            for(var i=0;i<array.length;i++)
            {
             if(array[i] !== item) {
                    tp.push(array[i]);
                }
            }
            setalldisplayingcoloumns(tp);
        }
        else {
          
            var ag = [...alldisplayingcoloumns];
            var ogindex = allavailableoptions.indexOf(item);
            if(ag.length > ogindex) {
                ag.splice(ogindex, 0, item);
            }
            else {
                ag.push(item);
            }
            var snd = [];
            allavailableoptions.map(eik => {
                var df = alldisplayingcoloumns.filter(kll => kll == eik);
                if(df.length > 0 || item == eik) {
                    snd.push(eik);
                }
            })
            
            setalldisplayingcoloumns(snd);
   
        }
   

    }

    const showdisplayportal = () => {
        
        setdisplayportalvisible('block');
        
    }

    const scattapped = () => {
        setcategoriesportalvisible('block');
    }

    const samctapped = () => {
        setamcportalvisible('block');
    }

    const setcomparemanual = (x) => {
        
        setcompareviewvisible(x);
        
    }

const toggleallselected = (e) => {
    


        var tmparray = [];
        if(isallselected == false) {
            allfundsinfonecessary.map(kl => {
            
                tmparray.push(kl.scheme_code);
            })
        
            setallportfoliofunds(tmparray);
        }
        else {

        
            setallportfoliofunds([]);
        }
        setisallselected(!isallselected);
   
      

}

    return (
        <div className="wholecover">
            <div className="wholecovermobile">
                <h2>Mutual Funds</h2>
                <h3>Please visit from Desktop/Laptop</h3>
            </div>
            <button onClick={compareportfoliofunds} className="comparebtn">Compare {allportfoliofunds.length} Fund(s)</button>
            {allportfoliofunds.length > 0 && <button onClick={clearportfoliofunds} className="clearbtn">Clear Selected Fund(s)</button>}



        <div className="compareviewholder" style={{display : compareviewvisible}}>
            <div className="compareview" >
                <button onClick={() => { setcompareviewvisible("none")}}>Close</button>
               
                <Comparision allportfoliofunds = {allportfoliofunds} alldisplayingcoloumnspassed = {alldisplayingcoloumns} allselectedcategoriespassed={allselectedcategories} portfoliofundsindetails= {portfoliofundsindetails} setcompareviewvisible={setcomparemanual} allaverages={allaverages} equitysubcats={equitysubcats} fixedincomesubcats={fixedincomesubcats} commoditysubcats={commoditysubcats} globalsubcats={globalsubcats} hybridsubcats={hybridsubcats}/>
               
            </div>
        </div>

        <div className="upperview">
            <div className="textinfo">
                <h4>Mutual Funds</h4>
                {/* <div className="notice"> */}
                <h4>Showing {allfundsinfonecessary.length} Fund(s)</h4>
                <h4>Last Updated {lastupdated.split(" ")[0]} {lastupdated.split(" ")[1]} {lastupdated.split(" ")[2]} {lastupdated.split(" ")[3]}</h4>
                {/* </div> */}
            </div>
            {/* <div className="second">
                <button>Category</button>
                <button>Screen</button>
                <button>Compare</button>
                <button>Equity Holdings</button>
                <button>Debt Holdings</button>
            </div> */}

            

            <div className="third">
                <div className="each">
                    <button onClick={scattapped}>Select Categories {allselectedcategories.length > 0 ? (<span>{allselectedcategories.length}</span>) : ""} </button>
                    <button onClick={samctapped}>Filter AMC {allselectedamc.length > 0 ? (<span>{allselectedamc.length}</span>) : ""} </button>
                </div>
                <div className="each">
                    <h4>Filter AUM</h4>
                    <h5>Min. AUM (Cr)</h5>
                    <input type='number' onChange={aumtyped}></input>
                    <button onClick={aumtypeapplied}>Apply</button>
                </div>
                {/* <div className="each">
                    <h4>Filter Plan</h4>
                    <select>
                        <option>A</option>
                        <option>A</option>
                        <option>A</option>
                        <option>A</option>
                        <option>A</option>
                    </select>
                </div> */}
                <div className="each">
                <h4>Sort By</h4>
                    <select onChange={sortbychanged}>
                        <option>None</option>
                        {
                            allavailableoptions.map(mj => {
                                return(<option value={mj}>{mj}</option>)
                            })
                        }
                        
                       
                    </select>

                    <h4>Sort Order</h4>
                    <select onChange={sortorderchanged}>
                        <option value='ascending'>Ascending</option>
                        <option value='descending'>Descending</option>
                        
                    </select>
                </div>
                <div className="each">
                    <h4>Fund Properties</h4>
                    <button onClick={showdisplayportal}>Change</button>
                </div>
                <div className="each">
                {/* <h4>Show Top</h4>
                    <select>
                        <option>A</option>
                        <option>A</option>
                        <option>A</option>
                        <option>A</option>
                        <option>A</option>
                    </select> */}

                    {/* <h4>If nav in last</h4>
                    <select>
                        <option>A</option>
                        <option>A</option>
                        <option>A</option>
                        <option>A</option>
                        <option>A</option>
                    </select> */}
                </div>

               


            </div>
            
        </div>
        {loadingdone === true ? (
        <div className="lowerview">




        <div className="displaycolumnsselection displaycolumnsselectionamc" style={{display : amcportalvisible}}>
                <div className="one">
                    <button onClick={closeamcportal}>Close</button>
                    
                </div>

                <div className="two">
                    <h4>Check all the AMC you want to make visible , and uncheck all AMC you want to hide</h4>
                    <div className="holder">
                       {
                           allavailableamc.map(m => {
                               return (
                                   <div className="eachcheck">
                                <input type="checkbox" name="amcc" value={m.key} checked={allselectedamc.includes(m.key) ? true : false} onChange={handlecheckboxforamc} /> {m.key} </div>
                               )
                           })
                       }
                    </div>
                </div>

            </div>


        <div className="displaycolumnsselection" style={{display : categoriesportalvisible}}>
                <div className="one">
                    <button onClick={closecategoriesportal}>Close</button>
                    
                </div>

                <div className="two">
                    <h4>Check all the Categories you want to make visible , and uncheck all Categories you want to hide</h4>
                    <div className="holder">
                       {
                           allavailablecategories.map(m => {
                               
                                return(
                                        
                                            <div className= 'eachcheck specialcheck'>
                                            <input type="checkbox" value={m} checked={allselectedcategories.includes(m) ? true : false} onChange={handlecheckboxforcategories} /> {m} </div>
                                )
                           })
                            }
                    
                       
                    </div>
                        <div className="linersholder">
                            <div className="liners">
                                {
                                    commoditysubcats.map(m => {
                               
                                        return(
                                        
                                            <div className= 'eachcheck specialcheck'>
                                            <input type="checkbox" value={m} checked={allselectedcategories.includes(m) ? true : false} onChange={handlecheckboxforcategories} /> {m} </div>
                                        )
                                    })
                                }
                            </div>

                            <div className="liners">
                                {
                                    equitysubcats.map(m => {
                               
                                        return(
                                        
                                            <div className= 'eachcheck specialcheck'>
                                            <input type="checkbox" value={m} checked={allselectedcategories.includes(m) ? true : false} onChange={handlecheckboxforcategories} /> {m} </div>
                                        )
                                    })
                                }
                            </div>

                            <div className="liners">
                                {
                                    fixedincomesubcats.map(m => {
                               
                                        return(
                                        
                                            <div className= 'eachcheck specialcheck'>
                                            <input type="checkbox" value={m} checked={allselectedcategories.includes(m) ? true : false} onChange={handlecheckboxforcategories} /> {m} </div>
                                        )
                                    })
                                }
                            </div>

                            <div className="liners">
                                {
                                    globalsubcats.map(m => {
                               
                                        return(
                                        
                                            <div className= 'eachcheck specialcheck'>
                                            <input type="checkbox" value={m} checked={allselectedcategories.includes(m) ? true : false} onChange={handlecheckboxforcategories} /> {m} </div>
                                        )
                                    })
                                }
                            </div>

                            <div className="liners">
                                {
                                    hybridsubcats.map(m => {
                               
                                        return(
                                        
                                            <div className= 'eachcheck specialcheck'>
                                            <input type="checkbox" value={m} checked={allselectedcategories.includes(m) ? true : false} onChange={handlecheckboxforcategories} /> {m} </div>
                                        )
                                    })
                                }
                            </div>

                        </div>

                </div>

            </div>



            
            <div className="displaycolumnsselection" style={{display : displayportalvisible}}>
                <div className="one">
                    <button onClick={closedisplayportal}>Close</button>
                   
                </div>

                <div className="two">
                    <h4>Check all the coloumns you want to make visible , and uncheck all coloumns you want to hide</h4>
                    <div className="holder">
                       {
                           allavailableoptions.map(m => {
                               return (
                                   <div className="eachcheck">
                                <input type="checkbox" value={m} checked={alldisplayingcoloumns.includes(m) ? true : false} onChange={handlecheckboxfordisplay} /> {m} </div>
                               )
                           })
                       }
                    </div>
                </div>

            </div>



            <div id="table-scroll" class="table-scroll">
            <table id="main-table" class="main-table">
            <thead>
            <tr>
                {
                    alldisplayingcoloumns.map(mk => {
                        return (<th scope="col" className={mk === "Scheme Name" ? 'expanded first-col' : 'normal'}> { alldisplayingcoloumns.indexOf(mk) === 0 && (allselectedcategories.length > 0 || allselectedamc.length > 0) ? ( <div className='makeflatouter'><div className='makeflat'> <input type='checkbox' name='selectallbtn' checked={isallselected} onChange={toggleallselected} /> <span>Select All</span></div></div>) : ""} <span>{mk == "Treynor Ratio 1Y" ? "Treynor Ratio 1Y" : (mk == "Treynor Ratio 1M") ? "Treynor Ratio 1M" : (mk == "Treynor Ratio 3M") ? "Treynor Ratio 3M" : (mk == "Treynor Ratio 3Y") ? "Treynor Ratio 3Y" : (mk == "Treynor Ratio 5Y") ? "Treynor Ratio 5Y" : (mk == "Treynor Ratio 7Y") ? "Treynor Ratio 7Y" :  mk}</span>{mk === "Scheme Name" || mk === "SEBI Classification" || mk === "Category" ? "" : <button style={{backgroundColor : sortedby === mk ? '#EAB64A' : 'white'}} onClick={() => checkoutsorting(mk)}>{sortedby === mk ? (sortorder == "ascending" ? "Asc" : "Dsc") : 'None'}</button>}</th>)
                    })
                }
            </tr>
    </thead>
    <tbody>
        {                  
            loadingdone && allfundsinfonecessary.length > 0 && allfundsinfonecessary.map(mk => {
                return (
                    <tr style={{backgroundColor : allportfoliofunds.includes(mk.scheme_code) ? '#EAB64A' : 'white'}}> 
                            {
                                alldisplayingcoloumns.map(jh => {
                                return jh == "Scheme Name" ? ( <th className="specialth" style={{backgroundColor : allportfoliofunds.includes(mk.scheme_code) ? '#EAB64A' : 'white'}}> {alldisplayingcoloumns.indexOf(jh) === 0 ? ( <div> <input type="checkbox" name="protfoliofund" checked={allportfoliofunds.includes(mk.scheme_code)} value={mk.scheme_code} onChange={handleportfoliofund}  /> <span>{mk[jh]}</span></div> ) :  mk[jh]} </th>) : ( <td> {alldisplayingcoloumns.indexOf(jh) === 0 ? ( <div  style={{backgroundColor : 'white'}}> <input type="checkbox" name="protfoliofund" checked={allportfoliofunds.includes(mk.scheme_code)} value={mk.scheme_code} onChange={handleportfoliofund}  /> <span>{mk[jh]}</span></div> ) :  mk[jh]} </td>)
                                })
                            }
                    </tr>
                )
            })
        }
    </tbody>
    

  </table>
</div>







{/* 

            {
                         allfundsinfonecessary.length == 0 ? <h3 id="nodatawarning">No Data Found</h3> : (

      


            <div className="view">
            <div className="tablecover wrapper">
  

                    
            <table>
                <thead>
                        <tr className="heads">
                    {
                        alldisplayingcoloumns.map(mk => {
                            return (<th className={mk === "Scheme Name" ? 'expanded' : 'normal'}> { alldisplayingcoloumns.indexOf(mk) === 0 && (allselectedcategories.length > 0 || allselectedamc.length > 0) ? ( <div className='makeflatouter'><div className='makeflat'> <input type='checkbox' name='selectallbtn' checked={isallselected} onChange={toggleallselected} /> <span>Select All</span></div></div>) : ""} {mk == "Treynor Ratio 1Y" ? "Trey 1Y" : (mk == "Treynor Ratio 1M") ? "Trey 1M" : (mk == "Treynor Ratio 3M") ? "Trey 3M" : (mk == "Treynor Ratio 3Y") ? "Trey 3Y" : (mk == "Treynor Ratio 5Y") ? "Trey 5Y" : (mk == "Treynor Ratio 7Y") ? "Trey 7Y" :  mk}</th>)
                        })
                    }
                    </tr>
                    
                </thead>
                <tbody>
                        
                       
                       
                    {

                        
                        loadingdone && allfundsinfonecessary.length > 0 && allfundsinfonecessary.map(mk => {
                           
                            return (
                                <tr> 
                                        {
                                            alldisplayingcoloumns.map(jh => {
                                                return (<td> {alldisplayingcoloumns.indexOf(jh) === 0 ? ( <div  style={{backgroundColor : 'white'}}> <input type="checkbox" name="protfoliofund" checked={allportfoliofunds.includes(mk.scheme_code)} value={mk.scheme_code} onChange={handleportfoliofund}  /> <span>{mk[jh]}</span></div> ) :  mk[jh]} </td>)
                                            })
                                        }
                                </tr>
                            )
                        })
                    }


                 <tr className="averagesrow"> 
                        {
                            alldisplayingcoloumns.map(jh => {
                                return (<td>{jh == 'Scheme Name' ? 'Category Average' : allfieldswrapperaverages.filter(mlk => mlk.key == jh).length > 0 && allfieldswrapperaverages.filter(mlk => mlk.key == jh)[0].value !== undefined ? Number(restricttotwodigits(Number(allfieldswrapperaverages.filter(mlk => mlk.key == jh)[0].avg)))  : "0"}</td>)
                            })
                        }
                    </tr>
                    
  

                    
                    
                   

                </tbody>
            </table>

                        
            </div>
            </div>
            
            )} */}
            
        </div>
        ) : ( 
            <div className='loadingcontainer'>
            <Loader
                type="Grid"
                color="#141D1D"
                height={100}
                width={100}
                timeout={300000} //3 secs
            />
            </div>
        )}
        </div>
    )
}

export default Upperview
