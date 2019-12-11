import React from 'react'
import juice from './juicebx.jpg'
import './splash.css' 

const Splash = () => {
    return (
        <div className="splash">
            <h1>JuiceBx</h1>
            <img src={juice}></img>
        </div>
    )
}

export default Splash
