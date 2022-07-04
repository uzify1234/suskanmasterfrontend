import React from 'react'
import Header from '../Helpers/Header';
import './Detailedfinancialplan.css';

function Detailedfinancialplan() {
    return (
        <div className='detailedfinancialplan'>
            <Header></Header>
            <h3><strong>Steps to be followed in making he detailed financial plan</strong> :</h3>
            <p>
                <ol>
                    <li>
                    This tool can be used by the Volatility Coach(VC) for creating Detailed Financial Planning Reports by registering with their <u>Client's Email id & Name</u> for whom they want to do a Comprehensive Financial Health Check.
                    </li>
                    Sections include <u>Goals details, Risk Profiling, Asset/Liabilities (Networth), Income/Expenses (Cash Flow) details.</u>  Once you get all the details from the client, input the details in these sections mentioned above.

                    <li>
                    Sections include <u>Goals details, Risk Profiling, Asset/Liabilities (Networth), Income/Expenses (Cash Flow) details.</u>  Once you get all the details from the client, input the details in these sections mentioned above.
                    </li>
                    <li>
                    <u>Download the Financial Health Check Report</u> from the 'Your Summary' Section once all the details have been put.
                    </li>
                    <li>
                    The Cient will receive the financial plan as soon as your press submit button . The Client will receive a user ID and password which you can take from him after he has done the edit work from his end. Then you can edit and work on this client with his user Id and password on the said link.
                    </li>
                    <li>
                    Once an email id is mentioned , it cannot add other plan . New email id need to be added for new financial Plan.
                    </li>
                    <li>
                    The Comment and recomendation written by you will come as an output of the financial plan you made and is emailed to his id directly.
                    </li>
                    <li>
                    The above software/ Tool is created for Volatility Coaches exclusively with technicla support of omnimax India
                    </li>
                </ol>   
            </p>
            <button onClick={() => {window.location.href="https://volatilitygame.omxsoft.com/Default.aspx?tabid=381261&PortalID=1&CampaignID=%7B375f47ba-fcb2-4768-951d-a44267cfd53f%7D&language=en-IE&language=en-IE"}}>Click here to proceed</button>
        </div>
    )
}

export default Detailedfinancialplan
