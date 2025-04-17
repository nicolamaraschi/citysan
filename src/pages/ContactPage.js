// ContactPage.js - con effetto parallax a pagina intera
import React, { useEffect, useRef } from 'react';
import Map from '../components/Map';
import ContactForm from '../components/ContactForm';
import '../styles/ContactPage.css';

function ContactPage() {
  const parallaxRef = useRef(null);
  
  useEffect(() => {
    // Funzione per gestire l'effetto parallax sulla pagina
    const handleParallax = () => {
      if (!parallaxRef.current) return;
      
      const scrollPosition = window.pageYOffset;
      const sectionPosition = parallaxRef.current.getBoundingClientRect().top + scrollPosition;
      const offset = scrollPosition - sectionPosition;
      const parallaxSpeed = 0.4; // Velocità del parallax
      
      if (scrollPosition > sectionPosition - window.innerHeight && 
          scrollPosition < sectionPosition + parallaxRef.current.offsetHeight) {
        // Applica la trasformazione solo quando la sezione è in vista
        parallaxRef.current.style.backgroundPositionY = `${offset * parallaxSpeed}px`;
      }
    };
    
    // Aggiungi event listener
    window.addEventListener('scroll', handleParallax);
    
    // Chiamata iniziale per posizionare l'immagine
    handleParallax();
    
    // Pulizia al dismount
    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1 className="fade-in-down">CONTATTI</h1>
          <p className="page-subtitle fade-in-up delay-200">Siamo qui per aiutarti</p>
        </div>
      </div>
      
      <section className="contact-info-section">
        <div className="container">
          <div className="section-header">
            <h2>La nostra sede</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="company-parallax-section" ref={parallaxRef}>
            <div className="company-overlay">
              <div className="company-badge">Dal 2009</div>
            </div>
          </div>
          
          <div className="contact-cards">
            <div className="contact-card fade-in-up delay-100">
              <div className="contact-card-icon">
                <i className="contact-icon location"></i>
              </div>
              <h3>Indirizzo</h3>
              <p>Via Verona, 11</p>
              <p>36020 Pove del Grappa (VI) – Italy</p>
            </div>
            
            <div className="contact-card fade-in-up delay-300">
              <div className="contact-card-icon">
                <i className="contact-icon phone"></i>
              </div>
              <h3>Telefono</h3>
              <p>Tel. +39 0424 550283</p>
              <p>Fax +39 0424 1931519</p>
            </div>
            
            <div className="contact-card fade-in-up delay-500">
              <div className="contact-card-icon">
                <i className="contact-icon email"></i>
              </div>
              <h3>Email</h3>
              <p>citysan@citysan.it</p>
              <p>P.IVA: IT03567020247</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Resto del componente... */}
    </div>
  );
}

export default ContactPage;