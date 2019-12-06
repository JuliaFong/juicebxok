import React, { Component } from 'react'
import './login.css'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
        }
    }
    

    render() {
        return (
            <div className="Login">
                <h1>Login</h1>
                <form onSubmit={this.props.handleLoginSubmit}>
                    <div className="Login-Parent">
                        <div className="form-row">
                            <label>Email</label>
                            <input type="text" name="loginEmail" className="child-row" onChange={this.props.handleLoginChange} />
                        </div>
                        <div className="form-row">
                            <label>Password</label>
                            <input type="password" name="loginPassword" className="child-row" onChange={this.props.handleLoginChange} />
                        </div>
                        <div className="form-row">
                            <button type="submit" className="Submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Login
