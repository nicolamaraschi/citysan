// components/Footer.js - Componente per il footer del sito
import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-copyright">
            Tutti i diritti riservati - By Kernecomputer
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;