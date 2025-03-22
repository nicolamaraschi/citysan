import React, { useState } from 'react';
import '../styles/CertificationsSection.css';

function CertificationsSection() {
  const [activeCert, setActiveCert] = useState(null);
  
  const handleCertClick = (certId) => {
    setActiveCert(activeCert === certId ? null : certId);
  };
  
  return (
    <section className="certifications-section">
      <div className="container">
        <div className="section-header">
          <h2>LE NOSTRE CERTIFICAZIONI</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="certification-content">
          <div className="certification-logos">
            <div 
              className={`certification-logo ${activeCert === 'iso' ? 'active' : ''}`} 
              onClick={() => handleCertClick('iso')}
            >
              <span className="cert-title">ISO 9001:2015</span>
              <img src="/CERT17206Rev.001.png" alt="ISO 9001:2015" className="cert-preview" />
              <span className="cert-view">Visualizza certificato</span>
            </div>
            
            <div 
              className={`certification-logo ${activeCert === 'ifs' ? 'active' : ''}`}
              onClick={() => handleCertClick('ifs')}
            >
              <span className="cert-title">IFS-HPC Version 3</span>
              <img src="/IFS-HPC-V3_ENG.png" alt="IFS-HPC Version 3" className="cert-preview" />
              <span className="cert-view">Visualizza certificato</span>
            </div>
            
            <div 
              className={`certification-logo ${activeCert === 'fsc' ? 'active' : ''}`}
              onClick={() => handleCertClick('fsc')}
            >
              <span className="cert-title">FSC Certificate</span>
              <img src="/FSC-Certificate-Citysan-Srl-RA.png" alt="FSC Certificate" className="cert-preview" />
              <span className="cert-view">Visualizza certificato</span>
            </div>
          </div>
          
          {activeCert && (
            <div className="certification-modal">
              <div className="certification-modal-content">
                <button className="modal-close" onClick={() => setActiveCert(null)}>×</button>
                <img 
                  src={
                    activeCert === 'iso' ? '/CERT17206Rev.001.png' : 
                    activeCert === 'ifs' ? '/IFS-HPC-V3_ENG.png' : 
                    '/FSC-Certificate-Citysan-Srl-RA.png'
                  } 
                  alt="Certificato" 
                  className="cert-full-image" 
                />
              </div>
            </div>
          )}
          
          <blockquote>
            "La Qualità assoluta per noi significa controllo di tutti i materiali utilizzati in tutta la filiera a partire dall'utilizzo di fornitori certificati terminando con un servizio post-vendita. Certificati ISO9001 dall'inizio attività abbiamo mantenuto lo standard di certificazione attualmente in edizione UNI EN ISO9001:2015. Da Gennaio 2018 siamo certificati con lo standard IFS-HPC Version 3 "Scope 2" – Household chemical products. I nostri prodotti rispettano tutte le normative vigenti a tutela della salute del consumatore e della natura dei paesi di distribuzione."
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default CertificationsSection;