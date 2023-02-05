import React from "react";
import '../styles/ForgotPassword.css';

// Issues : 
// 1. How to confirm the passwords entered are correct, and display only after the user clicks the button?
// 2. How to make the form accept inputs?
// 3. ....

const passwordMatches = (reconfirmednewpassword, newpassword) => {
    // function for verifying if there is a match with the new password. 
    if(reconfirmednewpassword===newpassword)
        return true;
    return false;
}

const required = (value) => {
    if (!value) {
        return (
            <div className="invalid-feedback d-block">
                This field is required!
            </div>
        );
    }
};

const isEmail = (email) => {
  // Returns true if the email entered is a valid email ID.
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value));
  {
    return (true);
  }
  return false;
};

export default class ForgotPassword extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            answer:'',
            np:'',
            rnp:'',
            // Add pending stuff here.
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.resetPasswordClicked = this.resetPasswordClicked.bind(this);
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    resetPasswordClicked(p){
        p.preventDefault();
    }

    render(){
        return(
            <>
                <div className='ForgotPasswordGroup'>
                    <h1> Forgot Password </h1>
                    <div className="container">
                        <form>

                            <div className="ForgotPasswordFormGroup">
                                <label>Enter your email :</label>
                                <input type="text" name="email" className="form-control" value={this.state.email} onChange={this.handleChange} validations={[required,isEmail]} />
                            </div>

                            <div className="ForgotPasswordFormGroup">
                                <label>Enter your security answer :</label>
                                <input type="text" name="securityAnswer" className="form-control" value={this.state.answer} onChange={this.handleChange} validations={[required]} />
                            </div>

                            <div className="ForgotPasswordFormGroup">
                                <label>Enter your new password  :</label>
                                <input type="text" name="newpassword" className="form-control" value={this.state.np} onChange={this.handleChange} validations={[required]} />
                            </div>

                            <div className="ForgotPasswordFormGroup">
                                <label>Reconfirm your new password  :</label>
                                <input type="text" name="reconfirmednewpassword" className="form-control" value={this.state.rnp} onChange={this.handleChange} validations={[required]} />
                            </div>

                            <div style={{ justifyContent: 'center', textAlign: 'center', marginTop: '15px' }}>
                                <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={this.resetPasswordClicked}>Reset password</button>
                            </div>    

                        </form>
                    </div>
                </div>
            </>
        );
   }
}

