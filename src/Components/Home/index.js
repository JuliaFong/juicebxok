import React, { Component } from 'react'

class Home extends Component {
    state = {
        location: "",
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
        .then(responseJSON => console.log(responseJSON))
        // const dispensariesParsed = dispensaries.json()
        // console.log(dispensariesParsed)
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                <h1>Welcome {this.props.currentUser.username}</h1>
                <form onSubmit={this.handleButtonClick}>
                    <input type="text" name="location" placeholder="Pick a location" onChange={this.handleChange}></input>
                    <button type="submit">Click for dispensaries</button>
                </form>
            </div>
        )
    }
}


export default Home
