import React, { Component } from 'react'
import './edit.css'

class Edit extends Component {
    state = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        location: ""
    }

    handleEditChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
        
    render() {
        return (
            <div>
                <form>
                    <label>First Name</label>
                    <input type="text" name="firstName" onChange={this.handleEditChange} />
                    <label>Last Name</label>
                    <input type="text" name="lastName" onChange={this.handleEditChange} />
                    <label>Username</label>
                    <input type="text" name="username"  onChange={this.handleEditChange} />
                    <label>Email</label>
                    <input type="text" name="email" onChange={this.handleEditChange} />
                    <label>Location</label>
                    <input type="text" name="location" onChange={this.handleEditChange} />
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

export default Edit
