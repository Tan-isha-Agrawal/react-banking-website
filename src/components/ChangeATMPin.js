import React, { Component } from "react";
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

export default class ChangeATMPIN extends Component {

    constructor(props) {
        super(props)

        this.state = {
            oldPin: '',
            newPin: '',
            confirmPin: '',
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
                    <h1> Change ATM PIN </h1>
                    <div className="container">
                        <form>
                            {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                            {this.state.showSuccessMessage && <div>Login Sucessful</div>}

                            <div className="form-group">

                                <label>Old PIN:</label>
                                <input type="text" name="oPIN" className="form-control" value={this.state.oldPin}
                                    onChange={this.handleChange} validations={[required]} />
                            </div>

                            <div className="form-group">
                                <label>New PIN:</label>
                                <input type="text" name="newPIN" className="form-control" value={this.state.newPin}
                                    onChange={this.handleChange} validations={[required]} />
                            </div>

                            <div className="form-group">
                                <label>Confirm PIN:</label>
                                <input type="text" name="confirmPIN" className="form-control" value={this.state.confirmPin}
                                    onChange={this.handleChange} validations={[required]} />
                            </div>

                            <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                                <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={this.checkLogin}>Change</button>
                            </div>                           

                        </form>
                    </div>
                </div>
            </>
        );
    }
}