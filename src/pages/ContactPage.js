import React from 'react';
import Map from '../components/Map';
import ContactForm from '../components/ContactForm';
import '../styles/ContactPage.css';

function ContactPage() {
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
          
          <div className="company-image-wrapper fade-in">
            <img src="/azienda.jpg" alt="Sede Citysan" className="company-image" />
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
      
      <section className="map-section">
        <div className="map-overlay">
          <div className="map-info-box fade-in-left">
            <h3>La nostra sede</h3>
            <p>Vieni a trovarci! Siamo facilmente raggiungibili in auto.</p>
            <a href="https://maps.google.com/?q=Via+Verona+11+Pove+del+Grappa" className="map-button" target="_blank" rel="noopener noreferrer">
              Ottieni indicazioni
            </a>
          </div>
        </div>
        <Map />
      </section>
      
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-wrapper">
            <div className="contact-form-content fade-in-right">
              <div className="section-header">
                <h2>Scrivici</h2>
                <div className="section-divider"></div>
              </div>
              <p className="contact-form-intro">
                Hai domande sui nostri prodotti o servizi? Compila il modulo e ti risponderemo al più presto.
              </p>
              <ContactForm />
            </div>
            <div className="contact-form-illustration fade-in-left delay-300">
              <div className="contact-illustration-inner">
                <div className="contact-illustration-content">
                  <h3>Servizio Clienti</h3>
                  <p>Siamo sempre disponibili per rispondere alle tue domande e supportarti con i nostri prodotti.</p>
                  <ul className="illustration-list">
                    <li>Assistenza personalizzata</li>
                    <li>Risposta rapida</li>
                    <li>Supporto tecnico</li>
                    <li>Consulenza dedicata</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="privacy-section">
        <div className="container">
          <div className="privacy-content fade-in">
            <h3>INFORMATIVA EX ART.13 DEL REGOLAMENTO (UE) 2016/679</h3>
            <h3>INFORMATION EX ART.13 OF THE REGULATION (UE) 2016/679</h3>
            <p className="privacy-description">
              La tua privacy è importante per noi. Tutti i dati personali che ci fornisci tramite questo modulo saranno trattati in conformità con il Regolamento Generale sulla Protezione dei Dati (GDPR).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;