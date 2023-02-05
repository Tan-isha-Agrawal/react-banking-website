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

const beneficiary = ['B1', 'B2', 'B3']

const beneficiaryAccountType = ['1 year', '5 years', '10 years']

export default class FundTransfer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            fromAccount: '',
            beneficiaryAccount: '',
            beneficiaryIFSC: '',
            amount: '',
            remarks:'',
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
                    <h1> Fund Transfer </h1>
                    <div className="container">
                        <form>
                            {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                            {this.state.showSuccessMessage && <div>Login Sucessful</div>}

                            <div className="form-group">

                                <label>From Account:</label>
                                <input type="text" name="fromAccount" className="form-control" value={this.state.fromAccount}
                                    onChange={this.handleChange} validations={[required]} />
                            </div>

                            <div className="form-group">
                                <label>Beneficiary:</label>
                                <Dropdown options={beneficiary} onChange={this._onSelect} placeholder="Select Beneficiary" />
                            </div>

                            <div className="form-group">

                                <label>Beneficiary Account:</label>
                                <input type="text" name="beneficiaryAccount" className="form-control" value={this.state.beneficiaryAccount}
                                    onChange={this.handleChange} validations={[required]} />
                            </div>

                            <div className="form-group">

                                <label>Beneficiary IFSC Code:</label>
                                <input type="text" name="beneficiaryIFSCCode" className="form-control" value={this.state.beneficiaryIFSC}
                                    onChange={this.handleChange} validations={[required]} />
                            </div>

                            <div className="form-group">
                                <label>Beneficiary Account Type:</label>
                                <Dropdown options={beneficiaryAccountType} onChange={this._onSelect} placeholder="Select Account Type" />
                            </div>

                            <div className="form-group">
                                <label>Amount:</label>
                                <input type="text" name="amount" className="form-control" value={this.state.amount}
                                    onChange={this.handleChange} validations={[required]} />
                            </div>

                            <div className="form-group">
                                <label>Remarks:</label>
                                <input type="text" name="remarks" className="form-control" value={this.state.remarks}
                                    onChange={this.handleChange} validations={[required]} />
                            </div>

                            <div className="form-group" style={{ justifyContent: 'center', textAlign: 'center' }}>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">I have read and accepted the terms and conditions</label>
                                </div>
                            </div>

                            <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                                <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={this.checkLogin}>Register</button>
                            </div>

                        </form>
                    </div>
                </div>
            </>
        );
    }
}