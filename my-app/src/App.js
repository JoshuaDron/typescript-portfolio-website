
import './App.css';
import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import Home from './pages/Home';
import About from './pages/About';
import Interests from './pages/Interests';
import Work from './pages/Work'
import Navbar from './components/Navbar';


function App() {
  return (
      <Router>
      <Navbar />
      <Switch>
        <Route path="/">   
         <Home />
        </Route> 
        <Route path="/About"> 
          <About />
        </Route>
        <Route path="/Interests">   
         <Interests />
        </Route> 
        <Route path="/Work"> 
          <Work />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
