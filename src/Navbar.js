// src/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="nav-toggle" onClick={toggleNav}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className="nav-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">World</a></li>
        <li><a href="#">Politics</a></li>
        <li><a href="#">Business</a></li>
        <li><a href="#">Technology</a></li>
        <li><a href="#">Science</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
