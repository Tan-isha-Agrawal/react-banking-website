import React from "react";
import Transactions from "./Transactions";
import '../styles/Home.css';

function CheckBalance() {

    return (
        <div className='bodies'>
            <center>
            <h6>Current Balance: 200000</h6>
            <hr></hr>
            <Transactions />
            </center>
        </div>


    );
}

export default CheckBalance;
