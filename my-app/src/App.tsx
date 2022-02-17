import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Work from './pages/Work';
import Interests from './pages/Interests';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = 'about' element = {<About />} />
        <Route path = 'work' element = {<Work />} />
        <Route path = 'interests' element = {<Interests />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
