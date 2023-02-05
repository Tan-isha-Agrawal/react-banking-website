import React from "react";
import { Link } from "react-router-dom";
import '../styles/NavBar.css';
import PaymentMethods from "./PaymentMethods";


class NavBar extends React.Component {
    render() {
        return (
            <div className="mid">
                <ul className="navbar">
                    <li className='active'><Link to="/home" >Home</Link></li>                 
                    <li><Link to="/checkBalance">Check Balance</Link></li>
                    <li><div class = "dropdown">
                        <a>Fund Transfer</a>
                        <PaymentMethods/>
                    </div></li>
                    <li><Link to="/openNewFD">Open New FD</Link></li>
                    <li><Link to="/changeATMPIN">Change ATM PIN</Link></li>
                </ul>
                <ul className="right">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    
                </ul>

            </div>
        );
    }
}
export default NavBar
