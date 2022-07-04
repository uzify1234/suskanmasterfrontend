import logo from './logo.svg';
import './NominatedFunds.css';
import React , {useState,useEffect}from 'react'
import { ExportCSV } from './Exportcsv';
import Logo from '../Assets/Images/vgnewlogo.png';
import db from '../Helpers/Firebase2';
import { auth } from '../Helpers/Firebase';
import { useNavigate, useParams } from "react-router-dom";
import Header from '../Helpers/Header';



function NominatedFunds() {
  const navigate = useNavigate();

  const [category, setcategory] = useState("Debt");
  const [subcategory, setsubcategory] = useState("None");

  const [allavailablecategories, setallavailablecategories] = useState(["Debt","Equity"]);

  const [allfunds, setallfunds] = useState([]);
  const [usefulldata, setusefulldata] = useState([]);

  const [dataupdatedon, setdataupdatedon] = useState("");

  const [selectedyear, setselectedyear] = useState("1");

  const [allavailablesubcategoriesdebt, setallavailablesubcategoriesdebt] = useState([
    {key :  "10 Y Gilt" , value : 2000},
    {key : "Banking & PSU Fund",value : 2000},
    {key : "Corporate Bond Fund",value : 2000},
    {key : "Credit Risk Fund",value : 2000},
    {key : "Dynamic Bond",value : 2000},
    {key : "ETF",value : 2000},
    {key : "Floater Fund",value : 2000},
    {key : "Gilt Fund",value : 2000},
    {key : "Liquid",value : 2000},
    {key : "Long Duration Fund",value : 2000},
    {key : "Low Duration Fund",value : 2000},
    {key : "Medium Duration Fund",value : 2000},
    {key : "Medium to Long Duration Fund",value : 2000},
    {key : "Money Market Fund",value : 2000},
    {key : "Overnight Fund",value : 2000},
    {key : "Short Duration Fund",value : 2000},
    {key : "Solution Oriented - Retirement",value : 2000},
    {key : "Ultra Short Duration Fund",value : 2000},
  ])

  const [allavailablesubcategoriesequity, setallavailablesubcategoriesequity] = useState([
     {key :  "Flexi - Cap" , value : 1000},
    {key : "Focused",value : 1000},
    {key : "Index",value : 300},
    {key : "Large & Mid Cap",value : 1000},
    {key : "Large Cap",value : 1000},
    {key : "Mid Cap",value : 1000},
    {key : "Multi - Cap",value : 500},
    {key : "Sector Specific - Banks & Financial Services",value : 700},
    {key : "Sector Specific - Pharma",value : 500},
    {key : "Sector Specific - Technology",value : 500},
    {key : "Small Cap",value : 500},
    {key : "Solution Oriented - Retirement",value : 500},
    {key : "Tax Savings",value : 1000},
    {key : "Value Fund",value : 1000}
  ])
  const [allavailablesubcategorieshybrid, setallavailablesubcategorieshybrid] = useState([

  ])

const checkandpass = (data) => {
  if(data == undefined || data == '' || data == 'NA' || data == NaN) { 
    return 0;
  }
  else {
    return data;
  }
}

useEffect(() => {
  auth.onAuthStateChanged((user) => {
      if (user) {
      } else {
          navigate('/');
      }
    });
}, [])

useEffect(() => {
  db.collection('lastupdated').doc('lastupdated').get().then(updated => {
    var dt = updated.data().value;
    var mg = dt.split("GMT")[0];
    setdataupdatedon(mg);
  })
  db.collection('allfundsdata').get().then(wholefunds => {
    var tmp = [];
    var contain = [];
    wholefunds.docs.map(each => {
      
      var x = {
        id : each.id , 
        sharpe : each.data()['Sharpe 1Y'] ?? 0,
        sharpe3 : each.data()['Sharpe 3Y'] ?? 0,
        sharpe5 : each.data()['Sharpe 5Y'] ?? 0,
        sharpe7 : each.data()['Sharpe 7Y'] ?? 0,
        sortino : each.data()['Sortino 1Y'] ?? 0,
        sortino3 : each.data()['Sortino 3Y'] ?? 0,
        sortino5 : each.data()['Sortino 5Y'] ?? 0,
        sortino7 : each.data()['Sortino 7Y'] ?? 0,
        stdev : each.data()['St Dev 1Y'] ?? 0,
        stdev3 : each.data()['St Dev 3Y'] ?? 0,
        stdev5 : each.data()['St Dev 5Y'] ?? 0,
        stdev7 : each.data()['St Dev 7Y'] ?? 0,
        trey : each.data()['Treynor Ratio 1Y'] ?? 0,
        trey3 : each.data()['Treynor Ratio 3Y'] ?? 0,
        trey5 : each.data()['Treynor Ratio 5Y'] ?? 0,
        trey7 : each.data()['Treynor Ratio 7Y'] ?? 0,
        jensen : each.data()['Jensens Alpha 1Y'] ?? 0,
        jensen3 : each.data()['Jensens Alpha 3Y'] ?? 0,
        jensen5 : each.data()['Jensens Alpha 5Y'] ?? 0,
        jensen7 : each.data()['Jensens Alpha 7Y'] ?? 0,
        beta : each.data()['Beta 1Y'] ?? 0,
        beta3 : each.data()['Beta 3Y'] ?? 0,
        beta5 : each.data()['Beta 5Y'] ?? 0,
        beta7 : each.data()['Beta 7Y'] ?? 0,
        informationratio : each.data()['Information Ratio 1Y'] ?? 0,
        informationratio3 : each.data()['Information Ratio 3Y'] ?? 0,
        informationratio5 : each.data()['Information Ratio 5Y'] ?? 0,
        informationratio7 : each.data()['Information Ratio 7Y'] ?? 0,
        aaasov : (each.data().AAA ?? 0 + each.data().Sov ?? 0) , 
        sov : each.data().Sov ?? 0,
        points : 0,
        name : each.data()['Scheme Name'],
        aum : each.data()['AUM Cr'] ?? 0, 
        category : each.data()['asset_category'],
        subcategory : each.data()['asset_sub_category'] ,
        ytm :each.data()['Net YTM'] ?? 0,
        m1 : checkandpass(each.data()['1M']),
        m3 : checkandpass(each.data()['3M']),
        m6 : checkandpass(each.data()['6M']),
        y1 : checkandpass(each.data()['1Y']),
        y3 : checkandpass(each.data()['3Y']),
        y5 : checkandpass(each.data()['5Y']),
        y7 : checkandpass(each.data()['7Y']),
        y10 : each.data()['10Y'] ?? 0,
        ter : each.data()['TER'] ?? 0,
        pe : each.data()['PE'] ?? 0,
        pb : each.data()['PB'] ?? 0,
        divyield : each.data()['10Y'] ?? 0,
        largecap : each.data()['Largecap %'] ?? 0,
        midcap : each.data()['Midcap %'] ?? 0,
        smallcap : each.data()['Smallcap %'] ?? 0,
        a : each.data()['A'] ?? 0,
        aa : each.data()['AA'] ?? 0,
        aaa : each.data()['AAA'] ?? 0,
        duration : each.data()['Dur'] ?? 0,
        avgmaturity : each.data()['Av Mat'] ?? 0
     };
      tmp.push(x);

      if(each.data()['asset_category'] == "Hybrid") {
        var fg = allavailablesubcategorieshybrid.filter(kl => kl.key == each.data()['asset_sub_category']);
        if(fg.length == 0) {
          
          contain.push({key : each.data()['asset_sub_category'] , value : 2000 })
        }
      }


  

    });
    setallavailablesubcategorieshybrid(contain);
    setallfunds(tmp);
    console.log(contain);
    getFunds(category,subcategory);
  })
  
}, [])

  const getFunds = (category,subcategory) => {
    console.log(category);
    console.log(subcategory);

    var cat1 = allfunds.filter(ek => (ek.category == category || (category == 'Debt' && ek.category == 'Fixed Income')) && ek.subcategory == subcategory);
    console.log(cat1);

      
      if(category == 'Debt' || category == 'Fixed Income' ) {
        var fd = allavailablesubcategoriesdebt.filter(ek => ek.key == subcategory);
        if(fd.length > 0) {
          var aum = fd[0].value;
          console.log("Aum Required is "+aum);
          var gh = cat1.filter(eachtmp => eachtmp.aum >= aum);
          console.log(gh);
          var s7 = gh.sort((a, b) => a.ytm < b.ytm ? 1 : -1);
          if(s7.length > 0) { s7[0].points += 1};
          if(s7.length > 1) { s7[1].points += 1};
          if(s7.length > 2) { s7[2].points += 1};

          var s8 = gh.sort((a, b) => a.aaasov < b.aaasov ? 1 : -1);
          if(s8.length > 0) { s8[0].points += 1};
          if(s8.length > 0) { s8[1].points += 1};
          if(s8.length > 0) { s8[2].points += 1};

          var final= gh.sort((a, b) => a.points < b.points ? 1 : -1);
          console.log("Final");
          console.log(final);
          setusefulldata(final);
        }
        else {
          setusefulldata([]);
        }
      } 
      if(category == 'Equity') {
        var fd = allavailablesubcategoriesequity.filter(ek => ek.key == subcategory);
        if(fd.length > 0) {
          var aum = fd[0].value;
          // console.log("Aum Required is "+aum);
          var gh = cat1.filter(eachtmp => eachtmp.aum >= aum);
          var s1 = gh.sort((a, b) => a.sharpe < b.sharpe ? 1 : -1); // Descending
          if(s1.length > 0) {s1[0].points += 1};
          if(s1.length > 0) {s1[1].points += 1};
          if(s1.length > 0) {s1[2].points += 1};

          // console.log("After Sharpe filters");
          // s1.forEach((fund) => {
          //   console.log(fund);
          // })

          var s2 = gh.sort((a, b) => a.sortino < b.sortino ? 1 : -1);
          if(s2.length > 0) {s2[0].points += 1};
          if(s2.length > 0) {s2[1].points += 1};
          if(s2.length > 0) {s2[2].points += 1};

          // console.log("After Sortino");
          // s2.forEach((fund) => {
          //   console.log(fund);
          // })
          // console.log(s2.sort((a, b) => a.points < b.points ? 1 : -1));

          var s3 = gh.sort((a, b) => a.stdev > b.stdev ? 1 : -1);
          if(s3.length > 0) {s3[0].points += 1};
          if(s3.length > 0) {s3[1].points += 1};
          if(s3.length > 0) {s3[2].points += 1};

          // console.log("After stdev");
          // s3.forEach((fund) => {
          //   console.log(fund);
          // })

          var s4= gh.sort((a, b) => a.trey < b.trey ? 1 : -1);
          if(s4.length > 0) {s4[0].points += 1};
          if(s4.length > 0) {s4[1].points += 1};
          if(s4.length > 0) {s4[2].points += 1};

          // console.log("After trey");
          // console.log(s4.sort((a, b) => a.points < b.points ? 1 : -1));

          var s5= gh.sort((a, b) => a.jensen < b.jensen ? 1 : -1);
          if(s5.length > 0) {s5[0].points += 1};
          if(s5.length > 0) {s5[1].points += 1};
          if(s5.length > 0) {s5[2].points += 1};

          // console.log("After jensen");
          // console.log(s5.sort((a, b) => a.points < b.points ? 1 : -1));

          var s6= gh.sort((a, b) => a.informationratio < b.informationratio ? 1 : -1);
          if(s6.length > 0) {s6[0].points += 1};
          if(s6.length > 0) {s6[1].points += 1};
          if(s6.length > 0) {s6[2].points += 1};

          // console.log("After informationratio");
          // console.log(s6.sort((a, b) => a.points < b.points ? 1 : -1));

          var final= gh.sort((a, b) => a.points < b.points ? 1 : -1);
          // console.log("Final");
          // console.log(final);

          var removedfinal = final.filter(ekfund => !ekfund.name.toLowerCase().includes("franklin"));
          removedfinal.forEach((fund,index) => {
            if(fund.name.toLowerCase().includes("icici")) {
              if(index > 3) {
                var copy = removedfinal[3];
                removedfinal[3] = fund;
                removedfinal[index] = copy;
              }
            }
          })       
          setusefulldata(removedfinal);
        }
        else {
          setusefulldata([]);
        }
      } 
      if(category == 'Hybrid') {
        var fd = allavailablesubcategorieshybrid.filter(ek => ek.key == subcategory);
        if(fd.length > 0) {
          var aum = fd[0].value;
          console.log("Aum Required is "+aum);
          var gh = cat1.filter(eachtmp => eachtmp.aum >= aum);
          
          var s1 = gh.sort((a, b) => a.sharpe > b.sharpe ? 1 : -1);
          if(s1.length > 0) {s1[0].points += 1};
          if(s1.length > 0) {s1[1].points += 1};
          if(s1.length > 0) {s1[2].points += 1};

          var s2 = gh.sort((a, b) => a.sortino > b.sortino ? 1 : -1);
          if(s2.length > 0) {s2[0].points += 1};
          if(s2.length > 0) {s2[1].points += 1};
          if(s2.length > 0) {s2[2].points += 1};

          var s3 = gh.sort((a, b) => a.stdev < b.stdev ? 1 : -1);
          if(s3.length > 0) {s3[0].points += 1};
          if(s3.length > 0) {s3[1].points += 1};
          if(s3.length > 0) {s3[2].points += 1};

          var s4= gh.sort((a, b) => a.trey > b.trey ? 1 : -1);
          if(s4.length > 0) {s4[0].points += 1};
          if(s4.length > 0) {s4[1].points += 1};
          if(s4.length > 0) {s4[2].points += 1};

          var s5= gh.sort((a, b) => a.jensen > b.jensen ? 1 : -1);
          if(s5.length > 0) {s5[0].points += 1};
          if(s5.length > 0) {s5[1].points += 1};
          if(s5.length > 0) {s5[2].points += 1};

          var s6= gh.sort((a, b) => a.informationratio > b.informationratio ? 1 : -1);
          if(s6.length > 0) {s6[0].points += 1};
          if(s6.length > 0) {s6[1].points += 1};
          if(s6.length > 0) {s6[2].points += 1};

          if(s7.length > 0) { s7[0].points += 1};
          if(s7.length > 1) { s7[1].points += 1};
          if(s7.length > 2) { s7[2].points += 1};

          var s8 = gh.sort((a, b) => a.aaasov < b.aaasov ? 1 : -1);
          if(s8.length > 0) { s8[0].points += 1};
          if(s8.length > 0) { s8[1].points += 1};
          if(s8.length > 0) { s8[2].points += 1};

          var final= gh.sort((a, b) => a.points < b.points ? 1 : -1);
          console.log("Final");
          console.log(final);

          setusefulldata(gh);
        }
        else {
          setusefulldata([]);
        }
      } 
   
  }

  const handlecat = (e) => {
    setcategory(e.target.value);
    setsubcategory("None");
    getFunds(e.target.value,'None');
    // if(e.target.value == 'Debt' || e.target.value == 'Fixed Income'){
    //     setsubcategory(allavailablesubcategoriesdebt[0].key);
    //     getFunds(e.target.value,allavailablesubcategoriesdebt[0].key);
    //   }else if(e.target.value == 'Equity'){
    //       setsubcategory(allavailablesubcategoriesequity[0].key);
    //       getFunds(e.target.value,allavailablesubcategoriesequity[0].key);

    //   }else if(e.target.value == 'Hybrid'){
    //     setsubcategory(allavailablesubcategorieshybrid[0].key);
    //     getFunds(e.target.value,allavailablesubcategorieshybrid[0].key);

    //   } 
  }

  const downloaddata = () => {
    if(usefulldata.length > 0) {

    }
  }

  const handlesubcat = (e) => {
    console.log("turn "+e.target.value);
    setsubcategory(e.target.value);
    getFunds(category,e.target.value);
  }
  return (
    <div className="nominatedfunds">
      <Header />
      <div className="liner">
        <h3>Pick Category and Sub Category to get Fundamentally Priority Selection Funds</h3>
        <h3>Data updated on : {dataupdatedon}</h3>
        {usefulldata.length > 0 && <ExportCSV csvData={usefulldata} fileName="funds.csv"/>}
      </div>
      <div className="layer">
          <div className='selectregion'>
            <h3>Select Category</h3>
          <select onChange={e => {handlecat(e)}}>
            {
              allavailablecategories.map(each => {
                return (<option>{each}</option>)
              })
            }
          </select>
          </div>

          <div className='selectregion'>
            <h3>Select Sub Category</h3>
          <select onChange={e => handlesubcat(e)}>
            <option>None</option>
            {
              (category == 'Debt' || category == 'Fixed Income') && allavailablesubcategoriesdebt.map(each => {
                return (<option>{each.key}</option>)
              })
            }
               {
              category == 'Equity' && allavailablesubcategoriesequity.map(each => {
                return (<option>{each.key}</option>)
              })
            }
               {
              category == 'Hybrid' && allavailablesubcategorieshybrid.map(each => {
                return (<option>{each.key}</option>)
              })
            }
          </select>
          </div>

            <div className="selectregion">
              {/* <button onClick={downloaddata}>Download Data</button> */}
{/* 
              <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="fundstable"
                    filename="funds"
                    sheet="funds"
                    buttonText="Download in Excel"/> */}
            </div>
  
      </div>

      {/* <div className="result">

            {usefulldata.length == 0 && <div className="eachresult">
                <h3>No Data Found</h3>
            </div>}

            {usefulldata.length > 0 && <div className="eachresult">
                <span>1</span>
                <h3>{usefulldata[0].name}</h3>
            </div>}

            {usefulldata.length > 1 && <div className="eachresult">
                <span>2</span>
                <h3>{usefulldata[1].name}</h3>
            </div>}

            {usefulldata.length > 2 && <div className="eachresult">
                <span>3</span>
                <h3>{usefulldata[2].name}</h3>
            </div>}


    

          </div> */}
          <div className="results">
          {usefulldata.length > 0 && <h4>Fund Performance</h4>}
              {usefulldata.length > 0 && <table>
                  <thead>
                      <tr>
                          <th>Fund Name</th>
                          <th>1M</th>
                          <th>3M</th>
                          <th>6M</th>
                          <th>1Y</th>
                          <th>3Y</th>
                          <th>5Y</th>
                          <th>7Y</th>
                          {/* <th>10Y</th> */}
                      </tr>
                  </thead>
                  <tbody>
                    {
                      usefulldata.slice(0, 4).map(eachfund => {
                        return(
                          <tr>
                              <td>{eachfund.name}</td>
                              <td>{eachfund.m1}</td>
                              <td>{eachfund.m3}</td>
                              <td>{eachfund.m6}</td>
                              <td>{eachfund.y1}</td>
                              <td>{eachfund.y3}</td>
                              <td>{eachfund.y5}</td>
                              <td>{eachfund.y7}</td>
                              {/* <td>{eachfund.y10}</td> */}
                          </tr>
                        )
                      })
                    }
                  </tbody>
              </table>}
          </div>

          <div className="results">
             {usefulldata.length > 0 && <h4>Risk Analysis of Funds</h4>}
              {(category == "Debt" || category == "Fixed Income") && usefulldata.length > 0 &&<div>
               <table>
                  <thead>
                      <tr>
                          <th>Fund Name</th>
                          <th>AUM</th>
                          <th>TER</th>
                          <th>SOV</th>
                          <th>AAA</th>
                          <th>AA</th>
                          <th>A</th>
                          <th>YTM</th>
                          <th>Duration</th>
                          <th>AVG Maturity</th>
                      </tr>
                  </thead>
                  <tbody>
                    {
                      usefulldata.slice(0, 4).map(eachfund => {
                        return(
                          <tr>
                              <td>{eachfund.name}</td>
                              <td>{eachfund.aum}</td>
                              <td>{eachfund.ter}</td>
                              <td>{eachfund.sov}</td>
                              <td>{eachfund.aaa}</td>
                              <td>{eachfund.aa}</td>
                              <td>{eachfund.a}</td>
                              <td>{eachfund.ytm}</td>
                              <td>{eachfund.duration}</td>
                              <td>{eachfund.avgmaturity}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
              </table>
              <table style={{display : 'none'}}>
              <thead>
                      <tr>
                          <th>Fund Name</th>
                          <th>1M</th>
                          <th>3M</th>
                          <th>6M</th>
                          <th>1Y</th>
                          <th>3Y</th>
                          <th>5Y</th>
                          <th>7Y</th>
                          <th>AUM</th>
                          <th>TER</th>
                          <th>SOV</th>
                          <th>AAA</th>
                          <th>AA</th>
                          <th>A</th>
                          <th>YTM</th>
                          <th>Duration</th>
                          <th>AVG Maturity</th>
                      </tr>
                  </thead>
                  <tbody>
                    {
                      usefulldata.slice(0, 4).map(eachfund => {
                        return(
                          <tr>
                              <td>{eachfund.name}</td>
                              <td>{eachfund.m1}</td>
                              <td>{eachfund.m3}</td>
                              <td>{eachfund.m6}</td>
                              <td>{eachfund.y1}</td>
                              <td>{eachfund.y3}</td>
                              <td>{eachfund.y5}</td>
                              <td>{eachfund.y7}</td>
                              <td>{eachfund.aum}</td>
                              <td>{eachfund.ter}</td>
                              <td>{eachfund.sov}</td>
                              <td>{eachfund.aaa}</td>
                              <td>{eachfund.aa}</td>
                              <td>{eachfund.a}</td>
                              <td>{eachfund.ytm}</td>
                              <td>{eachfund.duration}</td>
                              <td>{eachfund.avgmaturity}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
              </table>
              </div>}

              {(category == "Equity" || category == "Hybrid") && usefulldata.length > 0 && <div>
                <select className='specialselect' onChange={e => setselectedyear(e.target.value)}>
                  <option value="1">1 Yr</option>
                  <option value="3">3 Yr</option>
                  <option value="5">5 Yr</option>
                  <option value="7">7 Yr</option>
                </select>
              </div>}
              {(category == "Equity" || category == "Hybrid") && usefulldata.length > 0 &&<div>
               <table>
                  <thead>
                      <tr>
                          <th>Fund Name</th>
                          <th>AUM</th>
                          <th>TER</th>
                          <th>P/E</th>
                          <th>P/B</th>
                          <th>Sharpe 1y</th>
                          {selectedyear == "3" && <th>Sharpe 3y</th>}
                          {selectedyear == "5" && <th>Sharpe 5y</th>}
                          {selectedyear == "7" && <th>Sharpe 7y</th>}
                          <th>Sortino 1y</th>
                          {selectedyear == "3" && <th>Sortino 3y</th>}
                          {selectedyear == "5" && <th>Sortino 5y</th>}
                          {selectedyear == "7" && <th>Sortino 7y</th>}
                          <th>Beta 1y</th>
                          {selectedyear == "3" && <th>Beta 3y</th>}
                          {selectedyear == "5" && <th>Beta 5y</th>}
                          {selectedyear == "7" && <th>Beta 7y</th>}
                          <th>St Deviation 1y</th>
                          {selectedyear == "3" && <th>St Deviation 3y</th>}
                          {selectedyear == "5" && <th>St Deviation 5y</th>}
                          {selectedyear == "7" && <th>St Deviation 7y</th>}
                          <th>Large Cap</th>
                          <th>Mid Cap</th>
                          <th>Small-Cap</th>
                    
                      </tr>
                  </thead>
                  <tbody>
                    {
                      usefulldata.slice(0, 4).map(eachfund => {
                        return(
                          <tr>
                              <td>{eachfund.name}</td>
                              <td>{eachfund.aum}</td>
                              <td>{eachfund.ter}</td>
                              <td>{eachfund.pe}</td>
                              <td>{eachfund.pb}</td>
                              <td>{eachfund.sharpe}</td>
                              {selectedyear == "3" &&< td>{eachfund.sharpe3}</td>}
                              {selectedyear == "5" && <td>{eachfund.sharpe5}</td>}
                              {selectedyear == "7" && <td>{eachfund.sharpe7}</td>}
                              <td>{eachfund.sortino}</td>
                              {selectedyear == "3" &&< td>{eachfund.sortino3}</td>}
                              {selectedyear == "5" && <td>{eachfund.sortino5}</td>}
                              {selectedyear == "7" && <td>{eachfund.sortino7}</td>}
                              <td>{eachfund.beta}</td>
                              {selectedyear == "3" &&< td>{eachfund.beta3}</td>}
                              {selectedyear == "5" && <td>{eachfund.beta5}</td>}
                              {selectedyear == "7" && <td>{eachfund.beta7}</td>}
                              <td>{eachfund.stdev}</td>
                              {selectedyear == "3" &&< td>{eachfund.stdev3}</td>}
                              {selectedyear == "5" && <td>{eachfund.stdev5}</td>}
                              {selectedyear == "7" && <td>{eachfund.stdev7}</td>}
                              <td>{eachfund.largecap}</td>
                              <td>{eachfund.midcap}</td>
                              <td>{eachfund.smallcap}</td>
                             
                          </tr>
                        )
                      })
                    }
                  </tbody>
              </table>

              <table style={{display : 'none'}}>
              <thead>
                      <tr>
                          <th>Fund Name</th>
                          <th>1M</th>
                          <th>3M</th>
                          <th>6M</th>
                          <th>1Y</th>
                          <th>3Y</th>
                          <th>5Y</th>
                          <th>7Y</th>
                          <th>AUM</th>
                          <th>TER</th>
                          <th>P/E</th>
                          <th>P/B</th>
                          <th>Sharpe 1y</th>
                          {selectedyear == "3" && <th>Sharpe 3y</th>}
                          {selectedyear == "5" && <th>Sharpe 5y</th>}
                          {selectedyear == "7" && <th>Sharpe 7y</th>}
                          <th>Sortino 1y</th>
                          {selectedyear == "3" && <th>Sortino 3y</th>}
                          {selectedyear == "5" && <th>Sortino 5y</th>}
                          {selectedyear == "7" && <th>Sortino 7y</th>}
                          <th>Beta 1y</th>
                          {selectedyear == "3" && <th>Beta 3y</th>}
                          {selectedyear == "5" && <th>Beta 5y</th>}
                          {selectedyear == "7" && <th>Beta 7y</th>}
                          <th>St Deviation 1y</th>
                          {selectedyear == "3" && <th>St Deviation 3y</th>}
                          {selectedyear == "5" && <th>St Deviation 5y</th>}
                          {selectedyear == "7" && <th>St Deviation 7y</th>}
                          <th>Large Cap</th>
                          <th>Mid Cap</th>
                          <th>Small-Cap</th>
                      </tr>
                  </thead>
                  <tbody>
                    {
                      usefulldata.slice(0, 4).map(eachfund => {
                        return(
                          <tr>
                              <td>{eachfund.name}</td>
                              <td>{eachfund.m1}</td>
                              <td>{eachfund.m3}</td>
                              <td>{eachfund.m6}</td>
                              <td>{eachfund.y1}</td>
                              <td>{eachfund.y3}</td>
                              <td>{eachfund.y5}</td>
                              <td>{eachfund.y7}</td>
                              <td>{eachfund.aum}</td>
                              <td>{eachfund.ter}</td>
                              <td>{eachfund.pe}</td>
                              <td>{eachfund.pb}</td>
                              <td>{eachfund.sharpe}</td>
                              {selectedyear == "3" &&< td>{eachfund.sharpe3}</td>}
                              {selectedyear == "5" && <td>{eachfund.sharpe5}</td>}
                              {selectedyear == "7" && <td>{eachfund.sharpe7}</td>}
                              <td>{eachfund.sortino}</td>
                              {selectedyear == "3" &&< td>{eachfund.sortino3}</td>}
                              {selectedyear == "5" && <td>{eachfund.sortino5}</td>}
                              {selectedyear == "7" && <td>{eachfund.sortino7}</td>}
                              <td>{eachfund.beta}</td>
                              {selectedyear == "3" &&< td>{eachfund.beta3}</td>}
                              {selectedyear == "5" && <td>{eachfund.beta5}</td>}
                              {selectedyear == "7" && <td>{eachfund.beta7}</td>}
                              <td>{eachfund.stdev}</td>
                              {selectedyear == "3" &&< td>{eachfund.stdev3}</td>}
                              {selectedyear == "5" && <td>{eachfund.stdev5}</td>}
                              {selectedyear == "7" && <td>{eachfund.stdev7}</td>}
                              <td>{eachfund.largecap}</td>
                              <td>{eachfund.midcap}</td>
                              <td>{eachfund.smallcap}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
              </table>
             
              </div>}
              <h4>Note- Selection is based on fundamental, ratio analysis data available and internal strategies. 
Different strategies will get different results based on study and personal evaluation of a person based on RVCC modules learnings.</h4>
          </div>

    </div>
  );
}

export default NominatedFunds;
