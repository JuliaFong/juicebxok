import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import './footer.css'

const instagramColor= "rgb(255,255,255)"
const envelopeColor= "rgb(255,255,255)"
const phoneColor= "rgb(225,225,225)"

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
                        <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&su=Hi+There&to=juicebxllc@gmail.com&body=body+goes+here">
                            <FontAwesomeIcon className="icon" icon={faEnvelope} color={envelopeColor} size="5x" />
                                     <faEnvelope className="shares-envelope"/>
                        </a>
                        <a href="tel:918-984-7758">
                            <FontAwesomeIcon className="icon" icon={faPhone} color={phoneColor} size="5x" />
                                       <faPhone className="shares-phone"/>
                        </a>
                    </footer>
                </div>
            </body> 
        )
    }
}

export default Footer
