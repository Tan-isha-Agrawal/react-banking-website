import React from "react";
import { Link } from "react-router-dom";
import '../styles/PaymentMethods.css';

class PaymentMethods extends React.Component{
    render(){
        return(
            <div class = "dropdown-content">
                <Link to="/NEFT">N.E.F.T</Link>
                <Link to="/RGST">R.G.S.T</Link>
                <Link to="/IMPS">I.M.P.S</Link>
                <Link to="/UPI">U.P.I</Link>
            </div>
        );
    }
}

export default PaymentMethods
