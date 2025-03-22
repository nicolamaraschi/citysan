import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (showDropdown) setShowDropdown(false);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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

  // Chiudi il menu se si clicca all'esterno
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav-menu') && !event.target.closest('.mobile-menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo-container">
          <Link to="/">
            <div className="logo">
              <img src="/Citysan-HQ.jpg" alt="Citysan Logo" className="logo-image" />
            </div>
          </Link>
        </div>
        
        <div className={`mobile-menu-button ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <nav className={isMenuOpen ? "nav-menu open" : "nav-menu"}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="nav-link">
                <span className="nav-link-icon home-icon"></span>
                <span className="nav-link-text">HOME</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/chi-siamo" onClick={() => setIsMenuOpen(false)} className="nav-link">
                <span className="nav-link-icon about-icon"></span>
                <span className="nav-link-text">CHI SIAMO</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link" onClick={toggleDropdown}>
                <span className="nav-link-icon products-icon"></span>
                <span className="nav-link-text">PRODOTTI</span>
                <span className={`dropdown-arrow ${showDropdown ? 'open' : ''}`}></span>
              </a>
              {showDropdown && (
                <ul className="dropdown-menu">
                  <li><Link to="/prodotti/laundry-care" onClick={() => {setIsMenuOpen(false); setShowDropdown(false);}}>Laundry Care</Link></li>
                  <li><Link to="/prodotti/cleaning-house" onClick={() => {setIsMenuOpen(false); setShowDropdown(false);}}>Cleaning House</Link></li>
                  <li><Link to="/prodotti/wet-wipes" onClick={() => {setIsMenuOpen(false); setShowDropdown(false);}}>Wet Wipes</Link></li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <Link to="/contatti" onClick={() => setIsMenuOpen(false)} className="nav-link">
                <span className="nav-link-icon contact-icon"></span>
                <span className="nav-link-text">CONTATTI</span>
              </Link>
            </li>
          </ul>
          
          <div className="nav-contact-info">
            <a href="tel:+390424550283" className="nav-contact-link">
              <span className="nav-contact-icon phone-icon"></span>
              <span>+39 0424 550283</span>
            </a>
            <a href="mailto:citysan@citysan.it" className="nav-contact-link">
              <span className="nav-contact-icon email-icon"></span>
              <span>citysan@citysan.it</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;