// src/pages/HomePage.js
import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import StatsSection from '../../components/StatsSection/StatsSection';
import CtaSection from '../../components/CtaSection/CtaSection'
import ContactSection from '../../components/ContactSection/ContactSection'
import Footer from '../../components/Footer/Footer';
import ImageGallerySection from '../../components/ImageGallerySection/ImageGallerySection';

const HomePage = () => {
  return (
    <>
    <ImageGallerySection/>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default HomePage;