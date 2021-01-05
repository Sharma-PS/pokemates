import React from 'react'
import { NavLink, Link } from 'react-router-dom'


const Navbar = () =>{
    return(
        <nav className="nav-wrapper black darken-3">
            <div className="container">
                <a className="brand-logo" href="/home">Poke'Times</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;