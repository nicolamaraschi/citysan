// AboutPreview.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPreview.css';

function AboutPreview() {
  return (
    <section className="about-preview">
      <div className="container">
        <div className="about-preview-content">
          <div className="about-preview-text">
            <h2>CHI SIAMO</h2>
            <div className="about-divider"></div>
            
            <div className="about-tagline">
              <span className="since-badge">Dal 2009</span>
              <h3>Esperti in prodotti per la pulizia domestica</h3>
            </div>
            
            <p className="about-description">
              Citysan è stata fondata nel 2009 in una sede di 1500 metri quadri e fin dall'inizio si è concentrata sulla progettazione, produzione e fornitura di prodotti di alta qualità con una completa tracciabilità delle sue materie prime; il suo vero vantaggio: flessibilità e capacità di cercare soluzioni innovative.
            </p>
            
            <div className="about-features">
              <div className="about-feature">
                <div className="feature-icon quality"></div>
                <div className="feature-content">
                  <h4>Qualità Certificata</h4>
                  <p>Standard ISO 9001:2015 e IFS-HPC Version 3</p>
                </div>
              </div>
              
              <div className="about-feature">
                <div className="feature-icon innovation"></div>
                <div className="feature-content">
                  <h4>Ricerca Costante</h4>
                  <p>Sviluppo continuo di soluzioni innovative</p>
                </div>
              </div>
            </div>
            
            <Link to="/chi-siamo" className="about-cta-button">
              <span>Scopri la nostra storia</span>
              <svg className="arrow-icon" viewBox="0 0 24 24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"></path>
              </svg>
            </Link>
          </div>
          
          <div className="about-preview-visual">
            <div className="about-image-container">
              <img src="/azienda.jpg" alt="Sede Citysan" className="about-image" />
              <div className="about-image-overlay"></div>
            </div>
            
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">15</div>
                <div className="stat-label">Anni di attività</div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">3500</div>
                <div className="stat-label">mq di sede</div>
              </div>
            </div>
            
            <div className="about-badge">Made in Italy</div>
          </div>
        </div>
      </div>
      
      <div className="about-background-elements">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
      </div>
    </section>
  );
}

export default AboutPreview;