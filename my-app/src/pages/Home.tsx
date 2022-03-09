import React from 'react'
import { useNavigate } from 'react-router-dom';
import DrawerComponent from '../components/Drawer';
import portrait from '../img/portrait.png'

function Home() {
  const navigate = useNavigate();
  return (
  
    <div className="container">
      <div className="text-container">
        <h1 className='hello'>HELLO</h1>
        <p className='home-text'>My Name is Josh Dronfield. Welcome to my developer portfolio website!</p>
        <p className='home-text'>click below to learn more</p>
        <button onClick = {() => navigate('/about') } className = 'button' >learn more</button>
      </div>
        <img alt='portrait of Josh' className="portrait" src={String(portrait)} />
    </div>
  )
}

export default Home