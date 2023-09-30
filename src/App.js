import React from 'react';
import './App.scss';
import json_data from './data/data.json';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from 'react-router-dom';

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';

function App() {
  return (
    <Router>
      <Menu/>
      <Hero/>

      <div className="mainContainer">
        <Routes>
          <Route path="/about" element={<AboutPage/>} exact/>
          <Route path="/login" element={<LoginPage/>} exact/>
          <Route path="/" element={<HomePage data={json_data}/>} exact/>
        </Routes>
      </div>
      
      <Footer/>
    </Router>
  );
}

export default App;
