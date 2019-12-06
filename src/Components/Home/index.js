import React, { Component } from 'react'

class Home extends Component {

    REACT_APP_API_URL=http://localhost:8000
REACT_APP_YELP_CLIENT_ID=ijqZm8pw8DldP1D83wSGhw
REACT_APP_YELP_API_KEY=i_xBSMWjPy1HI16s4TUW43Nv6LswQKzMXYyNunNOzwJZBnWspqFVLzzU2aYaY6oI40vF_AxsiU2lPZbgGd0I5yuW6vQFMQDha8_UP0Dd94l-Qblgk7C3kNM8nazqXXYx
    
    render() {
        return (
            <div>
                <h1>Welcome {this.props.currentUser.username}</h1>
            </div>
        )
    }
}

export default Home
