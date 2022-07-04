import React , {useState , useEffect} from 'react'
import './Upperview.css';
import './Lowerview.css'
import * as Constants from './Constants.js';
import axios from 'axios';

function Categoryaverages() {
    const [headingcategories, setheadingcategories] = useState([]);

    const [allavailableoptions, setallavailableoptions] = useState(['Scheme Name' , 'SEBI Classification' , 'Nav', 'AUM Cr','TER','Net YTM','YTM','Av Mat','Dur','Sov','AAA','AA','A','Others','PE']);

    const [displayportalvisible, setdisplayportalvisible] = useState("none");
    const [categoriesportalvisible, setcategoriesportalvisible] = useState("none");
    const [amcportalvisible, setamcportalvisible] = useState("none");

    const [allavailablecategories, setallavailablecategories] = useState([])
    const [allselectedcategories, setallselectedcategories] = useState([])

    const [allavailableamc, setallavailableamc] = useState(["aCat1","aCat2","aCat3","acat4"])
    const [allselectedamc, setallselectedamc] = useState(["aCat1","aCat2","aCat3","acat4"])

    
    const [alldisplayingcoloumns, setalldisplayingcoloumns] = useState([]);


    useEffect(() => {
        
        getallcategories();
        var cpy = [...allavailableoptions];
        setalldisplayingcoloumns(cpy);
    }, [])



    const getallcategories = () => {

        var allnestedrequests = [];
       
        var localapikey = "";
        axios.post('https://pulsedb-qa.pulselabs.co.in/rest/api/v1/partner_login', {
            partner: Constants.partner,
            key: Constants.key
        })
        .then(function (response) {
            localapikey = response.data.data.auth;
            axios.post('https://pulsedb-qa.pulselabs.co.in/rest/api/v1/mf/asset_categories', {
                auth: localapikey,
                amc_codes: ""
              })
              .then(function (response) {
                const obtain = response.data.data['asset_categories'];
                var tmparray = allavailablecategories;
                var tmparray2 = [];
                obtain.map(eo => {
                    tmparray.push(eo);
                    tmparray2.push(eo);
                    var x = {name : eo , head : true};
                    setallavailablecategories(tmparray);
                    setheadingcategories(tmparray);
                    
                    
                })
              })
              .catch(function (error) {
                console.log(error);
              });

        })
        .catch(function (error) {
            console.log(error);
        });



       
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


       const closecategoriesportal = () => {
        setcategoriesportalvisible('none');
      }

 



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
        }
        else {
            var ag = [...allselectedcategories];
            ag.push(item);
            setallselectedcategories(ag);
        }     
       }



  

    const scattapped = () => {
        setcategoriesportalvisible('block');
    }

    return (
        <div className="wholecover categoryaverages">
        <div className="upperview">
            <div>
                <h4>Mutual Funds</h4>
            </div>
            <div className="second">
                <button className='active'>Category</button>
                <button>Screen</button>
                <button>Compare</button>
                <button>Equity Holdings</button>
                <button>Debt Holdings</button>
            </div>
            <div className="third">
                <div className="each">
                    <button onClick={scattapped}>Select Asset Classes</button>
                </div>
               
       

            


            </div>
            
        </div>
        <div className="lowerview">






        <div className="displaycolumnsselection" style={{display : categoriesportalvisible}}>
                <div className="one">
                    <button onClick={closecategoriesportal}>Close</button>
                    <button>Show All Categories</button>
                </div>

                <div className="two">
                    <h4>Check all the Categories you want to make visible , and uncheck all Categories you want to hide</h4>
                    <div className="holder">
                       {
                           allavailablecategories.map(m => {
                               console.log("Heading categories  is "+headingcategories);
                               return (
                                   <div className= {headingcategories.includes(m) ? 'eachcheck specialcheck' : 'eachcheck'}>
                                <input type="checkbox" value={m} checked={allselectedcategories.includes(m) ? true : false} onChange={handlecheckboxforcategories} /> {m} </div>
                               )
                           })
                       }
                    </div>
                </div>

            </div>



            
        


            <table>
                <thead>

                    {
                        alldisplayingcoloumns.map(mk => {
                            return (<th>{mk}</th>)
                        })
                    }
                    
                </thead>
                <tbody>
                    <tr>
                    {


                        alldisplayingcoloumns.map(mk => {
                            return(<td>Hello</td>)
                        })
                    }
                    </tr>
                    <tr>
                    {


                        alldisplayingcoloumns.map(mk => {
                            return(<td>Hello</td>)
                        })
                    }
                    </tr>
                    <tr>
                    {


                        alldisplayingcoloumns.map(mk => {
                            return(<td>Hello</td>)
                        })
                    }
                    </tr>
                    <tr>
                    {


                        alldisplayingcoloumns.map(mk => {
                            return(<td>Hello</td>)
                        })
                    }
                    </tr>
                    <tr>
                    {


                        alldisplayingcoloumns.map(mk => {
                            return(<td>Hello</td>)
                        })
                    }
                    </tr>
                    <tr>
                    {


                        alldisplayingcoloumns.map(mk => {
                            return(<td>Hello</td>)
                        })
                    }
                    </tr>
                    <tr>
                    {


                        alldisplayingcoloumns.map(mk => {
                            return(<td>Hello</td>)
                        })
                    }
                    </tr>
                    <tr>
                    {


                        alldisplayingcoloumns.map(mk => {
                            return(<td>Hello</td>)
                        })
                    }
                    </tr>
                    <tr>
                    {


                        alldisplayingcoloumns.map(mk => {
                            return(<td>Hello</td>)
                        })
                    }
                    </tr>

                </tbody>
            </table>
            
        </div>
        </div>
    )
}

export default Categoryaverages
