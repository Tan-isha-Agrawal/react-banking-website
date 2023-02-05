import React, { Component } from "react";
import { FaUserCircle, FaFacebookF } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
import '../styles/Login.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const securityQuestionsOptions = [
    'Name of your First School Name', 'What is your first salary?', 'What is your Favourite sport?'
];

const accountTypeOptions = [
    'Savings Account', 'Salary Account', 'NRI Account', 'Fixed Deposit Account', 'Recurring Deposit Account'
];



const required = (value) => {
    if (!value) {
        return (
            <div className="invalid-feedback d-block">
                This field is required!
            </div>
        );
    }
};

export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            middleName: '',
            lastName: '',

            userName: '',
            password: '',
            securityAnswers:'',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.checkLogin = this.checkLogin.bind(this);
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    checkLogin(p) {
        p.preventDefault();
    }

    render() {
        return (
            <>
                <div className='common'>
                    <h1><FaUserCircle size={50} /> New User Registration </h1>
                    <div className="container">
                        <form>
                            {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                            {this.state.showSuccessMessage && <div>Login Sucessful</div>}

                            <div className="form-group">

                                <label>First Name:</label>
                                <input type="text" name="fname" className="form-control" value={this.state.firstName}
                                    onChange={this.handleChange} validations={[required]} />
                            </div>

                            <div className="form-group">
                                <label>Middle Name:</label>
                                <input type="text" name="mName" className="form-control" value={this.state.middleName}
                                    onChange={this.handleChange} validations={[required]} />
                            </div>

                            <div className="form-group">
                                <label>Last Name:</label>
                                <input type="text" name="mName" className="form-control" value={this.state.lastName}
                                    onChange={this.handleChange} validations={[required]} />
                            </div>

                            <div className="form-group">
                                <label>User Name:</label>
                                <input type="text" name="uName" className="form-control" value={this.state.userName}
                                    onChange={this.handleChange} validations={[required]} />
                            </div>

                            <div className="form-group">
                                <label>Password:</label>
                                <input type="password" name="password" className="form-control" value={this.state.password}
                                    onChange={this.handleChange} validations={[required]} />
                            </div>

                            <div className="form-group">
                                <label>Security Question</label>
                                <Dropdown options={securityQuestionsOptions} onChange={this._onSelect}  placeholder="Select Security Questions" />
                                
                            </div>

                            <div className="form-group">
                                <label>Security Answer</label>
                                <input type="text" name="securityAnswers" className="form-control" value={this.state.securityAnswers}
                                    onChange={this.handleChange} validations={[required]} />
                            </div>

                            <div className="form-group">
                                <label>Select Account Type</label>
                                <Dropdown options={accountTypeOptions} onChange={this._onSelect}  placeholder="Select Account Type" />
                            </div>

                            <div className="form-group" style={{ justifyContent: 'center', textAlign: 'center' }}>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">I Agree the Terms and Conditions</label>
                                </div>
                            </div>                            

                            <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                                <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={this.checkLogin}>Register</button>
                            </div>
                            <p style={{ textAlign: 'center', fontWeight: "bolder" }}>  (OR) </p>
                            <button className="btn btn-lg btn-block btn-primary" style={{ backgroundColor: '#dd4b39' }}
                                type="submit"><BsGoogle /> Sign in with google</button>
                            <button className="btn btn-lg btn-block btn-primary mb-2" style={{ backgroundColor: '#3b5998' }}
                                type="submit"><FaFacebookF size={30} />Sign in with facebook</button>

                            <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                                <p>Already have an account? <Link to="/login" className="link-info">Login here</Link></p>
                            </div>

                        </form>
                    </div>
                </div>
            </>
        );
    }
} 