import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Transform Your Business with Digital Solutions</h1>
        <p>We help companies leverage technology to drive growth, increase efficiency, and stay ahead of the competition in today's digital landscape.</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Explore Solutions</button>
          <button className="btn btn-outline">View Case Studies</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Business Technology" />
      </div>
    </section>
  );
};

export default HeroSection;