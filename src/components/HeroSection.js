import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/video_homepage.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>
      <div className="container">
        <h1 className="hero-title">Un impegno verso innovazione e sostenibilità</h1>
        <p className="hero-subtitle">Prodotti per la pulizia efficaci e rispettosi dell'ambiente</p>
        <div className="hero-buttons">
          <Link to="/chi-siamo" className="hero-button primary">Scopri di più</Link>
          <Link to="/contatti" className="hero-button secondary">Contattaci</Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;