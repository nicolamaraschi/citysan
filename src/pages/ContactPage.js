import React from 'react';
import Map from '../components/Map';
import ContactForm from '../components/ContactForm';
import '../styles/ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1>CONTATTI</h1>
        </div>
      </div>
      
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info">
            <address>
              <p><strong>Via Verona, 11</strong></p>
              <p>36020 Pove del Grappa (VI) – Italy</p>
              <p>Partita I.V.A. IT03567020247</p>
              <p>Tel. +39 0424 550283</p>
              <p>Fax +39 0424 1931519</p>
              <p>citysan@citysan.it</p>
            </address>
          </div>
        </div>
      </section>
      
      <section className="map-section">
        <Map />
      </section>
      
      <section className="contact-form-section">
        <div className="container">
          <h2>Scrivici</h2>
          <ContactForm />
        </div>
      </section>
      
      <section className="privacy-section">
        <div className="container">
          <h3>INFORMATIVA EX ART.13 DEL REGOLAMENTO (UE) 2016/679 (General Data Protection Regulation)</h3>
          <h3>INFORMATION EX ART.13 OF THE REGULATION (UE) 2016/679 (General Data Protection Regulation)</h3>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
