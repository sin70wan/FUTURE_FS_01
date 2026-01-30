// components/Navbar.jsx
import React from 'react';

const Navbar = ({ activeSection, scrollToSection }) => {
  const navItems = [
    { id: 'hero', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'contact', label: 'CONTACT' }
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        <span style={{ color: '#00ff00', fontWeight: 'bold', fontSize: '1.5rem' }}>
          LT
        </span>
        <span style={{ color: '#ffffff', marginLeft: '10px', fontSize: '1.2rem' }}>
          Lina Temam
        </span>
      </div>
      <div className="nav-links">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.id);
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;