import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    useNavigate
  } from "react-router-dom";
import DrawerComponent from './Drawer';
import './Navbar.css'

function Navbar () {
    const navigate = useNavigate();

    return (   
            <div className = "navbar_cont">
                <a className='logo'>JOSH</a>
                <div className="navbutton_cont">
                    <nav>
                        <button onClick = {() => navigate('/') } className = 'navButton'>Home</button>
                        <button onClick = {() => navigate('/about') } className = 'navButton'>About</button>
                        <button onClick = {() => navigate('/work') } className = 'navButton'>Work</button>
                        <button onClick = {() => navigate('/interests') } className = 'navButton'>Interests</button>
                        
                    </nav>
                </div>
                <DrawerComponent />
            </div>
    )
}

export default Navbar

