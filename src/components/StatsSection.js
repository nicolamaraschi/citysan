// StatsSection.js
import React from 'react';
import '../styles/StatsSection.css';
import { useInView } from 'react-intersection-observer';

function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="stats-section" ref={ref}>
      <div className="container">
        <div className="stats-header">
          <h2>I NOSTRI NUMERI</h2>
          <div className="stats-divider"></div>
          <p className="stats-subtitle">Risultati concreti che raccontano la nostra storia</p>
        </div>
        
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon years-icon"></div>
            <div className={inView ? "stat-number animate" : "stat-number"} data-target="15">
              {inView ? '15' : '0'}
            </div>
            <div className="stat-label">ANNI DI ATTIVITÀ</div>
            <div className="stat-description">Dal 2009 al servizio dei clienti</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon production-icon"></div>
            <div className={inView ? "stat-number animate" : "stat-number"} data-target="20">
              {inView ? '20' : '0'}
              <span className="stat-unit">Mil.</span>
            </div>
            <div className="stat-label">CONFEZIONI PRODOTTE ALL'ANNO</div>
            <div className="stat-description">Qualità e quantità per ogni esigenza</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon material-icon"></div>
            <div className={inView ? "stat-number animate" : "stat-number"} data-target="15">
              {inView ? '15' : '0'}
              <span className="stat-unit">Mil.</span>
            </div>
            <div className="stat-label">MQ DI TNT LAVORATO</div>
            <div className="stat-description">Materiali selezionati e di alta qualità</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon clients-icon"></div>
            <div className={inView ? "stat-number animate" : "stat-number"} data-target="25">
              {inView ? '25' : '0'}
            </div>
            <div className="stat-label">INSEGNE INTERNAZIONALI FORNITE</div>
            <div className="stat-description">Fiducia da parte di grandi marchi</div>
          </div>
        </div>
      </div>
      
      <div className="stats-background">
        <div className="stats-shape shape1"></div>
        <div className="stats-shape shape2"></div>
        <div className="stats-shape shape3"></div>
      </div>
    </section>
  );
}

export default StatsSection;