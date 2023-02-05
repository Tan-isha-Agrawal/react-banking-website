import React, { Component } from "react";
import { FaUserCircle, FaFacebookF } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
import '../styles/Login.css'

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
            email: '',
            password: '',
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
        //let user = { email: this.state.email, password: this.state.password };
        //      alert(JSON.stringify(user));
        //      alert("Login Successfull")
    }

    render() {
        return (
            <>
                <div className='common'>
                    <h1><FaUserCircle size={50} /> User Login</h1>
                    <div className="container">
                        <form>
                            {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                            {this.state.showSuccessMessage && <div>Login Sucessful</div>}

                            <div className="form-group">

                                <label>User Name:</label>
                                <input type="text" name="email" className="form-control" value={this.state.email}
                                    onChange={this.handleChange} validations={[required]} />
                            </div>

                            <div className="form-group">
                                <label>Password:</label>
                                <input type="password" name="password" className="form-control" value={this.state.password}
                                    onChange={this.handleChange} validations={[required]} />
                            </div>

                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>

                            <div>
                                <Link to="../ForgotPassword.js">Forgot password?</Link>
                            </div>
                            
                            <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                                <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={this.checkLogin}>Login</button>
                            </div>
                            <p style={{ textAlign: 'center', fontWeight: "bolder" }}>  (OR) </p>
                            <button className="btn btn-lg btn-block btn-primary" style={{backgroundColor: '#dd4b39'}}
                                type="submit"><BsGoogle/> Sign in with google</button>
                            <button className="btn btn-lg btn-block btn-primary mb-2" style={{backgroundColor: '#3b5998'}}
                                type="submit"><FaFacebookF size={30}/>Sign in with facebook</button>

                            <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                                <p>Don't have an account? <Link to="/register" className="link-info">Register here</Link></p>
                            </div>

                        </form>
                    </div>
                </div>
            </>
        );
    }
} 