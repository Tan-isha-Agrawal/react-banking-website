import React, { Component } from "react";
import '../styles/Login.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const required = (value) => {
    if (!value) {
        return (
            <div className="invalid-feedback d-block">
                This field is required!
            </div>
        );
    }
};



const validVPA = RegExp(
    /[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}/
);


export default class Rgst extends Component {

    constructor(props) {
        super(props)

        this.state = {
            z: null,
            beneficiaryAccountNumber: null,
            ifscCode: null,
            amount: null,
            remarks:null,
            checkbox:null,
            vpa:null,
            errors: {
                beneficiaryName: '',
                beneficiaryAccountNumber: '',
                ifscCode: '',
                amount: '',
                remarks:'',
                checkbox:'',
                vpa:''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.checkLogin = this.checkLogin.bind(this);
    }



    handleChange(event) {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
    
        switch (name) {
          case 'vpa': 
            errors.vpa = 
              validVPA.test(value)
                ? ''
                : 'Invalid VPA';
            break;

          default:
            break;
        }
    
        this.setState({errors, [name]: value});
    }

    checkLogin(p) {
        p.preventDefault();
    }

    render() {
        return (
            <>
                <div className='common'>
                    <h1> U.P.I </h1>
                    <div className="container">
                        <form>
                            {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                            {this.state.showSuccessMessage && <div>Login Sucessful</div>}

                            <div className="form-group">

                                <label>Virual Payment Address:</label>
                                <input type="text" name="vpa" className="form-control" value={this.state.beneficiaryName}
                                    onChange={this.handleChange} validations={[required]} />
                                {this.state.errors.vpa.length > 0 && 
                                    <span className='error'>{this.state.errors.vpa}</span>}
                            </div>



                            <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                                <button className="btn btn-primary btn-lg btn-block"  type="submit" onClick={this.checkLogin}>Make Payment</button>
                            </div>

                        </form>
                    </div>
                </div>
            </>
        );
    }
}