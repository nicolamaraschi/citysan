// Footer.js - Versione corretta
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <div className="footer-logo">
                <span className="footer-logo-text">CITYSAN</span>
              </div>
              <p className="footer-tagline">
                Prodotti per la pulizia domestica di alta qualità
                <span className="made-in-italy">Made in Italy</span>
              </p>
              
              <address className="footer-address">
                <div className="address-item">
                  <span className="address-icon location-icon"></span>
                  <span>Via Verona, 11, 36020 Pove del Grappa (VI) – Italy</span>
                </div>
                <div className="address-item">
                  <span className="address-icon phone-icon"></span>
                  <span>Tel: +39 0424 550283</span>
                </div>
                <div className="address-item">
                  <span className="address-icon fax-icon"></span>
                  <span>Fax: +39 0424 1931519</span>
                </div>
                <div className="address-item">
                  <span className="address-icon email-icon"></span>
                  <span><a href="mailto:citysan@citysan.it">citysan@citysan.it</a></span>
                </div>
                <div className="address-item">
                  <span className="address-icon vat-icon"></span>
                  <span>P.IVA: IT03567020247</span>
                </div>
              </address>
            </div>
            
            <div className="footer-links">
              <div className="footer-links-column">
                <h3>Prodotti</h3>
                <ul>
                  <li><Link to="/prodotti/laundry-care">Laundry Care</Link></li>
                  <li><Link to="/prodotti/cleaning-house">Cleaning House</Link></li>
                  <li><Link to="/prodotti/wet-wipes">Wet Wipes</Link></li>
                </ul>
              </div>
              
              <div className="footer-links-column">
                <h3>Azienda</h3>
                <ul>
                  <li><Link to="/chi-siamo">Chi Siamo</Link></li>
                  <li><Link to="/contatti">Contatti</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="footer-newsletter">
              <h3>Certificazioni</h3>
              <p>Le nostre certificazioni attestano l'impegno continuo per la qualità e la sicurezza</p>
              
              <div className="footer-certifications">
                <div className="certification-icon iso-icon"></div>
                <div className="certification-icon ifs-icon"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              © 2023 Citysan Srl. Tutti i diritti riservati.
            </div>
            
            <div className="footer-legal-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/cookie-policy">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;