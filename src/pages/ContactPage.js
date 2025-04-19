// ContactPage.js - con effetto parallax a pagina intera
import React, { useEffect, useRef, useState } from 'react';
import Map from '../components/Map';
import ContactForm from '../components/ContactForm';
import '../styles/ContactPage.css';

function ContactPage() {
  const parallaxRef = useRef(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
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

  const handleFormSubmit = (formData) => {
    // Qui gestiresti l'invio dei dati del form
    console.log("Form inviato:", formData);
    setFormSubmitted(true);
    
    // Resetta lo stato dopo 5 secondi
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

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
      
      {/* Sezione Mappa */}
      <section className="map-section">
        <div className="container">
          <div className="section-header">
            <h2>Dove trovarci</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="map-container fade-in-up">
            <Map 
              center={[45.7676, 11.7528]} 
              zoom={15}
              markerPosition={[45.7676, 11.7528]}
              markerTitle="CitySan"
            />
          </div>
        </div>
      </section>
      
      {/* Sezione Form di contatto */}
      <section className="contact-form-section">
        <div className="container">
          <div className="section-header">
            <h2>Inviaci un messaggio</h2>
            <div className="section-divider"></div>
            <p className="section-description">Compila il form sottostante e ti risponderemo al più presto.</p>
          </div>
          
          <div className="form-container fade-in-up">
            {formSubmitted ? (
              <div className="form-success-message">
                <i className="fas fa-check-circle"></i>
                <h3>Messaggio inviato con successo!</h3>
                <p>Ti risponderemo al più presto.</p>
              </div>
            ) : (
              <ContactForm onSubmit={handleFormSubmit} />
            )}
          </div>
        </div>
      </section>
      
      <section className="business-hours-section">
  <div className="container">
    <div className="section-header">
      <h2 className="glow-text">Orari di apertura</h2>
      <div className="section-divider animated-divider"></div>
    </div>
    
    <div className="business-hours-showcase">
      <div className="hours-card-container">
        <div className="hours-card fade-in-up">
          <div className="hours-header">
            <div className="clock-icon pulse">
              <i className="fas fa-clock"></i>
            </div>
            <h3>I nostri orari</h3>
          </div>
          
          <div className="schedule-container">
            <div className="day-schedule weekday">
              <div className="day-label">
                <span className="day-badge">LUN - VEN</span>
                <div className="day-line"></div>
              </div>
              <div className="time-slots">
                <div className="time-slot">
                  <span className="time-icon"><i className="fas fa-sun"></i></span>
                  <span className="time-range">08:30 - 12:30</span>
                </div>
                <div className="time-slot">
                  <span className="time-icon"><i className="fas fa-moon"></i></span>
                  <span className="time-range">14:00 - 18:00</span>
                </div>
              </div>
            </div>
            
            <div className="day-schedule saturday">
              <div className="day-label">
                <span className="day-badge">SABATO</span>
                <div className="day-line"></div>
              </div>
              <div className="time-slots">
                <div className="time-slot">
                  <span className="time-icon"><i className="fas fa-sun"></i></span>
                  <span className="time-range">09:00 - 12:00</span>
                </div>
              </div>
            </div>
            
            <div className="day-schedule sunday">
              <div className="day-label">
                <span className="day-badge closed">DOMENICA</span>
                <div className="day-line"></div>
              </div>
              <div className="time-slots">
                <div className="time-slot closed">
                  <span className="closed-icon"><i className="fas fa-door-closed"></i></span>
                  <span className="closed-text">Chiuso</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hours-footer">
            <div className="current-status open">
              <span className="status-dot"></span>
              <span className="status-text">Siamo aperti ora</span>
            </div>
            <button className="appointment-btn">
              <i className="fas fa-calendar-alt"></i>
              <span>Prenota un appuntamento</span>
            </button>
          </div>
        </div>
        
        <div className="hours-info-sidebar fade-in-up delay-300">
          <div className="info-box">
            <div className="info-icon">
              <i className="fas fa-info-circle"></i>
            </div>
            <div className="info-content">
              <h4>Info utili</h4>
              <p>Per urgenze fuori orario chiamare il nostro numero di emergenza.</p>
              <div className="emergency-number">
                <i className="fas fa-phone-alt"></i>
                <span>+39 348 123 4567</span>
              </div>
            </div>
          </div>
          
          <div className="holiday-notice">
            <div className="notice-icon">
              <i className="fas fa-calendar-day"></i>
            </div>
            <p>Durante i giorni festivi la sede resterà chiusa.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style jsx>{`
  /* Stili innovativi per la sezione orari */
  .business-hours-section {
    padding: 80px 0;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    position: relative;
    overflow: hidden;
  }
  
  .business-hours-section::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(52, 152, 219, 0.1) 0%, rgba(52, 152, 219, 0) 70%);
    border-radius: 50%;
    z-index: 1;
    transform: translate(30%, -30%);
  }
  
  .glow-text {
    position: relative;
    font-size: 2.5rem;
    font-weight: 800;
    color: #2c3e50;
    letter-spacing: 1px;
    text-shadow: 0 0 20px rgba(52, 152, 219, 0.2);
  }
  
  .animated-divider {
    height: 4px;
    width: 80px;
    background: linear-gradient(90deg, #3498db, #2ecc71);
    margin: 0 auto;
    position: relative;
    border-radius: 2px;
    animation: dividerPulse 3s infinite;
  }
  
  @keyframes dividerPulse {
    0%, 100% { width: 80px; opacity: 1; }
    50% { width: 100px; opacity: 0.8; }
  }
  
  .business-hours-showcase {
    margin-top: 40px;
    position: relative;
    z-index: 2;
  }
  
  .hours-card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    max-width: 900px;
    margin: 0 auto;
  }
  
  .hours-card {
    background: white;
    border-radius: 16px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
    padding: 30px;
    flex: 1;
    min-width: 320px;
    max-width: 500px;
    transform-style: preserve-3d;
    transition: all 0.4s ease;
    border: 1px solid rgba(52, 152, 219, 0.1);
  }
  
  .hours-card:hover {
    transform: translateY(-10px) rotate3d(1, 1, 0, 2deg);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.14), 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .hours-header {
    display: flex;
    align-items: center;
    gap: 15px;
    padding-bottom: 20px;
    border-bottom: 1px solid #f1f1f1;
    margin-bottom: 25px;
  }
  
  .clock-icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #3498db, #2980b9);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 22px;
    box-shadow: 0 5px 15px rgba(52, 152, 219, 0.4);
  }
  
  .pulse {
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(52, 152, 219, 0.7); }
    70% { box-shadow: 0 0 0 10px rgba(52, 152, 219, 0); }
    100% { box-shadow: 0 0 0 0 rgba(52, 152, 219, 0); }
  }
  
  .hours-header h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #2c3e50;
    margin: 0;
  }
  
  .schedule-container {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
  
  .day-schedule {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .day-label {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  
  .day-badge {
    padding: 6px 12px;
    background: #f8f9fa;
    border-radius: 6px;
    font-size: 0.85rem;
    font-weight: 600;
    color: #495057;
    letter-spacing: 0.5px;
    min-width: 100px;
    text-align: center;
    border: 1px solid #e9ecef;
    transition: all 0.3s ease;
  }
  
  .weekday .day-badge {
    background: rgba(52, 152, 219, 0.1);
    color: #3498db;
    border-color: rgba(52, 152, 219, 0.2);
  }
  
  .saturday .day-badge {
    background: rgba(46, 204, 113, 0.1);
    color: #2ecc71;
    border-color: rgba(46, 204, 113, 0.2);
  }
  
  .sunday .day-badge.closed {
    background: rgba(231, 76, 60, 0.1);
    color: #e74c3c;
    border-color: rgba(231, 76, 60, 0.2);
  }
  
  .day-line {
    flex: 1;
    height: 1px;
    background: #e9ecef;
  }
  
  .time-slots {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-left: 115px;
  }
  
  .time-slot {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .time-icon {
    width: 28px;
    height: 28px;
    background: #f8f9fa;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6c757d;
    font-size: 12px;
  }
  
  .weekday .time-icon {
    color: #3498db;
  }
  
  .saturday .time-icon {
    color: #2ecc71;
  }
  
  .time-range {
    font-size: 1.05rem;
    color: #495057;
    font-weight: 500;
  }
  
  .time-slot.closed {
    color: #e74c3c;
  }
  
  .closed-icon {
    width: 28px;
    height: 28px;
    background: rgba(231, 76, 60, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #e74c3c;
    font-size: 12px;
  }
  
  .closed-text {
    font-size: 1.05rem;
    color: #e74c3c;
    font-weight: 500;
  }
  
  .hours-footer {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;
  }
  
  .current-status {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .status-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #e74c3c;
  }
  
  .current-status.open .status-dot {
    background: #2ecc71;
    box-shadow: 0 0 0 4px rgba(46, 204, 113, 0.2);
    animation: statusPulse 2s infinite;
  }
  
  @keyframes statusPulse {
    0% { box-shadow: 0 0 0 0 rgba(46, 204, 113, 0.4); }
    70% { box-shadow: 0 0 0 6px rgba(46, 204, 113, 0); }
    100% { box-shadow: 0 0 0 0 rgba(46, 204, 113, 0); }
  }
  
  .status-text {
    font-size: 0.95rem;
    font-weight: 600;
    color: #2ecc71;
  }
  
  .current-status:not(.open) .status-text {
    color: #e74c3c;
  }
  
  .appointment-btn {
    padding: 10px 18px;
    background: linear-gradient(135deg, #3498db, #2980b9);
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(52, 152, 219, 0.3);
  }
  
  .appointment-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(52, 152, 219, 0.4);
    background: linear-gradient(135deg, #2980b9, #2573a7);
  }
  
  .hours-info-sidebar {
    flex: 1;
    min-width: 250px;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .info-box {
    background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
    border-radius: 12px;
    padding: 20px;
    color: white;
    box-shadow: 0 10px 20px rgba(52, 152, 219, 0.3);
    display: flex;
    gap: 15px;
  }
  
  .info-icon {
    font-size: 24px;
    color: white;
    opacity: 0.9;
  }
  
  .info-content h4 {
    margin: 0 0 10px 0;
    font-size: 1.1rem;
    font-weight: 600;
  }
  
  .info-content p {
    margin: 0 0 15px 0;
    opacity: 0.9;
    font-size: 0.95rem;
    line-height: 1.5;
  }
  
  .emergency-number {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 15px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.95rem;
  }
  
  .holiday-notice {
    background: #f8f9fa;
    border-radius: 12px;
    padding: 20px;
    border: 1px solid #e9ecef;
    display: flex;
    gap: 15px;
    align-items: center;
  }
  
  .notice-icon {
    width: 40px;
    height: 40px;
    background: rgba(241, 196, 15, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f1c40f;
    font-size: 18px;
  }
  
  .holiday-notice p {
    margin: 0;
    font-size: 0.95rem;
    color: #495057;
    line-height: 1.5;
  }
  
  @media (max-width: 768px) {
    .hours-card-container {
      flex-direction: column;
    }
    
    .hours-card, .hours-info-sidebar {
      max-width: 100%;
    }
    
    .time-slots {
      padding-left: 15px;
    }
    
    .day-label {
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
    }
    
    .day-badge {
      width: 100%;
    }
    
    .day-line {
      display: none;
    }
    
    .hours-footer {
      flex-direction: column;
      align-items: flex-start;
    }
    
    .appointment-btn {
      width: 100%;
      justify-content: center;
    }
  }
`}</style>

    </div>

    
  );
}

export default ContactPage;