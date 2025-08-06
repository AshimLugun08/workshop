import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import LandingAnimation from './components/LandingAnimation/LandingAnimation';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage'; // We'll create this
import GalleryPage from './pages/GalleryPage/gallery'; // We'll create this
import './App.css';
import ProductGalleryPage from './pages/ProductGalleryPage/ProductGalleryPage';

function App() {
  const [showMainContent, setShowMainContent] = useState(false);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Prevent scrolling during landing animation
  useEffect(() => {
    if (!showMainContent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [showMainContent]);

  // Navbar scroll effect (only after animation)
  useEffect(() => {
    if (!showMainContent) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavbarHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setIsNavbarHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, showMainContent]);

  return (
    <Router>
      <div className="App">
        {!showMainContent ? (
          <LandingAnimation onComplete={() => setShowMainContent(true)} />
        ) : (
          <>
            <Navbar hidden={isNavbarHidden} />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/gallery" element={<GalleryPage />} />
               <Route path="/products" element={<ProductGalleryPage />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;