import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <div className="footer-logo">
                <Link to="/">
                  <span className="footer-logo-text">CITYSAN</span>
                </Link>
              </div>
              <p className="footer-tagline">
                Prodotti per la pulizia domestica efficaci ed efficienti
                <span className="made-in-italy">MADE IN ITALY</span>
              </p>
              <address className="footer-address">
                <div className="address-item">
                  <span className="address-icon location-icon"></span>
                  <span>Via Verona, 11 - 36020 Pove del Grappa (VI) – Italy</span>
                </div>
                <div className="address-item">
                  <span className="address-icon phone-icon"></span>
                  <a href="tel:+390424550283">+39 0424 550283</a>
                </div>
                <div className="address-item">
                  <span className="address-icon fax-icon"></span>
                  <span>Fax: +39 0424 1931519</span>
                </div>
                <div className="address-item">
                  <span className="address-icon email-icon"></span>
                  <a href="mailto:citysan@citysan.it">citysan@citysan.it</a>
                </div>
                <div className="address-item">
                  <span className="address-icon vat-icon"></span>
                  <span>P.IVA: IT03567020247</span>
                </div>
              </address>
            </div>
            
            <div className="footer-links">
              <div className="footer-links-column">
                <h3>Navigazione</h3>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/chi-siamo">Chi siamo</Link></li>
                  <li><Link to="/contatti">Contatti</Link></li>
                </ul>
              </div>
              
              <div className="footer-links-column">
                <h3>Prodotti</h3>
                <ul>
                  <li><Link to="/prodotti/laundry-care">Laundry Care</Link></li>
                  <li><Link to="/prodotti/cleaning-house">Cleaning House</Link></li>
                  <li><Link to="/prodotti/wet-wipes">Wet Wipes</Link></li>
                </ul>
              </div>
              
              <div className="footer-links-column">
                <h3>Certificazioni</h3>
                <ul>
                  <li><Link to="/certificazioni/iso">ISO 9001:2015</Link></li>
                  <li><Link to="/certificazioni/ifs">IFS-HPC Version 3</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="footer-newsletter">
              <h3>Newsletter</h3>
              <p>Iscriviti per ricevere aggiornamenti sui nostri prodotti</p>
              <form className="newsletter-form">
                <input type="email" placeholder="La tua email" required />
                <button type="submit">Iscriviti</button>
              </form>
              <div className="footer-certifications">
                <div className="certification-icon iso-icon" title="ISO 9001:2015"></div>
                <div className="certification-icon ifs-icon" title="IFS-HPC Version 3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              &copy; {currentYear} CITYSAN - Tutti i diritti riservati
            </div>
            <div className="footer-legal-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/cookies">Cookie Policy</Link>
              <Link to="/terms">Termini e Condizioni</Link>
            </div>
            <div className="footer-credits">
              Sito by Kernecomputer
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;