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
    <nav className={`navbar`}>
      <div>
        <img src={Logo} alt="hvac-logo" className="navbar-brand"/>
      </div>
      <div className='nav-button-container'>
        <div className='button-link' href="#home">Home</div>
        <div className='button-link' href="#about">About</div>
        <div className='button-link' href="#services">Services</div>
        <div className='button-link' href="#contact">Contact</div>
      </div>
    </nav>
  );
};

export default Navbar;
