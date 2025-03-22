import React from 'react';
import '../styles/CertificationsSection.css';

function CertificationsSection() {
  return (
    <section className="certifications-section">
      <div className="container">
        <h2>Le nostre certificazioni</h2>
        <div className="certification-content">
          <div className="certification-logos">
            <div style={{ display: 'inline-block', padding: '20px', background: '#f5f5f5', margin: '10px', border: '1px solid #ddd' }}>ISO 9001:2015</div>
            <div style={{ display: 'inline-block', padding: '20px', background: '#f5f5f5', margin: '10px', border: '1px solid #ddd' }}>IFS-HPC Version 3</div>
          </div>
          <blockquote>
            "La Qualità assoluta per noi significa controllo di tutti i materiali utilizzati in tutta la filiera a partire dall'utilizzo di fornitori certificati terminando con un servizio post-vendita. Certificati ISO9001 dall'inizio attività abbiamo mantenuto lo standard di certificazione attualmente in edizione UNI EN ISO9001:2015. Da Gennaio 2018 siamo certificati con lo standard IFS-HPC Version 3 "Scope 2" – Household chemical products. I nostri prodotti rispettano tutte le normative vigenti a tutela della salute del consumatore e della natura dei paesi di distribuzione."
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default CertificationsSection;
