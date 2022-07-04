import React , {useState, useEffect} from 'react'
import './Lowerview.css'

function Lowerview({dp}) {



    const [displayportalvisible, setdisplayportalvisible] = useState("none");


    const [allavailableoptions, setallavailableoptions] = useState(['Scheme Name' , 'SEBI Classification' , 'Nav', 'AUM Cr','TER','Net YTM','YTM','Av Mat','Dur','Sov','AAA','AA','A','Others','PE','Scheme Name' , 'SEBI Classification' , 'Nav', 'AUM Cr','TER','Net YTM','YTM','Av Mat','Dur','Sov','AAA','AA','A','Others','PE','Scheme Name' , 'SEBI Classification' , 'Nav', 'AUM Cr','TER','Net YTM','YTM','Av Mat','Dur','Sov','AAA','AA','A','Others','PE','Scheme Name' , 'SEBI Classification' , 'Nav', 'AUM Cr','TER','Net YTM','YTM','Av Mat','Dur','Sov','AAA','AA','A','Others','PE']);

    
    const [alldisplayingcoloumns, setalldisplayingcoloumns] = useState([]);


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

    const handlecheckboxfordisplay = (e) => {
        var isChecked = e.target.checked;  
        var item = e.target.value;  
        if(alldisplayingcoloumns.includes(item)) {
            var array = alldisplayingcoloumns;
            var index = array.indexOf(item);
            delete array[index];
            setalldisplayingcoloumns(array);
        }
        else {
            var ag = alldisplayingcoloumns;
            ag.push(item);
            setalldisplayingcoloumns(ag);
        }
    }


    useEffect(() => {
        setdisplayportalvisible(dp);
       
    }, [])


    return (
        <div className="lowerview">
            
            <div className="displaycolumnsselection" style={{display : displayportalvisible}}>
                <div className="one">
                    <button onClick={closedisplayportal}>Close</button>
                    <button>Show All Coloumns</button>
                </div>

                <div className="two">
                    <h4>Check all the coloumns you want to make visible , and uncheck all coloumns you want to hide</h4>
                    <div className="holder">
                       {
                           allavailableoptions.map(m => {
                               return (
                                   <div className="eachcheck">
                                <input type="checkbox" value={m} onChange={handlecheckboxfordisplay} /> {m} </div>
                               )
                           })
                       }
                    </div>
                </div>

            </div>


            <div className="lowerportion">
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

export default Lowerview
