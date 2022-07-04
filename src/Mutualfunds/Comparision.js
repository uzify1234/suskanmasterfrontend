import React, {useEffect , useRef, useState} from 'react'
import './Comparision.css'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import autoTable from 'jspdf-autotable'
import { CSVLink, CSVDownload } from "react-csv";
import db, { auth } from '../Helpers/Firebase'
import html2canvas from "html2canvas";


function Comparision({allportfoliofunds,alldisplayingcoloumnspassed,allselectedcategoriespassed,portfoliofundsindetails,setcompareviewvisible,allaverages,equitysubcats,fixedincomesubcats,commoditysubcats,globalsubcats, hybridsubcats}) {


    const [alldisplayingcoloumns, setalldisplayingcoloumns] = useState(alldisplayingcoloumnspassed);
    const [alloriginaldisplayingcolumns, setalloriginaldisplayingcolumns] = useState(alldisplayingcoloumnspassed);
    const [allselectedcategories, setallselectedcategories] = useState(allselectedcategoriespassed);



    const [allupperoptions, setallupperoptions] = useState(['Scheme Name' ,'1M','3M','6M','1Y','3Y','5Y','7Y','10Y']);

    const [allreturnsoptions, setallreturnsoptions] = useState(['Scheme Name' ,'1','3','5','7','10']);


    const [allloweroptions, setallloweroptions] = useState(['Scheme Name', 'AUM Cr','TER','PE','PB','Sharpe 1Y','Sortino 1Y','Beta 1Y','St Dev 1Y']);

    const [alllowestoptions, setalllowestoptions] = useState(['Scheme Name','Largecap %','Midcap %','Smallcap %','Sov','AAA','AA','A','YTM','Av Mat','Dur']);


    const [user, setuser] = useState(null);

    const [showdata, setshowdata] = useState(false);
    const [exceldownloaddata, setexceldownloaddata] = useState([]);
    const [resportsdisplay, setreportsdiplay] = useState('none');
    // const [allaverages, setallaverages] = useState([]);
    // const [averageloaded, setaverageloaded] = useState(false);


    // const findallaverages = () => {
    //     console.log("First Fund is ");
    //     console.log(originallistingoffunds);
    //     var allavgscalc = [];
    //     if(originallistingoffunds.length > 0) {
    //         var firstfund = originallistingoffunds[0];
    //         for(var eachkey in firstfund) {
    //             console.log(eachkey);
    //             if(eachkey == "scheme_code" || eachkey == "Scheme Name" || eachkey == "SEBI Classification" || eachkey == "Category") {
    //                 continue;
    //             }
    //             var totalvalue = 0;
    //             var count = 0;
    //             originallistingoffunds.map(eachfund => {
    //                 portfoliofundsindetails.map(eachportfoliofund => {
    //                     if(eachportfoliofund["SEBI Classification"] == eachfund["SEBI Classification"] || eachportfoliofund["Category"] == eachfund["Category"]) {
    //                         if(eachfund[eachkey] !== undefined && eachfund[eachkey] !== NaN && eachfund[eachkey] !== "NaN" && eachfund[eachkey] !== "NA" && isNaN(eachfund[eachkey]) == false) {
    //                             if(eachkey == "Sortino") {
    //                                 console.log("Adding requires "+eachfund[eachkey]);
    //                             }
    //                             totalvalue = totalvalue + Number(eachfund[eachkey]);
    //                             count = count + 2;
    //                         }
    //                     }
    //                 });
    //             });
    //             var newm = {key : eachkey , avg : (totalvalue/count)};

    //             allavgscalc.push(newm);
    //             setallaverages(allavgscalc);
    //             console.log(allavgscalc);

    //         }
    //         setaverageloaded(true);
            
            
    //     }
    // }

    useEffect(() => {
        setalldisplayingcoloumns(alldisplayingcoloumnspassed);
        setallselectedcategories(allselectedcategoriespassed);
    },[]);

    useEffect(() => {
        var tmpcat = [];
        portfoliofundsindetails.forEach((fund) => {
            var fgk = tmpcat.filter((gh => gh === fund["Category"]));
            if(fgk.length === 0) {
                tmpcat.push(fund["Category"]);
            }
        })
        setallselectedcategories(tmpcat);
    },[portfoliofundsindetails]);

    useEffect(() => {
        handledistinctctaegories();
    },[allselectedcategories]);


    const handledistinctctaegories = () => {
  
        var distnctcats = allselectedcategories;
        var anyextracats = false;

        // allselectedcategories.forEach((category) => {
        //     if(category == "Equity" || category == "Fixed Income") {
        //         distnctcats.push(category);
        //     }
        //     else {
        //         var find1 = equitysubcats.filter((ek) => ek === category);
        //         var find2 = fixedincomesubcats.filter((ek) => ek === category);
        //         if(find1.length > 0) {
        //             if(distnctcats.includes("Equity")) {

        //             }
        //             else {
        //                 distnctcats.push("Equity");
        //             }
        //         }
        //         if(find2.length > 0) {
        //          if(distnctcats.includes("Fixed Income")) {

        //          }
        //          else {
        //              distnctcats.push("Fixed Income");
        //          }
        //      }
        //      if(find1.length == 0 && find2.length == 0) {
        //          if(category == "Commodity" || category == "Global" || category == "Hybrid") {
        //              anyextracats = true;
        //          }
        //          else {
        //              var find3 = commoditysubcats.filter((ek) => ek === category);
        //              var find4 = globalsubcats.filter((ek) => ek === category);
        //              var find5 = hybridsubcats.filter((ek) => ek === category);
        //              if(find3.length > 0 || find4.length > 0 || find5.length > 0) {
        //                  anyextracats = true;
        //              }
        //          }
        //      }
        //     }
        // });
        if(distnctcats.length == 1) {
            if(distnctcats[0] == "Equity") {
             var cpy = ['Scheme Name' , 'SEBI Classification' ,'Category', 'Nav', 'AUM Cr','TER','PE','Largecap %','Midcap %','Smallcap %','YTD','1M','3M','6M','1Y','3Y','5Y','7Y','10Y','2020','2019','2018','2017','2016','2015','Sharpe 1Y','Sortino 1Y','St Dev 1Y','Beta 1Y','Treynor Ratio 1Y','Jensens Alpha 1Y','Information Ratio 1Y','R Squared 1Y'];
             setalldisplayingcoloumns(cpy);
             setalllowestoptions(['Scheme Name','Largecap %','Midcap %','Smallcap %']);
            }
            else if(distnctcats[0] == "Fixed Income") {
             var cpy = ['Scheme Name' , 'SEBI Classification' ,'Category', 'Nav', 'AUM Cr','TER','Net YTM','YTM','Av Mat','Dur','Sov','AAA','AA','A','YTD','1M','3M','6M','1Y','3Y','5Y','7Y','10Y','2020','2019','2018','2017','2016','2015','Sharpe 1Y','Sortino 1Y','St Dev 1Y','Beta 1Y','Treynor Ratio 1Y','Jensens Alpha 1Y','Information Ratio 1Y','R Squared 1Y'];
             setalldisplayingcoloumns(cpy);
             setalllowestoptions(['Scheme Name','Sov','AAA','AA','A','YTM','Av Mat','Dur']);
             setallloweroptions(['Scheme Name', 'AUM Cr','TER','PB','Sharpe 1Y','Sortino 1Y','Beta 1Y','St Dev 1Y']);
            }
        }
        else {
            setalldisplayingcoloumns(alldisplayingcoloumnspassed);
        }

        if(distnctcats.length == 0 || anyextracats) {
         setalldisplayingcoloumns(alldisplayingcoloumnspassed);
        }
    };
    
    const getcompondamount = (principal, interest) => {
        console.log("Interest",interest);
        const n = 24;
        const int = Number(interest);
        const A = principal *  [Math.pow((1+int),n)-1 ] * ((1+int)/int);
        console.log("Amount",A);
        return A;
    }

    useEffect(async () => {
        auth.onAuthStateChanged((user) => {
            if (user) {
              var uid = user.uid;
              db.collection('users').doc(uid).get().then(userinfo => {
                  if(userinfo.data() !== undefined) {
                    setuser(userinfo.data());
                  }
              })
            } else {
            }
          });
    }, []);

    useEffect(() => {
        downloadexcel();
    }, [portfoliofundsindetails]);

    const restricttotwodigits = (m) => {
        var k = parseFloat(m);
        
        if( k === undefined) {
            return m
        }
        else {
            return k.toFixed(2);
        }
    }


    const renderarrays = () => {
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


        // console.log("Filtered :::: ");
        // console.log(filteredwholescreenerdata);
        // console.log(filterwholeanalyticaldata);
        // console.log(filterwholefundcarddata);
    }



const downloadexcel = () => {
    console.log(portfoliofundsindetails);
    if(portfoliofundsindetails.length > 0) {
        var fele = ["Fund Name", ...Object.keys(portfoliofundsindetails[0])];
    var csvdata = [fele];
    portfoliofundsindetails.map((fund) => {
        var dm = [fund["Scheme Name"], ...Object.values(fund)];
        csvdata.push(dm);
    });
    console.log(csvdata);
    setexceldownloaddata(csvdata);
    }
}

    const downloadtable = () => {
        const doc = new jsPDF()
        var tmparry = [];
        var tmparry2 = [];
        var tmparry3 = [];
        var tmparry4 = [];
        var tmparry5 = [];
        var tmparry6 = [];

        var heading1 = [];
        var head2 = [];
        var head3 = [];
        var head4 = [];
        var head5 = [];
        var head6 = [];
        portfoliofundsindetails.map(mk => {
           var eacharr = [];
           var eacharr2 = [];
           var eacharr3 = [];
           var eacharr4 = [];
           var eacharr5 = [];
           var eacharr6 = [];
            
                    
                        alldisplayingcoloumns.map(jh => {
                            if(alldisplayingcoloumns.indexOf(jh) >= 30) {
                                if(head6.length < 6) {
                                head6.push(jh);
                                }
                                eacharr6.push(mk[jh]);
                            }
                            else if(alldisplayingcoloumns.indexOf(jh) >= 24) {
                                if(head5.length < 6) {
                                head5.push(jh);
                                }
                                eacharr5.push(mk[jh]);
                                
                            }
                            else if(alldisplayingcoloumns.indexOf(jh) >= 18) {
                                if(head4.length < 6) {
                                head4.push(jh);
                                }
                                eacharr4.push(mk[jh]);
                                
                            }
                            else if(alldisplayingcoloumns.indexOf(jh) >= 12) {
                                if(head3.length < 6) {
                                head3.push(jh);
                                }
                                eacharr3.push(mk[jh]);
                                
                            }
                            else if(alldisplayingcoloumns.indexOf(jh) >= 6) {
                                if(head2.length < 6) {
                                head2.push(jh);
                                }
                                eacharr2.push(mk[jh]);
                                
                            }
                            else {
                                if(heading1.length < 6) {
                                heading1.push(jh);
                                }
                                eacharr.push(mk[jh]);
                            }
                            
                        })

                        if(eacharr.length > 0) {
                            tmparry.push(eacharr);
                        }
                         if(eacharr2.length > 0) {
                            tmparry2.push(eacharr2);
                        }
                         if(eacharr3.length > 0) {
                            tmparry3.push(eacharr3);
                        }
                         if(eacharr4.length > 0) {
                            tmparry4.push(eacharr4);
                        }
                         if(eacharr5.length > 0) {
                            tmparry5.push(eacharr5);
                        }
                         if(eacharr6.length > 0) {
                            tmparry6.push(eacharr6);
                        }


                        
                    
               
            
        })
        doc.autoTable({
            head: [heading1],
            body: tmparry,
          })

          doc.autoTable({
            head: [head2],
            body: tmparry2,
          })
          doc.autoTable({
            head: [head3],
            body: tmparry3,
          })
          doc.autoTable({
            head: [head4],
            body: tmparry4,
          })
          doc.autoTable({
            head: [head5],
            body: tmparry5,
          })
          doc.autoTable({
            head: [head6],
            body: tmparry6,
          })
        doc.save('funds.pdf')
    }

    function getImgFromUrl(logo_url, callback) {
        var img = new Image();
        img.src = user?.logourl;
        console.log("Get IMG from URL");
        img.onload = function () {
            console.log("CALL BACK");
            callback(img);
        };
    }

    const getBase64StringFromDataURL = (dataURL) =>
    dataURL.replace('data:', '').replace(/^.+,/, '');

    const handlemiddleupload = () => {
        var logo_url = user?.logourl;
        console.log("Handle Middle Upload");
        getBase64FromUrl(user?.logourl).then((url) => {
            exportPdf(url);
        });
    }

    const getBase64FromUrl = async (url) => {
        const data = await fetch(url);
        const blob = await data.blob();
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(blob); 
          reader.onloadend = () => {
            const base64data = reader.result;   
            resolve(base64data);
          }
        });
      }

    const exportPdf = (imgData) => {
        const doc = new jsPDF();
        doc.setFontSize(10);
        doc.addImage(imgData, 'JPEG', doc.internal.pageSize.getWidth() - 40, 10, 30, 30);
        doc.text(`${user?.tagline}`, 10, 10);
        doc.text(`${user?.firstname} ${user?.lastname}`, 10, 17);
        doc.text(`ARN: ${user?.arn}`, 10, 24);
        doc.text(`Phone: ${user?.mobile}`, 10, 31);
        doc.text(`Email: ${user?.email}`, 10, 38);
        doc.text(`Corporate Office: ${user?.address}`, 10, 45);
        doc.text(`Website: ${user?.website}`, 10, 52);
        doc.text(`AMFI Registered Mutual Funds Distributor`, 10, 59);
        // var extra = {
        //     'Scheme Name' : 'Category Averages',
        //     '1M': allaverages.filter(item => item.key === '1M'),
        //     '3M': allaverages.filter(item => item.key === '1M'),
        //     '6M': allaverages.filter(item => item.key === '1M'),
        //     '1Y': allaverages.filter(item => item.key === '1M'),
        //     '3Y': allaverages.filter(item => item.key === '1M'),
        //     '5Y': allaverages.filter(item => item.key === '1M'),
        //     '7Y': allaverages.filter(item => item.key === '1M'),
        //     '10Y': allaverages.filter(item => item.key === '1M'),
        //     'AUM Cr': allaverages.filter(item => item.key === '1M'),
        //     'TER': allaverages.filter(item => item.key === '1M'),
        //     'PE': allaverages.filter(item => item.key === '1M'),
        //     'PB': allaverages.filter(item => item.key === '1M'),
        //     'Sharpe 1Y': allaverages.filter(item => item.key === '1M'),
        //     'Sortino 1Y': allaverages.filter(item => item.key === '1M'),
        //     'Beta 1Y': allaverages.filter(item => item.key === '1M'),
        //     'TER': allaverages.filter(item => item.key === '1M'),
        // }
        var extra = {};
        allaverages.forEach((item) => {
            extra[item.key] = item.avg
        });
        extra['Scheme Name'] = 'Category Averages';
        // portfoliofundsindetails.push(extra);
        var tmparray = [];
        var tmparray2 = [];
        var tmparray3 = [];
        var alreadydone = false;
        portfoliofundsindetails.forEach(element => {
            var eacharr = [];
            var eacharr2 = [];
            var eacharr3 = [];
            allupperoptions.forEach(up => {
                eacharr.push(element[up]);
            });
            allloweroptions.forEach(up => {
                eacharr2.push(element[up]);
            });
            alllowestoptions.forEach(up => {
                eacharr3.push(element[up]);
            });
            tmparray.push(eacharr);
            tmparray2.push(eacharr2);
            tmparray3.push(eacharr3);
        });
            var eacharr = [];
            var eacharr2 = [];
            var eacharr3 = [];
            allupperoptions.forEach(up => {
                eacharr.push(Number(extra[up]) ? Number(extra[up]).toFixed(2) : extra[up]);
            });
            allloweroptions.forEach(up => {
                eacharr2.push(Number(extra[up]) ? Number(extra[up]).toFixed(2) : extra[up]);
            });
            alllowestoptions.forEach(up => {
                eacharr3.push(Number(extra[up]) ? Number(extra[up]).toFixed(2) : extra[up]);
            });
            tmparray.push(eacharr);
            tmparray2.push(eacharr2);
            tmparray3.push(eacharr3);
        
        doc.autoTable({
            startY: 70,
            head: [allupperoptions],
            body: tmparray,
          });
          doc.autoTable({
            head: [allloweroptions],
            body: tmparray2,
          });
          doc.autoTable({
            head: [alllowestoptions],
            body: tmparray3,
          });

          doc.save('reports.pdf');

        //   if(user?.logourl === undefined || user?.logourl === null) {
        //     doc.save('reports.pdf');
        //   }
        //   else {
        //     var img = new Image;
        //     img.src = user?.logourl;
        //     img.onload = function() {
        //         doc.addImage(this, 10, 10);
        //         doc.save('reports.pdf');
        //     };
        //   }
        
   
    }

    const tableRef = useRef(null);
    return (
        <div className="cpouter">
              {resportsdisplay === "block" && <div className='reportssection' style={{width: '100vw', height: 'auto', zIndex : 1060, backgroundColor : 'white',padding : 20,display : 'flex',flexDirection:'column',display : resportsdisplay}}>
                    <div className='upperreportsaction' style={{display: 'flex', justifyContent: 'space-between',padding: '0px 50px'}}>
                        <button onClick={() => {setreportsdiplay('none')}}>Close</button>
                        <button onClick={() => handlemiddleupload()}>Download</button>
                    </div>
                    <div className='innerreportssection' id="capture" style={{width: '70vw',marginLeft:'15vw'}}>
                        <div className='upper'>
                            <div className='left'>
                                <h4>{user?.tagline}</h4>
                                <h4>{user?.firstname} {user?.lastname}</h4>
                                <h4>Company: {user?.companyname}</h4>
                                <h4>ARN: {user?.arn}</h4>
                                <h4>Phone: {user?.mobile}</h4>
                                <h4>Email: {user?.email}</h4>
                                <h4>Corporate Office: {user?.address}</h4>
                                <h4>Website: {user?.website}</h4>
                                <h4>AMFI Registered Mutual Funds Distributor</h4>
                            </div>
                            <div className='right'>
                                 <img src={user?.logourl} />
                            </div>
                        </div>
                        <div className='bottom'>
                            <h4 style={{marginTop : 50}}>Fund Performance</h4>
                            <table id="fundstable" style={{minWidth: '100%'}}>
                                <thead>
                                    {
                                        allupperoptions.map(mk => {
                                            return (<th className='normal'>{mk}</th>)
                                        })
                                    }
                                </thead>
                                <tbody>
                                    {
                                        portfoliofundsindetails.map(mk => {
                                            return (
                                                <tr> 
                                                    {
                                                        allupperoptions.map(jh => {
                                                            return (jh == "Scheme Name" ? <th className="">{mk[jh]}</th> : <td>{mk[jh]}</td>)
                                                        })
                                                    }
                                                </tr>
                                            )
                                        })
                                    }
                                    <tr className="averagesrow"> 
                                        {
                                            allupperoptions.map(jh => {
                                                return (jh == 'Scheme Name' ? <th className="">Category Average</th> : <td>{allaverages.filter(mlk => mlk.key == jh).length > 0 && allaverages.filter(mlk => mlk.key == jh)[0].avg !== undefined ?  restricttotwodigits(allaverages.filter(mlk => mlk.key == jh)[0].avg) : "0"}</td>)
                                            })
                                        }
                                    </tr>
                                </tbody>
                            </table>

                            <h4 style={{marginTop : 50}}>Risk to Reward Analysis of Funds</h4>
                            <table id="fundstable" style={{minWidth: '100%'}}>
                                <thead>
                                    {
                                        allloweroptions.map(mk => {
                                            return (<th className='normal'>{mk}</th>)
                                        })
                                    }
                                </thead>
                                <tbody>
                                    {
                                        portfoliofundsindetails.map(mk => {
                                            return (
                                                <tr> 
                                                    {
                                                        allloweroptions.map(jh => {
                                                            return (jh == "Scheme Name" ? <th className="">{mk[jh]}</th> : <td>{mk[jh]}</td>)
                                                        })
                                                    }
                                                </tr>
                                            )
                                        })
                                    }
                                    <tr className="averagesrow"> 
                                        {
                                            allloweroptions.map(jh => {
                                                return (jh == 'Scheme Name' ? <th className="">Category Average</th> : <td>{allaverages.filter(mlk => mlk.key == jh).length > 0 && allaverages.filter(mlk => mlk.key == jh)[0].avg !== undefined ?  restricttotwodigits(allaverages.filter(mlk => mlk.key == jh)[0].avg) : "0"}</td>)
                                            })
                                        }
                                    </tr>
                                </tbody>
                            </table>
                            <table id="fundstable" style={{minWidth: '100%'}}>
                                <thead>
                                    {
                                        alllowestoptions.map(mk => {
                                            return (<th className='normal'>{mk}</th>)
                                        })
                                    }
                                </thead>
                                <tbody>
                                    {
                                        portfoliofundsindetails.map(mk => {
                                            return (
                                                <tr> 
                                                    {
                                                        alllowestoptions.map(jh => {
                                                            return (jh == "Scheme Name" ? <th className="">{mk[jh]}</th> : <td>{mk[jh]}</td>)
                                                        })
                                                    }
                                                </tr>
                                            )
                                        })
                                    }
                                    <tr className="averagesrow"> 
                                        {
                                            alllowestoptions.map(jh => {
                                                return (jh == 'Scheme Name' ? <th className="">Category Average</th> : <td>{allaverages.filter(mlk => mlk.key == jh).length > 0 && allaverages.filter(mlk => mlk.key == jh)[0].avg !== undefined ?  restricttotwodigits(allaverages.filter(mlk => mlk.key == jh)[0].avg) : "0"}</td>)
                                            })
                                        }
                                    </tr>
                                </tbody>
                            </table>

                            {/* <h4 style={{marginTop : 50}}>Rs.10,000 SIP per month in Funds are Now ….. After 1y,3y,5y,7y,10y</h4>
                            <table id="fundstable" style={{minWidth: '100%'}}>
                                <thead>
                                    {
                                        allreturnsoptions.map(mk => {
                                            return (<th className='normal'>{mk}Y</th>)
                                        })
                                    }
                                </thead>
                                <tbody>
                                    {
                                        portfoliofundsindetails.map(mk => {
                                            return (
                                                <tr> 
                                                    {
                                                        allreturnsoptions.map(jh => {
                                                            return (jh == "Scheme Name" ? <th className="">{mk[jh]}</th> : <td>{getcompondamount(10000,jh)}</td>)
                                                        })
                                                    }
                                                </tr>
                                            )
                                        })
                                    }
             
                                </tbody>
                            </table> */}

                            <h4 style={{marginTop: 30}}>Disclaimer:</h4>
                            <h4>This report has been prepared on the basis of data available with us and we have taken all precautions so that there are no errors and lapses. However, we do
                            not assume any liability for actions taken on the basis of this report. The user is advised to verify the contents of the report independently. Past performance may
                            or may not be sustained in future.</h4>
                            <h4>Mutual fund investments are subject to market risks, read all scheme related documents carefully.</h4>
                        </div>
                    </div>
                </div> }

          
                {resportsdisplay === "none" &&  <div className="compareview compareviewseperate">

            <div className="btnsrow">
                <button onClick={() => { setcompareviewvisible("none")}}>Close</button>
                <button onClick={downloadtable}>Download in Pdf</button>
                <button onClick={() => {setreportsdiplay('block')}}>View Report</button>

                {exceldownloaddata && <CSVLink data={exceldownloaddata} filename={"funds.csv"} className="cbtn">Download in Excel</CSVLink>}

         
            </div>
        
           { showdata === false ? setshowdata(true) : ""} 
            <h4>Showing {allportfoliofunds.length} Fund(s) selected by you</h4>
            <div id="table-scroll" class="table-scroll">
            <table id="fundstable" ref={tableRef}>
                <thead>
                    {
                        alldisplayingcoloumns.map(mk => {
                            return (<th className={mk === "Scheme Name" ? 'expanded' : 'normal'}>{mk}</th>)
                        })
                    }
                </thead>
                <tbody>
                    {
                        portfoliofundsindetails.map(mk => {
                            return (
                                <tr> 
                                    {
                                        alldisplayingcoloumns.map(jh => {
                                            return (jh == "Scheme Name" ? <th className="specialth">{mk[jh]}</th> : <td>{mk[jh]}</td>)
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                    <tr className="averagesrow"> 
                        {
                              alldisplayingcoloumns.map(jh => {
                                return (jh == 'Scheme Name' ? <th className="specialth">Category Average</th> : <td>{allaverages.filter(mlk => mlk.key == jh).length > 0 && allaverages.filter(mlk => mlk.key == jh)[0].avg !== undefined ?  restricttotwodigits(allaverages.filter(mlk => mlk.key == jh)[0].avg) : "0"}</td>)
                            })
                        }
                    </tr>
                </tbody>
            </table>
            </div>
        </div> }

        {resportsdisplay === "none" && <div className="viewsholder">
            <div className="view1">

                   

                {

                    
                    portfoliofundsindetails.map(ml => {
                        return (<div className={allportfoliofunds.length > 1 ?"eachthing" : "eachthing onething"}>
                        <h3>{ml['Scheme Name']}</h3>
                        <h4>AMC Name : {ml.amc_name ?? ""}</h4>
                                 <h4>AMC Code : {ml['AMC Code']}</h4>
                               <h4>AMC Code BSE: {ml.amc_code_bse}</h4>
                               <h4>Asset Category : {ml.asset_category}</h4>
                                 <h4>Asset Sub Category : {ml.asset_sub_category}</h4>
                                 <h4>Exit Load Period Remark : {ml.exit_load_period_remark}</h4>
                                 <h4>Exit Load Rate : {ml.exit_load_rate}</h4>
                                 <h4>Expense Ratio : {ml.expense_ratio}</h4>
                        
                                <h4>Performance : 1M: {ml["1M"] !== undefined ? ml["1M"] : "-"} , 3M: {ml["3M"] !== undefined ? ml["3M"] : "-"} , 6M: {ml["6M"] !== undefined ? ml["6M"] : "-"} , 9M: {ml["9M"] !== undefined ? ml["9M"] : "-"} , 1Y: {ml["1Y"] !== undefined ? ml["1Y"] : "-"} ,2Y: {ml["2Y"] !== undefined ? ml["2Y"] : "-"} ,3Y: {ml["3Y"] !== undefined ? ml["3Y"] : "-"} ,5Y: {ml["5Y"] !== undefined ? ml["5Y"] : "-"} ,7Y: {ml["7Y"] !== undefined ? ml["7Y"] : "-"} ,10Y: {ml["10Y"] !== undefined ? ml["10Y"] : "-"} </h4>
                                 <h4>Risk Profile : {ml.risk_profile}</h4>
                                 <h4>Risk Rating : {ml.risk_rating}</h4>
                                 <h4>RTA Name : {ml.rta_name}</h4>
                                 <h4>SIP Allowed : {ml.sip_allowed}</h4>
                                 <h4>SWP Allowed : {ml.swp_allowed}</h4>
                                 <h4>VR Rating : {ml.vr_rating}</h4>
                            </div>
                        )
                    })
                    
                    //  Array.from(new Set(allportfoliofunds)).map(ml => {
                       
                    //     return (<div className={allportfoliofunds.length > 1 ?"eachthing" : "eachthing onething"}>
                    //             <h3>{ml['Scheme Name']}</h3>
                    //             {/* <h4>AMC Name : {ml.value.amc_name ?? ""}</h4>
                    //             <h4>AMC Code : {ml.value.amc_code}</h4>
                    //             <h4>AMC Code BSE: {ml.value.amc_code_bse}</h4>
                    //             <h4>Asset Category : {ml.value.asset_category}</h4>
                    //             <h4>Asset Sub Category : {ml.value.asset_sub_category}</h4>
                    //             <h4>Exit Load Period Remark : {ml.value.exit_load_period_remark}</h4>
                    //             <h4>Exit Load Rate : {ml.value.exit_load_rate}</h4>
                    //             <h4>Expense Ratio : {ml.value.expense_ratio}</h4>
                    //             <h4>Fund Size : {ml.value.fund_size}</h4>
                    //             <h4>ISIN : {ml.value.isin}</h4>
                    //             <h4>Max SIP Gap : {ml.value.max_sip_gap}</h4>
                    //             <h4>Max SIP Installments : {ml.value.max_sip_installments}</h4>
                    //             <h4>Min Additional Investment : {ml.value.min_additional_investment}</h4>
                    //             <h4>Min Initial Investment : {ml.value.min_initial_investment}</h4>
                    //             <h4>Min SIP Amount : {ml.value.min_sip_amount}</h4>
                    //             <h4>Min SIP Gap : {ml.value.min_sip_gap}</h4>
                    //             <h4>Min SIP Installments : {ml.value.min_sip_installments}</h4>
                    //             <h4>Min Withdrawal Amount : {ml.value.min_withdrawal_amount}</h4>
                    //             <h4>Performance : 1M: {ml.value.performance["1M"] !== undefined ? ml.value.performance["1M"] : "-"} , 3M: {ml.value.performance["3M"] !== undefined ? ml.value.performance["3M"] : "-"} , 6M: {ml.value.performance["6M"] !== undefined ? ml.value.performance["6M"] : "-"} , 9M: {ml.value.performance["9M"] !== undefined ? ml.value.performance["9M"] : "-"} , 1Y: {ml.value.performance["1Y"] !== undefined ? ml.value.performance["1Y"] : "-"} ,2Y: {ml.value.performance["2Y"] !== undefined ? ml.value.performance["2Y"] : "-"} ,3Y: {ml.value.performance["3Y"] !== undefined ? ml.value.performance["3Y"] : "-"} ,5Y: {ml.value.performance["5Y"] !== undefined ? ml.value.performance["5Y"] : "-"} ,7Y: {ml.value.performance["7Y"] !== undefined ? ml.value.performance["7Y"] : "-"} ,10Y: {ml.value.performance["10Y"] !== undefined ? ml.value.performance["10Y"] : "-"} </h4>
                    //             <h4>Risk Profile : {ml.value.risk_profile}</h4>
                    //             <h4>Risk Rating : {ml.value.risk_rating}</h4>
                    //             <h4>RTA Name : {ml.value.rta_name}</h4>
                    //             <h4>SIP Allowed : {ml.value.sip_allowed}</h4>
                    //             <h4>SWP Allowed : {ml.value.swp_allowed}</h4>
                    //             <h4>VR Rating : {ml.value.vr_rating}</h4> */}
                    

                            
                    //         </div>
                    //     ) 
                    // })

                }
            </div>


            <div className="view1 view2">
                {

portfoliofundsindetails.map(ml => {
    return (<div className={portfoliofundsindetails.length > 1 ?"eachthing" : "eachthing onething"}>
    <h3>{ml['Scheme Name']}</h3>
        <h4>Avg Maturity : {ml["Av Mat"]}</h4>
        <h4>Avg Maturity Years : {ml['Age in Yrs']}</h4>
        <h4>Market Cap Large: {ml['Largecap %']} %</h4>
        <h4>Market Cap Mid : {ml['Midcap %']} %</h4>
        <h4>Market Cap Small : {ml['Smallcap %']} %</h4>
 
        <h4>PE Ratio : {ml['PE']}</h4>
        <h4>Yield to Maturity : {ml['Net YTM']}</h4>
        {/* <h4>Portfolio Turnover Ratio : {ml.value.portfolio_turnover_ratio}</h4> */}
       
        


    
    </div>
    )
})
                    
                    // Array.from(new Set(wholeanalyticaldata)).map(ml => {
                    //     return (<div className={wholeanalyticaldata.length > 1 ?"eachthing" : "eachthing onething"}>
                    //         <h3>{ml.fund}</h3>
                    //             <h4>Avg Maturity Days : {ml.value.average_maturity.avg_maturity_days}</h4>
                    //             <h4>Avg Maturity Months : {ml.value.average_maturity.avg_maturity_months}</h4>
                    //             <h4>Avg Maturity Years : {ml.value.average_maturity.avg_maturity_years}</h4>
                    //             <h4>Market Cap Large: {ml.value.market_cap.market_cap_large}</h4>
                    //             <h4>Market Cap Mid : {ml.value.market_cap.market_cap_mid}</h4>
                    //             <h4>Market Cap Others : {ml.value.market_cap.market_cap_others}</h4>
                    //             <h4>Market Cap Small : {ml.value.market_cap.market_cap_small}</h4>
                    //             <h4>Modified Maturity Days : {ml.value.modified_duration.modified_maturity_days}</h4>
                    //             <h4>Modified Maturity Months : {ml.value.modified_duration.modified_maturity_months}</h4>
                    //             <h4>Modified Maturity Years : {ml.value.modified_duration.modified_maturity_years}</h4>
                    //             <h4>PE Ratio : {ml.value.pe_ratio}</h4>
                    //             <h4>Yiekd to Maturity : {ml.value.yield_to_maturity}</h4>
                    //             <h4>Portfolio Turnover Ratio : {ml.value.portfolio_turnover_ratio}</h4>
                               
                                
                    

                            
                    //         </div>
                    //     )
                    // })

                }
            </div>



            <div className="view1 view2">
                {



portfoliofundsindetails.map(ml => {
    return (<div className={portfoliofundsindetails.length > 1 ?"eachthing" : "eachthing onething"}>
    <h3>{ml['Scheme Name']}</h3>
        <h4><span>Annual Returns</span></h4>
        
           
            
        
            <h4>2015 : {ml["2015"]}</h4>
            <h4>2016 : {ml["2016"]}</h4>
            <h4>2017 : {ml["2017"]}</h4>
            <h4>2018 : {ml["2018"]}</h4>
            <h4>2019 : {ml["2019"]}</h4>
            <h4>2020 : {ml["2020"]}</h4>
            {/* <h4>2021 : {ml["2021"]}</h4> */}
        
            <h4>Scheme Name Unique {ml.scheme_name_unique}</h4>
            <h4>ISIN {ml.isin}</h4>
            <h4>Asset Sub Category {ml.asset_sub_category}</h4>
            <h4>Plan Name {ml.plan_name}</h4>
            <h4>Option Name {ml.option_name}</h4>
            <h4>Risk Rating {ml.risk_rating}</h4>
            <h4>Rta Name {ml.rta_name}</h4>
            <h4>AMC Code BSE {ml.amc_code_bse}</h4>
            <h4>VR Rating {ml.vr_rating}</h4>
            <h4>AMC Scheme Code BSE {ml.amc_scheme_code_bse}</h4>
            <h4>RTA Scheme Code BSE {ml.rta_scheme_code_bse}</h4>
            <h4>Scheme Description {ml.scheme_description}</h4>
            <h4>Scheme Description BSE {ml.scheme_description_bse}</h4>
            <h4>Investment Option : {ml['investment_option']}</h4>
            <h4>Nature : {ml['nature' ]}</h4> 
            <h4>Purchase Allowed : {ml['purchase_allowed']}</h4> 
            <h4>Purchase Transaction Mode : {ml['purchase_transaction_mode']}</h4> 
            <h4>Min Initial Investment : {ml['min_initial_investment']}</h4>  
            <h4>Initial Investment Multiples : {ml['initial_investment_multiples']}</h4>  
            <h4>Min Additional Investment : {ml['min_additional_investment']}</h4>  
            <h4>Additional Investment Multiples : {ml['additional_investment_multiples']}</h4> 
            <h4>Min Withdrawal Amount : {ml['min_withdrawal_amount']}</h4> 
            <h4>SIP Allowed : {ml['sip_allowed']}</h4> 
            <h4>SIP Frequency : {ml['sip_frequency']}</h4> 
            <h4>SIP Date : {ml['sip_date']}</h4> 
            <h4>Min SIP Amount : {ml['min_sip_amount']}</h4> 
            <h4>Min SIP Installments : {ml['min_sip_installments' ]}</h4> 
            <h4>Max SIP Installments : {ml['max_sip_installments']}</h4> 
            <h4>SIP Multipls : {ml['sip_multiples']}</h4> 
            <h4>Min SIP Gap : {ml['min_sip_gap']}</h4>
            <h4>Max SIP Gap : {ml['max_sip_gap']}</h4>
            <h4>SIP Installment Gap : {ml['sip_installment_gap']}</h4>
            <h4>SIP Status : {ml['sip_status']}</h4>
            <h4>Switch Allowed : {ml['switch_allowed']}</h4>
            <h4>Switch Min Amt : {ml['switch_min_amt']}</h4>
            <h4>Switch Multiples : {ml['switch_multiples']}</h4>
            <h4>Switch Additional Amt : {ml['switch_additional_amt']}</h4>
            <h4>STP Allowed : {ml['stp_allowed']}</h4>
            <h4>STP Frequency : {ml['stp_frequency']}</h4>
            <h4>STP Dates : {ml['stp_dates']}</h4>
            <h4>STP Min Amount : {ml['stp_min_amount']}</h4>
            <h4>SWP Allowed : {ml['swp_allowed']}</h4>
            <h4>SWP Min amount : {ml['swp_min_amount']}</h4>
            <h4>Lockin period : {ml['lock_in_period']}</h4>
            <h4>Risk Profile : {ml['risk_profile']}</h4>
            <h4>Exit Load Period Remark : {ml['exit_load_period_remark']}</h4>
            <h4>Exit Load Rate : {ml['exit_load_rate']}</h4>
            <h4>Fund Size : {ml['fund_size']}</h4>

        {/* <h4>Objective : {ml.value.data.metadata.objective}</h4>
        <h4>Risk Profile : {ml.value.data.metadata.risk_profile}</h4> </div>) : "" } */}

       
        


    
    </div>
    )
})

                    
                    // Array.from(new Set(wholefundcarddata)).map(ml => {
                        
                    //     return (<div className={wholefundcarddata.length > 1 ?"eachthing" : "eachthing onething"}>
                    //         <h3>{ml.fund}</h3>
                    //             <h4><span>Annual Returns</span></h4>
                    //             {
                    //                 ml !== undefined && ml.value !== undefined && ml.value.data !== undefined? (
                    //                 <div>
                    //             {
                    //                 ml.value.data.annual_returns["2015"] !== undefined ? (<h4>2015 : H1 {ml.value.data.annual_returns["2015"]["H1"] !== undefined ? ml.value.data.annual_returns["2015"]["H1"] : "-"} , H2 {ml.value.data.annual_returns["2015"]["H2"] !== undefined ? ml.value.data.annual_returns["2015"]["H2"] : "-"},Q1 {ml.value.data.annual_returns["2015"]["Q1"] !== undefined ? ml.value.data.annual_returns["2015"]["Q1"] : "-"},Q2 {ml.value.data.annual_returns["2015"]["Q2"] !== undefined ? ml.value.data.annual_returns["2015"]["Q2"] : "-"},Q3 {ml.value.data.annual_returns["2015"]["Q3"] !== undefined ? ml.value.data.annual_returns["2015"]["Q3"] : "-"} ,Q4 {ml.value.data.annual_returns["2015"]["Q4"] !== undefined ? ml.value.data.annual_returns["2015"]["Q4"] : "-"},Annual {ml.value.data.annual_returns["2015"]["annual"] !== undefined ? ml.value.data.annual_returns["2015"]["annual"] : "-"}  </h4>) : ""
                    //             }

                    //             {
                    //                 ml.value.data.annual_returns["2016"] !== undefined ? (<h4>2016 : H1 {ml.value.data.annual_returns["2016"]["H1"] !== undefined ? ml.value.data.annual_returns["2016"]["H1"] : "-"} , H2 {ml.value.data.annual_returns["2016"]["H2"] !== undefined ? ml.value.data.annual_returns["2016"]["H2"] : "-"},Q1 {ml.value.data.annual_returns["2016"]["Q1"] !== undefined ? ml.value.data.annual_returns["2016"]["Q1"] : "-"},Q2 {ml.value.data.annual_returns["2016"]["Q2"] !== undefined ? ml.value.data.annual_returns["2016"]["Q2"] : "-"},Q3 {ml.value.data.annual_returns["2016"]["Q3"] !== undefined ? ml.value.data.annual_returns["2016"]["Q3"] : "-"} ,Q4 {ml.value.data.annual_returns["2016"]["Q4"] !== undefined ? ml.value.data.annual_returns["2016"]["Q4"] : "-"},Annual {ml.value.data.annual_returns["2016"]["annual"] !== undefined ? ml.value.data.annual_returns["2016"]["annual"] : "-"}  </h4>
                    //                 ) : ""
                    //             }

                    //             {
                    //                 ml.value.data.annual_returns["2017"] !== undefined ? (<h4>2017 : H1 {ml.value.data.annual_returns["2017"]["H1"] !== undefined ? ml.value.data.annual_returns["2017"]["H1"] : "-"} , H2 {ml.value.data.annual_returns["2017"]["H2"] !== undefined ? ml.value.data.annual_returns["2017"]["H2"] : "-"},Q1 {ml.value.data.annual_returns["2017"]["Q1"] !== undefined ? ml.value.data.annual_returns["2017"]["Q1"] : "-"},Q2 {ml.value.data.annual_returns["2017"]["Q2"] !== undefined ? ml.value.data.annual_returns["2017"]["Q2"] : "-"},Q3 {ml.value.data.annual_returns["2017"]["Q3"] !== undefined ? ml.value.data.annual_returns["2017"]["Q3"] : "-"} ,Q4 {ml.value.data.annual_returns["2017"]["Q4"] !== undefined ? ml.value.data.annual_returns["2017"]["Q4"] : "-"},Annual {ml.value.data.annual_returns["2017"]["annual"] !== undefined ? ml.value.data.annual_returns["2017"]["annual"] : "-"}  </h4>
                    //                 ): ""
                    //             }

                    //             {
                    //                 ml.value.data.annual_returns["2018"] !== undefined ? (<h4>2018 : H1 {ml.value.data.annual_returns["2018"]["H1"] !== undefined ? ml.value.data.annual_returns["2018"]["H1"] : "-"} , H2 {ml.value.data.annual_returns["2018"]["H2"] !== undefined ? ml.value.data.annual_returns["2018"]["H2"] : "-"},Q1 {ml.value.data.annual_returns["2018"]["Q1"] !== undefined ? ml.value.data.annual_returns["2018"]["Q1"] : "-"},Q2 {ml.value.data.annual_returns["2018"]["Q2"] !== undefined ? ml.value.data.annual_returns["2018"]["Q2"] : "-"},Q3 {ml.value.data.annual_returns["2018"]["Q3"] !== undefined ? ml.value.data.annual_returns["2018"]["Q3"] : "-"} ,Q4 {ml.value.data.annual_returns["2018"]["Q4"] !== undefined ? ml.value.data.annual_returns["2018"]["Q4"] : "-"},Annual {ml.value.data.annual_returns["2018"]["annual"] !== undefined ? ml.value.data.annual_returns["2018"]["annual"] : "-"}  </h4>
                    //                 ): ""
                    //             }

                    //             {
                    //                 ml.value.data.annual_returns["2019"] !== undefined ? (<h4>2019 : H1 {ml.value.data.annual_returns["2019"]["H1"] !== undefined ? ml.value.data.annual_returns["2019"]["H1"] : "-"} , H2 {ml.value.data.annual_returns["2019"]["H2"] !== undefined ? ml.value.data.annual_returns["2019"]["H2"] : "-"},Q1 {ml.value.data.annual_returns["2019"]["Q1"] !== undefined ? ml.value.data.annual_returns["2019"]["Q1"] : "-"},Q2 {ml.value.data.annual_returns["2019"]["Q2"] !== undefined ? ml.value.data.annual_returns["2019"]["Q2"] : "-"},Q3 {ml.value.data.annual_returns["2019"]["Q3"] !== undefined ? ml.value.data.annual_returns["2019"]["Q3"] : "-"} ,Q4 {ml.value.data.annual_returns["2019"]["Q4"] !== undefined ? ml.value.data.annual_returns["2019"]["Q4"] : "-"},Annual {ml.value.data.annual_returns["2019"]["annual"] !== undefined ? ml.value.data.annual_returns["2019"]["annual"] : "-"}  </h4>
                    //                 ): ""
                    //             }

                    //             {
                    //                 ml.value.data.annual_returns["2020"] !== undefined ? (<h4>2020 : H1 {ml.value.data.annual_returns["2020"]["H1"] !== undefined ? ml.value.data.annual_returns["2020"]["H1"] : "-"} , H2 {ml.value.data.annual_returns["2020"]["H2"] !== undefined ? ml.value.data.annual_returns["2020"]["H2"] : "-"},Q1 {ml.value.data.annual_returns["2020"]["Q1"] !== undefined ? ml.value.data.annual_returns["2020"]["Q1"] : "-"},Q2 {ml.value.data.annual_returns["2020"]["Q2"] !== undefined ? ml.value.data.annual_returns["2020"]["Q2"] : "-"},Q3 {ml.value.data.annual_returns["2020"]["Q3"] !== undefined ? ml.value.data.annual_returns["2020"]["Q3"] : "-"} ,Q4 {ml.value.data.annual_returns["2020"]["Q4"] !== undefined ? ml.value.data.annual_returns["2020"]["Q4"] : "-"},Annual {ml.value.data.annual_returns["2020"]["annual"] !== undefined ? ml.value.data.annual_returns["2020"]["annual"] : "-"}  </h4>
                    //                 ): ""
                    //             }

                    //             {
                    //                 ml.value.data.annual_returns["2021"] !== undefined ? (<h4>2021 : H1 {ml.value.data.annual_returns["2021"]["H1"] !== undefined ? ml.value.data.annual_returns["2021"]["H1"] : "-"} , Q1 {ml.value.data.annual_returns["2021"]["Q1"] !== undefined ? ml.value.data.annual_returns["2021"]["Q1"] : "-"},Q2 {ml.value.data.annual_returns["2021"]["Q2"] !== undefined ? ml.value.data.annual_returns["2021"]["Q2"] : "-"},Annual {ml.value.data.annual_returns["2021"]["annual"] !== undefined ? ml.value.data.annual_returns["2021"]["annual"] : "-"}  </h4>
                    //                 ): ""
                    //             }


                    //             <h4><span>BM Trailing</span></h4>
                    //             <h4>1M : {ml.value.data.bm_trailing.length > 0 && ml.value.data.bm_trailing[0]["1M"] !== undefined ? ml.value.data.bm_trailing[0]["1M"] : ""} , 3M : {ml.value.data.bm_trailing.length > 1 && ml.value.data.bm_trailing[1]["3M"] !== undefined ? ml.value.data.bm_trailing[1]["3M"] : ""} , 6M : {ml.value.data.bm_trailing.length > 2 && ml.value.data.bm_trailing[2]["6M"] !== undefined ? ml.value.data.bm_trailing[2]["6M"] : ""} ,1Y : {ml.value.data.bm_trailing.length > 3 && ml.value.data.bm_trailing[3]["1Y"] !== undefined ? ml.value.data.bm_trailing[3]["1Y"] : ""} ,3Y : {ml.value.data.bm_trailing.length > 4 && ml.value.data.bm_trailing[4]["3Y"] !== undefined ? ml.value.data.bm_trailing[4]["3Y"] : ""} , 5Y : {ml.value.data.bm_trailing.length > 5 && ml.value.data.bm_trailing[5]["5Y"] !== undefined ? ml.value.data.bm_trailing[5]["5Y"] : ""} , 7Y : {ml.value.data.bm_trailing.length > 6 && ml.value.data.bm_trailing[6]["7Y"] !== undefined ? ml.value.data.bm_trailing[6]["7Y"] : ""}</h4>


                    //             <h4><span>MF Trailing</span></h4>
                    //             <h4>1M : {ml.value.data.mf_trailing.length > 0 && ml.value.data.mf_trailing[0]["1M"] !== undefined ? ml.value.data.mf_trailing[0]["1M"] : ""} , 3M : {ml.value.data.mf_trailing.length > 1 && ml.value.data.mf_trailing[1]["3M"] !== undefined ? ml.value.data.mf_trailing[1]["3M"] : ""} , 6M : {ml.value.data.mf_trailing.length > 2 && ml.value.data.mf_trailing[2]["6M"] !== undefined ? ml.value.data.mf_trailing[2]["6M"] : ""} ,1Y : {ml.value.data.mf_trailing.length > 3 && ml.value.data.mf_trailing[3]["1Y"] !== undefined ? ml.value.data.mf_trailing[3]["1Y"] : ""} ,3Y : {ml.value.data.mf_trailing.length > 4 && ml.value.data.mf_trailing[4]["3Y"] !== undefined ? ml.value.data.mf_trailing[4]["3Y"] : ""} , 5Y : {ml.value.data.mf_trailing.length > 5 && ml.value.data.mf_trailing[5]["5Y"] !== undefined ? ml.value.data.mf_trailing[5]["5Y"] : ""} , 7Y : {ml.value.data.mf_trailing.length > 6 && ml.value.data.mf_trailing[6]["7Y"] !== undefined ? ml.value.data.mf_trailing[6]["7Y"] : ""}</h4>

                    //             <h4>Address Line 1 : {ml.value.data.general_info.address_line_1}</h4>
                    //             <h4>Address Line 2 : {ml.value.data.general_info.address_line_2}</h4>
                    //             <h4>City: {ml.value.data.general_info.city}</h4>
                    //             <h4>Email : {ml.value.data.general_info.email}</h4>
                    //             <h4>R and T : {ml.value.data.general_info.r_and_t}</h4>
                    //             <h4>Scheme Docs : <a href={ml.value.data.general_info.scheme_docs}>{ml.value.data.general_info.scheme_docs}</a> </h4>
                    //             <h4>Website : {ml.value.data.general_info.website}</h4>
                    //             <h4>Objective : {ml.value.data.metadata.objective}</h4>
                    //             <h4>Risk Profile : {ml.value.data.metadata.risk_profile}</h4> </div>) : "" }

                               
                                
                    

                            
                    //         </div>
                    //     )
                    // })

                }
            </div>

            </div> }
        </div>
    )
}

export default Comparision
