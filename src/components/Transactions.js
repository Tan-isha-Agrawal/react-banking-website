import React from "react";
import Table from 'react-bootstrap/Table'
import { transactions } from '../data/Transaction';
import '../styles/Home.css';
import '../styles/Transactions.css';

function Transactions(){
  return (
    <div className="bodies" >
        <center>
        <Table>
            <tr>
                <th width="170" style={{textAlign: "center"}}>TransactionID</th>
                <th width="170" style={{textAlign: "center"}}>AccountNumber</th>
                <th width="170" style={{textAlign: "center"}}>AccountTypeID</th>
                <th width="170" style={{textAlign: "center"}}>TransDate</th>
                <th width="170" style={{textAlign: "center"}}>TransactionType</th>
                <th width="170" style={{textAlign: "center"}}>Amount</th>
            </tr>
            {transactions.slice(transactions.length-5,transactions.length).map((data, key) => {
                return (
                <tr key={key}>
                    <td style={{textAlign: "center"}}>{data.TransactionID}</td>
                    <td style={{textAlign: "center"}}>{data.AccountNumber}</td>
                    <td style={{textAlign: "center"}}>{data.AccountTypeID}</td>
                    <td style={{textAlign: "center"}}>{data.TransDate}</td>
                    <td style={{textAlign: "center"}}>{data.TransactionType}</td>
                    <td style={{textAlign: "center"}}>{data.Amount}</td>
                </tr>
                );
            })}
        </Table>
        </center>
      </div>
  );
}

export default Transactions
