import React, { useEffect, useRef } from 'react';
import './LandingAnimation.css';

const LandingAnimation = ({ onComplete }) => {
  const logoRef = useRef(null);
  const whiteFadeRef = useRef(null);
  const sparksContainerRef = useRef(null);

  useEffect(() => {
    // Create sparks
    for (let i = 0; i < 25; i++) {
      const spark = document.createElement('div');
      spark.className = 'spark';

      const angle = Math.random() * Math.PI * 2;
      const distance = 50 + Math.random() * 150;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;

      const angle2 = Math.random() * Math.PI * 2;
      const tx2 = tx + Math.cos(angle2) * 100;
      const ty2 = ty + Math.sin(angle2) * 100;

      spark.style.setProperty('--tx', `${tx}px`);
      spark.style.setProperty('--ty', `${ty}px`);
      spark.style.setProperty('--tx2', `${tx2}px`);
      spark.style.setProperty('--ty2', `${ty2}px`);
      spark.style.animationDelay = `${Math.random() * 2}s`;
      spark.style.animationDuration = `${1 + Math.random() * 2}s`;

      sparksContainerRef.current.appendChild(spark);
    }

    // Start exit animation after 3.5s
    const timer = setTimeout(() => {
      logoRef.current.classList.add('logo-exit');
      
      // Trigger completion after animation
      setTimeout(() => {
        onComplete();
      }, 800);
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="logo-container" ref={logoRef}>
      <div className="logo-wrapper">
        <div className="sparks" ref={sparksContainerRef}></div>
        <h1 className="company-name">DENISH STEEL WORKSHOP</h1>
        <p className="tagline">Precision Metalworking Since 1985</p>
      </div>
      <div id="whiteFade" ref={whiteFadeRef}></div>
    </div>
  );
};

export default LandingAnimation;