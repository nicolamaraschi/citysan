import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-container">
          <Link to="/">
            <div className="logo">CITYSAN</div>
          </Link>
        </div>
        
        <div className="mobile-menu-button" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <nav className={isMenuOpen ? "nav-menu open" : "nav-menu"}>
          <ul>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>HOME</Link></li>
            <li><Link to="/chi-siamo" onClick={() => setIsMenuOpen(false)}>Chi siamo</Link></li>
            <li><Link to="/contatti" onClick={() => setIsMenuOpen(false)}>Contatti</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
