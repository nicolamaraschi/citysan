// src/components/Certifications.js
import React, { useState } from 'react';
import '../styles/Certifications.css';

function Certifications() {
  const [activeCert, setActiveCert] = useState(null);
  
  const certifications = [
    {
      id: 'cert1',
      title: 'ISO 9001:2015',
      file: '/1.png',
      type: 'png'
    },
    {
      id: 'cert2',
      title: 'IFS-HPC Version 3',
      file: '/2.png',
      type: 'png'
    },
    {
      id: 'cert3',
      title: 'FSC Certificate',
      file: '/3.png',
      type: 'png'
    },
    {
      id: 'cert4',
      title: 'INFORMATIVA EX ART.13 DEL REGOLAMENTO (UE) 2016/679',
      file: '/4.pdf',
      preview: '/4-preview.png', // Immagine di anteprima per il PDF
      type: 'pdf',
      color: '#E74C3C'
    },
    {
      id: 'cert5',
      title: 'Certificazione 5',
      file: '/5.pdf',
      preview: '/5-preview.png', // Immagine di anteprima per il PDF
      type: 'pdf',
      color: '#3498DB'
    },
    {
      id: 'cert6',
      title: 'INFORMATIVA EX ART.13 DEL REGOLAMENTO (UE) 2016/679',
      file: '/6.pdf',
      preview: '/6-preview.png', // Immagine di anteprima per il PDF
      type: 'pdf',
      color: '#2ECC71'
    },
    {
      id: 'cert7',
      title: 'QUALITY POLICY',
      file: '/7.pdf',
      preview: '/7-preview.png', // Immagine di anteprima per il PDF
      type: 'pdf',
      color: '#F39C12'
    }
  ];
  
  const handleCertClick = (certId) => {
    setActiveCert(activeCert === certId ? null : certId);
  };
  
  // Funzione per renderizzare l'anteprima
  const renderPreview = (cert) => {
    if (cert.type === 'png') {
      return (
        <div className="image-container">
          <img 
            src={cert.file} 
            alt={cert.title} 
            className="cert-preview"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="image-fallback" style={{display: 'none'}}>
            <div className="cert-icon"></div>
            <span>Anteprima non disponibile</span>
          </div>
        </div>
      );
    } else {
      // Anteprima per PDF usando l'immagine statica
      return (
        <div className="pdf-preview-container">
          {cert.preview ? (
            <img 
              src={cert.preview} 
              alt={`Anteprima ${cert.title}`} 
              className="pdf-preview-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : (
            <div className="pdf-fallback-preview" style={{backgroundColor: `${cert.color}20`}}>
              <div className="pdf-icon-container" style={{backgroundColor: cert.color}}>
                <svg className="pdf-icon" viewBox="0 0 24 24" fill="#fff">
                  <path d="M20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M20,16H8V4H20V16M4,6H2V20A2,2 0 0,0 4,22H18V20H4V6M16,12V8H13V10H14V12H13V14H16V12H15V10H16Z" />
                </svg>
              </div>
              <span className="pdf-fallback-text">{cert.title}</span>
            </div>
          )}
          <div className="pdf-overlay">
            <div className="pdf-badge" style={{backgroundColor: cert.color}}>
              <span>PDF</span>
            </div>
          </div>
        </div>
      );
    }
  };
  
  // Funzione per renderizzare il contenuto della modal
  const renderModalContent = (cert) => {
    if (cert.type === 'png') {
      return (
        <>
          <img 
            src={cert.file} 
            alt={cert.title} 
            className="cert-full-image" 
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="image-error" style={{display: 'none'}}>
            <p>Impossibile caricare l'immagine. Il file potrebbe non esistere o essere in un formato non supportato.</p>
          </div>
        </>
      );
    } else {
      return (
        <div className="pdf-container">
          <h3 className="pdf-modal-title">{cert.title}</h3>
          <div className="pdf-message">
            <div className="pdf-message-icon" style={{backgroundColor: cert.color || '#0066cc'}}>
              <svg className="pdf-msg-icon" viewBox="0 0 24 24" fill="#fff">
                <path d="M20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M20,16H8V4H20V16M4,6H2V20A2,2 0 0,0 4,22H18V20H4V6M16,12V8H13V10H14V12H13V14H16V12H15V10H16Z" />
              </svg>
            </div>
            <div className="pdf-message-text">
              <p>Visualizzazione del documento PDF in corso...</p>
              <p>Se il PDF non viene visualizzato, utilizza il pulsante di download qui sotto.</p>
            </div>
            <a href={cert.file} target="_blank" rel="noopener noreferrer" className="download-link" style={{backgroundColor: cert.color || '#0066cc'}}>
              <svg className="download-icon" viewBox="0 0 24 24" fill="#fff">
                <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
              </svg>
              Scarica il PDF
            </a>
          </div>
          <object 
            data={cert.file} 
            type="application/pdf" 
            className="pdf-viewer"
          >
            <div className="pdf-fallback">
              <p>Il tuo browser non supporta la visualizzazione PDF incorporata.</p>
              <a href={cert.file} target="_blank" rel="noopener noreferrer" className="download-link" style={{backgroundColor: cert.color || '#0066cc'}}>
                <svg className="download-icon" viewBox="0 0 24 24" fill="#fff">
                  <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
                </svg>
                Scarica il PDF
              </a>
            </div>
          </object>
        </div>
      );
    }
  };
  
  return (
    <section className="certifications-section" id="certifications">
      <div className="container">
        <div className="section-header">
          <h2>LE NOSTRE CERTIFICAZIONI</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            La Qualità assoluta per noi significa controllo di tutti i materiali utilizzati in tutta la filiera
          </p>
        </div>
        
        <div className="certifications-grid">
          {certifications.map(cert => (
            <div 
              key={cert.id}
              className={`certification-card ${activeCert === cert.id ? 'active' : ''}`} 
              onClick={() => handleCertClick(cert.id)}
            >
              <span className="cert-title">{cert.title}</span>
              <div className="cert-preview-container">
                {renderPreview(cert)}
              </div>
              <span className="cert-view">Visualizza certificato</span>
            </div>
          ))}
        </div>
        
        {/* Modal per visualizzazione completa */}
        {activeCert && (
          <div className="certification-modal" onClick={() => setActiveCert(null)}>
            <div className="certification-modal-content" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setActiveCert(null)}>×</button>
              {renderModalContent(certifications.find(cert => cert.id === activeCert))}
            </div>
          </div>
        )}
        
        <div className="certification-quote">
          <blockquote>
            "La Qualità assoluta per noi significa controllo di tutti i materiali utilizzati in tutta la filiera a partire dall'utilizzo di fornitori certificati terminando con un servizio post-vendita. Certificati ISO9001 dall'inizio attività abbiamo mantenuto lo standard di certificazione attualmente in edizione UNI EN ISO9001:2015. Da Gennaio 2018 siamo certificati con lo standard IFS-HPC Version 3 "Scope 2" – Household chemical products. I nostri prodotti rispettano tutte le normative vigenti a tutela della salute del consumatore e della natura dei paesi di distribuzione."
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default Certifications;