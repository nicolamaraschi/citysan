// HomePage.js - Aggiornato con i nuovi componenti
import React from 'react';
import HeroSection from '../components/HeroSection';
import MissionSection from '../components/MissionSection';
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
      
      <div className="about-preview">
        <div className="container">
          <h2>CHI SIAMO</h2>
          <p>
            Citysan è stata fondata nel 2009 in una sede di 1500 metri quadri e fin dall'inizio si è concentrata sulla progettazione, produzione e fornitura di prodotti di alta qualità con una completa tracciabilità delle sue materie prime; il suo vero vantaggio: flessibilità e capacità di cercare soluzioni innovative.
          </p>
          <a href="/chi-siamo" className="read-more-button">Continua a leggere</a>
        </div>
      </div>
      
      <QualityCommitmentSection />
      
      <StatsSection />
    </div>
  );
}

export default HomePage;