import React from 'react';
import MatrixAnimation from '../Components/MatrixAnimation';
import HeroSection from '../Components/HeroSection';
import TechStackSection from '../Components/TechStackSection';
import CTASection from '../Components/CTASection';
import Footer from '../Components/Footer';
import './home.css';

function Home() {
  return (
    <>
      <MatrixAnimation />
      <HeroSection />
      <TechStackSection />
      <CTASection />
      <Footer />
    </>
  );
}

export default Home;
