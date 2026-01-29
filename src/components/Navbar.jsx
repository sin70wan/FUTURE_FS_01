// components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span style={{ color: '#00ff00', fontWeight: 'bold', fontSize: '1.5rem' }}>
          ROOT@SECURE:~#
        </span>
      </div>
      <div className="nav-links">
        <a href="#about">ARCHITECT</a>
        <a href="#skills">ARSENAL</a>
        <a href="#contact">CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;