import React, { Component } from 'react'
import './signup.css'

 class Signup extends Component {
    constructor(){
        super()
        this.state = {
            signupFirstName: '',
            signupLastName: '',
            signupUserName: '',
            signupEmail: '',
            signupLocation: '',
            signupPassword: ''
           
     }
        
    }
   

    render() {
        return(
            <div className="signup">
                <div className="Sign-up">
                    <h2>Sign Up</h2>
                </div>
                <form onSubmit ={this.props.handleSignupSubmit}>
                    <div className="Signup-Parent">
                        <div className="form-row">
                            <label>First Name</label>
                            <input type="text" name="signupFirstName" className="child-row" onChange={this.props.handleSignupChange} />
                        </div>
                        <div className="form-row">
                            <label>Last Name</label>
                            <input type="text" name="signupLastName" className="child-row" onChange={this.props.handleSignupChange} />
                        </div>
                        <div className="form-row">
                            <label>Email</label>
                            <input type="text" name="signupEmail" className="child-row" onChange={this.props.handleSignupChange} />
                        </div>
                        <div className="form-row">
                            <label>Username</label>
                            <input type="text" name="signupUserName" className="child-row" onChange={this.props.handleSignupChange} />
                        </div>
                        <div className="form-row">
                            <label>Password</label>
                            <input type="text" name="signupPassword" className="child-row" onChange={this.props.handleSignupChange} />
                        </div>
                        <div className="form-row">
                            <label>Location</label>
                            <input type="text" name="signupLocation" className="child-row" onChange={this.props.handleSignupChange} />
                        </div>
                        <div className="form-row">
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Signup
