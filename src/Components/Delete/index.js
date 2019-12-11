import React, { Component } from 'react'
import './delete.css'

 class Delete extends Component {
     state = {
         firstName: "",
         lastName: "",
         username: "",
         email: "",
         location: ""
        }
        handleDeleteChange = (e) => {
            this.setState({
                [e.currentTarget.name]: e.currentTarget.value
            })
            
        }
    render() {
        return (
            <div>
                <form>
                    <label>First Name</label>
                    <input type="text" name="firstName" onChange={this.handleDeleteChange} />
                    <labe>Last Name</labe>
                    <input type="text" name="lastName" onChange={this.handleDeleteChange} />
                    <label>Username</label>
                    <input type="text" name="username" onChange={this.handleDeleteChange} />
                    <label>Email</label>
                    <input type="text" name="email" onChange={this.handleDeleteChange} />
                    <label>Location</label>
                    <input type="text" name="location" onChange={this.handleDeleteChange} />
                    <button type="submit">Submit Delete</button>
                </form>
            </div>
        )
    }
}

export default Delete
