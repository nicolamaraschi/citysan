// Aggiorna il tuo file MissionSection.js con questo codice
import React, { useEffect, useRef } from 'react';
import '../styles/MissionSection.css';

function MissionSection() {
  const missionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.2 }
    );
    
    const elements = document.querySelectorAll('.mission-animate');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="mission-section" ref={missionRef}>
      <div className="container">
        <div className="mission-content">
          <header className="mission-header mission-animate">
            <h2>LA NOSTRA MISSIONE</h2>
            <div className="mission-divider"></div>
          </header>
          
          <div className="mission-grid">
            <div className="mission-left">
              <div className="mission-text mission-animate">
                <p>
                  Citysan è un'azienda produttrice di articoli per la pulizia domestica Laundry e Cleaning in tessuto non tessuto. Utilizziamo tessuti tecnici all'avanguardia ai quali vengono conferite diverse funzionalità ed esclusivamente sostanze conformi alla normativa europea "REACH" Reg.1907/2006 CE.
                </p>
              </div>
              
              <div className="mission-highlights">
                <div className="highlight-item mission-animate">
                  <div className="highlight-icon nature-icon"></div>
                  <div className="highlight-content">
                    <h4>Rispetto per la natura</h4>
                    <p>Sostanze non tossiche nel rispetto dell'ambiente e della salute dei nostri consumatori.</p>
                  </div>
                </div>
                
                <div className="highlight-item mission-animate">
                  <div className="highlight-icon worker-icon"></div>
                  <div className="highlight-content">
                    <h4>Sicurezza sul lavoro</h4>
                    <p>Garantiamo un posto di lavoro continuamente migliorato con l'utilizzo di filtri e macchinari di ultima generazione.</p>
                  </div>
                </div>
                
                <div className="highlight-item mission-animate">
                  <div className="highlight-icon trace-icon"></div>
                  <div className="highlight-content">
                    <h4>Tracciabilità completa</h4>
                    <p>Assicuriamo una completa rintracciabilità di tutte le materie prime utilizzate.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mission-right">
              <div className="mission-pillars mission-animate">
                <div className="mission-pillar">
                  <div className="pillar-icon eco-icon"></div>
                  <span>Sostenibilità</span>
                </div>
                <div className="mission-pillar">
                  <div className="pillar-icon safety-icon"></div>
                  <span>Sicurezza</span>
                </div>
                <div className="mission-pillar">
                  <div className="pillar-icon quality-icon"></div>
                  <span>Qualità</span>
                </div>
                <div className="mission-pillar">
                  <div className="pillar-icon innovation-icon"></div>
                  <span>Innovazione</span>
                </div>
              </div>
              
              <div className="mission-statement mission-animate">
                <h3>La nostra missione</h3>
                <p>Processo di miglioramento continuo rispettando la Natura, senza uso di sostanze tossiche ma cercando di aumentare l'uso di materiali riciclati con un'attenzione costante alla qualità.</p>
              </div>
              
              <div className="mission-certifications mission-animate">
                <div className="certification-badge">
                  <div className="certification-icon reach-icon"></div>
                  <span>REACH<br/>COMPLIANCE</span>
                </div>
                <div className="certification-badge">
                  <div className="certification-icon eco-friendly-icon"></div>
                  <span>ECO<br/>FRIENDLY</span>
                </div>
                <div className="certification-badge">
                  <div className="certification-icon recycled-icon"></div>
                  <span>MATERIALI<br/>RICICLATI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mission-background">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-dots"></div>
      </div>
    </section>
  );
}

export default MissionSection;