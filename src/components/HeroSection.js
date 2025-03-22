import React from 'react';
import '../styles/HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), #0066cc' }}>
      <div className="container">
        <h1>Un impegno verso innovazione e sostenibilità</h1>
      </div>
    </section>
  );
}

export default HeroSection;
