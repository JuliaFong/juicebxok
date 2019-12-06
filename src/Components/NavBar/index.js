import React from 'react';
import { NavLink } from 'react-router-dom'
import './navbar.css'

const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink to={'/login'} className="nav-link">Login</NavLink>
            <NavLink to={'/signup'} className="nav-link">Sign Up</NavLink>
            <NavLink to={'/home'} className="nav-link">Home</NavLink>
        </div>
    );
}

export default NavBar