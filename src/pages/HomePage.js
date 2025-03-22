import React from 'react';
import HeroSection from '../components/HeroSection';
import MissionSection from '../components/MissionSection';
import ProductsSection from '../components/ProductsSection';
import CertificationsSection from '../components/CertificationsSection';
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
      <ProductsSection />
      <div className="about-preview">
        <div className="container">
          <h2>CHI SIAMO</h2>
          <p>
            Citysan è stata fondata nel 2009 in una sede di 1500 metri quadri e fin dall'inizio si è concentrata sulla progettazione, produzione e fornitura di prodotti di alta qualità con una completa tracciabilità delle sue materie prime; il suo vero vantaggio: flessibilità e capacità di cercare soluzioni innovative.
          </p>
          <a href="/chi-siamo" className="read-more-button">Continua a leggere</a>
        </div>
      </div>
      <CertificationsSection />
      <div className="contact-preview">
        <div className="container">
          <h2>CONTATTI</h2>
          <address>
            <p><strong>Via Verona, 11</strong></p>
            <p>36020 Pove del Grappa (VI) – Italy</p>
            <p>Partita I.V.A. IT03567020247</p>
            <p>Tel. +39 0424 550283</p>
            <p>Fax +39 0424 1931519</p>
            <p>citysan@citysan.it</p>
          </address>
          <h3>Dove siamo</h3>
        </div>
      </div>
      <StatsSection />
    </div>
  );
}

export default HomePage;
