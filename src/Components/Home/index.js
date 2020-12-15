import React, { Component } from 'react'
import Map from './Map'
import { Redirect } from 'react-router-dom'

class Home extends Component {

    state = {
        location: "",
        dispensaries: [],
        juiceBxDispensaries: [],
        edit: "",
        delete: "",
        currentUser: "",
        isLogged: false
    }

    // async componentDidMount() {
    //     console.log('did mount')
    //     this.juiceBx()

    // }

    // juiceBx = async () => {
    //     console.log('hitt')
    //     const getJuiceBx = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/api/locations`,{
    //         method: "GET",
    //         credentials: "include",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     });
    //     const parsedResponse = await getJuiceBx.json();
    //     this.setState({
    //       juiceBxDispensaries: parsedResponse.data
    //     })
    //     // this.props.history.push("/home")
    // }

    handleButtonClick = async (e) => {
        e.preventDefault()
        const dispensaries = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/api/`, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(responseJSON => {
            this.setState({
                dispensaries: responseJSON.businesses
            })
        })
        // const dispensariesParsed = dispensaries.json()
        // console.log(dispensariesParsed)
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
     doUpdateCurrentUser = user => {
         this.setState({
             currentUser: user
         })
     }
     loginUser = user => {
         this.setState({
             currentUser: user,
             isLogged: true
         })
     }
     signupUser = user => {
         this.setState({
             currentUser: user,
             isLogged: true
         })
     }
     logoutUser = async () => {
         try {
             const logout = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/logout`)
             const parsedLogout = await logout.json()
             console.log(parsedLogout, "hitting parsedLogoutttt")
             this.setState({
                 currentUser: {},
                 isLogged: false
             })
         } catch (error) {
             console.log(error)
         }
     }

     delete =  async (e) => {
         console.log('hitting')
         const deleteUser= await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/${this.props.currentUser.id}`,{
             method: "DELETE",
             credentials: "include",
             headers: {
                "Content-Type": "application/json"
             }
         })
         .then(response => response.json)
         .then(responseJSON => {
             this.setState({
                 currentUser: ""
             })
             this.props.history.push("/")
         })
     }

    editPage = async () => {
        this.props.history.push('/edit')
     }

    render() {
        console.log(this.state.juiceBxDispensaries)
        return (
            <div>
                <h1>Welcome {this.props.currentUser.username}</h1>
                <Map dispensaries={this.state.dispensaries} juiceBx={this.state.juiceBxDispensaries} />
                <form onSubmit={this.handleButtonClick}>
                    <input type="text" name="location" placeholder="Pick a location" onChange={this.handleChange}></input>
                    <button type="submit">
                        Click for dispensaries
                    </button>
                </form>
                <div className="homeButton">
                    <button onClick={this.editPage}>Edit Profile</button>
                    <button onClick={this.delete}>Delete Profile</button>
                </div>
            </div>
        )
    }
}


export default Home
