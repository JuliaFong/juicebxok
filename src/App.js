import React, { Component } from 'react'
import Splash from './Components/Splash'
import Login from './Components/Login'
import Signup from './Components/Signup'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Edit from './Components/Edit'
import Footer from './Components/Footer'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { faRubleSign } from '@fortawesome/free-solid-svg-icons'


class App extends Component {
  state = {
    currentUser: {},
    loginEmail: "",
    loginPassword: "",
    signupFirstName: "",
    signupLastName: "",
    signupUserName: "",
    signupEmail: "",
    signupLocation: "",
    signupPassword: "",
  }
  
  updateCurrentUser = (currentUser) => {
    this.setState({
      currentUser: currentUser
    })
  }

  handleLoginSubmit = async (e) => {
    e.preventDefault();
    const loginResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/login`,{
        method: "POST",
        credentials: "include",
        body: JSON.stringify(this.state),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const parsedResponse = await loginResponse.json();
    console.log(parsedResponse, "hiiiiiiii")
    this.setState({
      currentUser: parsedResponse.data
    })
    this.props.history.push("/home")
  }

  handleLoginChange = (e) => {
    this.setState({
        [e.currentTarget.name]: e.currentTarget.value
    })
}

handleSignupSubmit = async (e) => {
  console.log("signupsubmitttt")
  e.preventDefault();
  const signupResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/register`,{
    method: "POST",
    credentials: "include",
    body: JSON.stringify(this.state),
    headers: {
      "Content-Type": "application/json"
    }
  }) 
  
  const parsedResponse = await signupResponse.json();
  console.log(parsedResponse, "harryypotterrrr")
  this.setState({
    currentUser: parsedResponse.data
  })
  this.props.history.push("/home")
}

handleSignupChange = (e) => {
  console.log("handlesignupchange")
    this.setState({
    [e.currentTarget.name]: e.currentTarget.value
  })
}








  render () {
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path={'/'} component={ Splash } />
          <Route exact path={'/login'} render={() => <Login handleLoginSubmit={this.handleLoginSubmit} handleLoginChange={this.handleLoginChange} />} />
          <Route exact path={'/signup'} render={() => <Signup handleSignupSubmit={this.handleSignupSubmit} handleSignupChange={this.handleSignupChange} />} />
          <Route exact path={'/home'} render={(props) => <Home currentUser={this.state.currentUser} {...props}/>} />
          <Route exact path={'/edit'} render={() => <Edit currentUser={this.state.currentUser}  updateCurrentUser={this.updateCurrentUser}/>} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
