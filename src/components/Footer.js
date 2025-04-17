// Header.js - Versione aggiornata con link sempre visibili
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Gestisce lo scroll e cambia lo stile della navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Chiude il menu mobile quando si clicca all'esterno
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.navbar') && !event.target.closest('.mobile-menu-toggle')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Gestisce i dropdown
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Chiude il menu mobile e il dropdown attivo
  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container container">
        <div className="logo-wrapper">
          <Link to="/" className="logo-link">
            <img src="/Citysan-HQ.jpg" alt="Citysan Logo" className="logo" />
          </Link>
        </div>

        <button 
          className={`mobile-menu-toggle ${menuOpen ? 'open' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </button>

        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/chi-siamo" className="nav-link" onClick={closeMenu}>
                Chi Siamo
              </Link>
            </li>
            <li className="nav-item dropdown">
              <button 
                className={`nav-link dropdown-toggle ${activeDropdown === 0 ? 'active' : ''}`} 
                onClick={() => toggleDropdown(0)}
              >
                Prodotti
                <svg className="dropdown-icon" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z"></path>
                </svg>
              </button>
              <div className={`dropdown-menu ${activeDropdown === 0 ? 'open' : ''}`}>
                <Link to="/prodotti/laundry-care" className="dropdown-item" onClick={closeMenu}>
                  Laundry Care
                </Link>
                <Link to="/prodotti/cleaning-house" className="dropdown-item" onClick={closeMenu}>
                  Cleaning House
                </Link>
                <Link to="/prodotti/wet-wipes" className="dropdown-item" onClick={closeMenu}>
                  Wet Wipes
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/contatti" className="nav-link" onClick={closeMenu}>
                Contatti
              </Link>
            </li>
          </ul>

          <div className="nav-buttons">
            <a href="tel:+390424550283" className="nav-contact-button phone">
              <svg className="button-icon" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
              </svg>
              <span className="button-text">+39 0424 550283</span>
            </a>
            <a href="mailto:citysan@citysan.it" className="nav-contact-button email">
              <svg className="button-icon" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
              <span className="button-text">Email</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;