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

const bankNames = ['SBI','Axis','ICIC','HDFC','Kotak','IDBI','Canara','YesBank','Citi']

const validName = RegExp(
    /^[a-zA-Z ]{2,30}$/
);

const validAccount = RegExp(
    /^(\d{3,12})$/
);

const validIFSC = RegExp(
    /^[A-Za-z]{4}\d{7}$/
);

const vallidAmount =RegExp(
    /^\d+$/
);

const validNonEmpty = RegExp(
    /[\S\s]+[\S]+/
);


export default class Rgst extends Component {

    constructor(props) {
        super(props)

        this.state = {
            beneficiaryName: null,
            beneficiaryAccountNumber: null,
            ifscCode: null,
            amount: null,
            remarks:null,
            checkbox:null,
            errors: {
                beneficiaryName: '',
                beneficiaryAccountNumber: '',
                ifscCode: '',
                amount: '',
                remarks:'',
                checkbox:'',
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
          case 'beneficiaryName': 
            errors.beneficiaryName = 
              validName.test(value)
                ? ''
                : 'Invalid Name';
            break;
            case 'beneficiaryAccountNumber': 
            errors.beneficiaryAccountNumber = 
              validAccount.test(value)
                ? ''
                : 'Invalid Account Number';
            break;
            case 'ifscCode': 
            errors.ifscCode = 
                validIFSC.test(value)
                ? ''
                : 'Invalid IFSC Code';
            break;
            case 'amount': 
            errors.amount = 
                vallidAmount.test(value)
                ? ''
                : 'Invalid Amount';
            break;
            case 'remarks': 
            errors.remarks = 
            validNonEmpty.test(value)
            ? ''
            : 'Please enter a remark.';
            break;
            case 'checkbox': 
            errors.checkbox = 
            event.target.checked
            ? ''
            : 'Please enter a remark.';
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
                    <h1> R.G.S.T </h1>
                    <div className="container">
                        <form>
                            {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                            {this.state.showSuccessMessage && <div>Login Sucessful</div>}

                            <div className="form-group">

                                <label>Beneficiary Name:</label>
                                <input type="text" name="beneficiaryName" className="form-control" value={this.state.beneficiaryName}
                                    onChange={this.handleChange} validations={[required]} />
                                {this.state.errors.beneficiaryName.length > 0 && 
                                    <span className='error'>{this.state.errors.beneficiaryName}</span>}
                            </div>

                            <div className="form-group">
                                <label>Beneficiary Bank Name:</label>
                                <Dropdown options={bankNames} onChange={this._onSelect} placeholder="Select Bank" />
                            </div>
                            <div className="form-group">

                                <label>Beneficiary Account Number:</label>
                                <input type="text" name="beneficiaryAccountNumber" className="form-control" value={this.state.beneficiaryAccountNumber}
                                    onChange={this.handleChange} validations={[required]} />
                                {this.state.errors.beneficiaryAccountNumber.length > 0 && 
                                    <span className='error'>{this.state.errors.beneficiaryAccountNumber}</span>}
                            </div>

                            <div className="form-group">

                                <label>IFSC Code:</label>
                                <input type="text" name="ifscCode" className="form-control" value={this.state.ifscCode}
                                    onChange={this.handleChange} validations={[required]} />
                                {this.state.errors.ifscCode.length > 0 && 
                                    <span className='error'>{this.state.errors.ifscCode}</span>}
                            </div>

                            <div className="form-group">
                                <label>Amount:</label>
                                <input type="text" name="amount" className="form-control" value={this.state.amount}
                                    onChange={this.handleChange} validations={[required]} />
                                {this.state.errors.amount.length > 0 && 
                                    <span className='error'>{this.state.errors.amount}</span>}
                            </div>

                            <div className="form-group">
                                <label>Remarks:</label>
                                <input type="text" name="remarks" className="form-control" value={this.state.remarks}
                                    onChange={this.handleChange} validations={[required]} />
                                {this.state.errors.remarks.length > 0 && 
                                    <span className='error'>{this.state.errors.remarks}</span>}
                            </div>

                            <div className="form-group" style={{ justifyContent: 'center', textAlign: 'center' }}>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" name="checkbox" className="custom-control-input" id="customCheck1" onChange={this.handleChange} />
                                    <label className="custom-control-label" htmlFor="customCheck1">I have read and accepted the terms and conditions</label>
                                </div>
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