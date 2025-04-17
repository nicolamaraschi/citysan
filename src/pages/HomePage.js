// HomePage.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import MissionSection from '../components/MissionSection';
import AboutPreview from '../components/AboutPreview';
import ProductsOverviewSection from '../components/ProductsOverviewSection';
import QualityCommitmentSection from '../components/QualityCommitmentSection';
import StatsSection from '../components/StatsSection';
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      
      <div className="section-what-we-do">
        <div className="container">
          <h2>COSA FACCIAMO</h2>
          <p>Articoli per la pulizia della casa MADE IN ITALY efficaci ed efficienti!!</p>
        </div>
      </div>
      
      <MissionSection />
      
      <ProductsOverviewSection />
      
      <AboutPreview />
      
      <QualityCommitmentSection />
      
      <StatsSection />
    </div>
  );
}

export default HomePage;