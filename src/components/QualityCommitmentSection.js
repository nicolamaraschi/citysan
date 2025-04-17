// QualityCommitmentSection.js - Componente completo per la sezione certificazioni
import React from 'react';
import '../styles/QualityCommitmentSection.css';

function QualityCommitmentSection() {
  return (
    <section className="quality-commitment-section">
      <div className="container">
        <div className="section-header">
          <h2>LA NOSTRA QUALITÀ</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="quality-commitment">
          <h3>Il nostro impegno per la qualità</h3>
          
          <div className="commitment-grid">
            <div className="commitment-card">
              <div className="commitment-icon control-icon"></div>
              <h4>Controllo completo</h4>
              <p>Monitoriamo tutta la filiera produttiva, dai fornitori certificati al servizio post-vendita</p>
            </div>
            
            <div className="commitment-card">
              <div className="commitment-icon cert-iso-icon"></div>
              <h4>ISO 9001:2015</h4>
              <p>Certificati ISO 9001 fin dalla fondazione dell'azienda</p>
              <div className="badge">Dal 2009</div>
            </div>
            
            <div className="commitment-card">
              <div className="commitment-icon cert-ifs-icon"></div>
              <h4>IFS-HPC Version 3</h4>
              <p>Standard per prodotti chimici domestici "Scope 2"</p>
              <div className="badge">Dal 2018</div>
            </div>
            
            <div className="commitment-card">
              <div className="commitment-icon safety-icon"></div>
              <h4>Normative di sicurezza</h4>
              <p>I nostri prodotti rispettano tutte le normative vigenti nei paesi di distribuzione</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QualityCommitmentSection;