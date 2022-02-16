import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
import './Navbar.css'

function Navbar () {
    return (
        <Router>    
            <div className = "navbar_cont">
                <a className='logo'>JOSH</a>
                <div className="navbutton_cont">
                    <nav>
                        <Link to='/' className = 'navButton'>Home</Link>
                        <Link to='/About' className = 'navButton'>About</Link>
                        <Link to='/Interests' className = 'navButton'>Interests</Link>
                        <Link to='/work' className = 'navButton'>work</Link>
                    </nav>
                </div>
            </div>
        </Router>
    )
}

export default Navbar

