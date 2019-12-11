import React, { Component } from 'react'
import Map from './Map'
import { Redirect } from 'react-router-dom'

class Home extends Component {
    state = {
        location: "",
        dispensaries: [],
        edit: "",
        delete: "",
        currentUser: "",
        isLogged: false
    }

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

     delete = () => {
        this.props.history.push('/delete')
     }

    editPage = async () => {
        this.props.history.push('/edit')
     }

    render() {
        return (
            <div>
                <h1>Welcome {this.props.currentUser.username}</h1>
                <Map dispensaries={this.state.dispensaries} />
                <form onSubmit={this.handleButtonClick}>
                    <input type="text" name="location" placeholder="Pick a location" onChange={this.handleChange}></input>
                    <button type="submit">
                        Click for dispensaries
                    </button>
                </form>
                    <input type="text" name="edit" onChange={this.handleChange} />
                    <button onClick={this.editPage}>=>Click to edit profile</button>
                    <button onClick={this.delete}>Click to delete</button>
            </div>
        )
    }
}


export default Home
