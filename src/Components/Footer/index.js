import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faInstagram } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import './footer.css'

const instagramColor= "rgb(255,255,255)"

 class Footer extends Component {
    
    render() {
        return (
            <body>
                <div className="content">
                    <footer className="footer">
                        <a href="https://www.instagram.com/juicebxok/">
                            <FontAwesomeIcon className="icon" icon={faInstagram} color={instagramColor} size="5x" />
                                     <faInstagram className="shares-instagram"/>
                        </a>
                    </footer>
                </div>
            </body> 
        )
    }
}

export default Footer
