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

    handleSubmit = async (e) => {
        e.preventDefault()
        const editedUser = await fetch (`${process.env.REACT_APP_API_URL}/api/v1/users/${this.props.currentUser.id}`, {
            method: "PUT",
            credentials: "include",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const editUserParsed = await editedUser.json()
        console.log(editUserParsed)
        this.props.updateCurrentUser(editUserParsed)
    }
        
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="editClass">
                        <label>First Name</label>
                        <input type="text" name="firstName" placeholder={this.props.currentUser.firstName} onChange={this.handleEditChange} />
                        <label>Last Name</label>
                        <input type="text" name="lastName" placeholder={this.props.currentUser.lastName} onChange={this.handleEditChange} />
                        <label>Username</label>
                        <input type="text" name="username" placeholder={this.props.currentUser.username} onChange={this.handleEditChange} />
                        <label>Email</label>
                        <input type="text" name="email" placeholder={this.props.currentUser.email} onChange={this.handleEditChange} />
                        <label>Location</label>
                        <input type="text" name="location" placeholder={this.props.currentUser.location} onChange={this.handleEditChange} />
                        <button type="submit">submit</button>  
                    </div>
                </form>
            </div>
        )
    }
}

export default Edit
