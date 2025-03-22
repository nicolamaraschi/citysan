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
        <div className="stats-grid">
          <div className="stat-item">
            <div className={inView ? "stat-number animate" : "stat-number"} data-target="15">
              {inView ? '15' : '0'}
            </div>
            <div className="stat-label">ANNI DI ATTIVITA'</div>
          </div>
          <div className="stat-item">
            <div className={inView ? "stat-number animate" : "stat-number"} data-target="20">
              {inView ? '20' : '0'}
            </div>
            <div className="stat-label">DI CONFEZIONI PROD. ALL'ANNO</div>
            <div className="stat-unit">Mil.</div>
          </div>
          <div className="stat-item">
            <div className={inView ? "stat-number animate" : "stat-number"} data-target="15">
              {inView ? '15' : '0'}
            </div>
            <div className="stat-label">DI MQ DI TNT LAVORATO</div>
            <div className="stat-unit">Mil.</div>
          </div>
          <div className="stat-item">
            <div className={inView ? "stat-number animate" : "stat-number"} data-target="25">
              {inView ? '25' : '0'}
            </div>
            <div className="stat-label">INSEGNE INTERNAZ. FORNITE</div>
            <div className="stat-unit">Mil.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
