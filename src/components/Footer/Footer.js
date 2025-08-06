import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-column">
          <h4>Nexus Solutions</h4>
          <p>Transforming businesses through innovative technology solutions since 2008.</p>
        </div>
        
        <div className="footer-column">
          <h4>Services</h4>
          <ul className="footer-links">
            <li><a href="https://www.google.com">Web Development</a></li>
            <li><a href="https://www.google.com">Mobile Apps</a></li>
            <li><a href="https://www.google.com">Cloud Services</a></li>
            <li><a href="https://www.google.com">Data Analytics</a></li>
            <li><a href="https://www.google.com">Cyber Security</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4>Company</h4>
          <ul className="footer-links">
            <li><a href="https://www.google.com">About Us</a></li>
            <li><a href="https://www.google.com">Careers</a></li>
            <li><a href="https://www.google.com">Blog</a></li>
            <li><a href="https://www.google.com">Press</a></li>
            <li><a href="https://www.google.com">Partners</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4>Resources</h4>
          <ul className="footer-links">
            <li><a href="https://www.google.com">Documentation</a></li>
            <li><a href="https://www.google.com">Support</a></li>
            <li><a href="https://www.google.com">API Status</a></li>
            <li><a href="https://www.google.com">Case Studies</a></li>
            <li><a href="https://www.google.com">Tutorials</a></li>
          </ul>
        </div>
      </div>
      
      <div className="copyright">
        <p>&copy; 2023 Nexus Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;