// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router'; // Import Link from react-router-dom
import './Navbar.css';

const Navbar = ({ hidden }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('.nav-links') && !e.target.closest('.hamburger')) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className={`navbar ${hidden ? 'hidden' : ''}`}>
      <Link to="/" className="logo">
        <span className="logo-icon">⚡</span>
        Dinesh Steel Works
      </Link>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gallery">Gallery</Link></li> {/* Added Gallery link */}
        <li><a href="#features">Features</a></li>
        <li><a href="#solutions">Solutions</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="hamburger" onClick={(e) => {
        e.stopPropagation();
        toggleMenu();
      }}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;