// Navbar.js
import React, { useState } from 'react';
import './navbar.css';

import Logo from '../images/hvaclogo.png'

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
      <img src={Logo} alt="hvac-logo" className="navbar-logo"/>
      </div>
      <div className={`navbar-menu ${isNavOpen ? 'open' : ''}`}>
        <div className="navbar-icon" onClick={toggleNav}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div className={`navbar-links ${isNavOpen ? 'open' : ''}`}>
        <a href="#home" onClick={toggleNav}>Home</a>
        <a href="#about" onClick={toggleNav}>About</a>
        <a href="#services" onClick={toggleNav}>Services</a>
        <a href="#contact" onClick={toggleNav}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;

