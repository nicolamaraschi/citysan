// TeamSection.js
import React, { useState } from 'react';
import '../styles/TeamSection.css';

function TeamSection() {
  const [activeTab, setActiveTab] = useState('overview');
  
  const departments = [
    {
      id: 'research',
      name: 'Ricerca e Sviluppo',
      icon: 'research-icon',
      description: 'Il cuore innovativo della nostra azienda, dove nascono le idee che trasformiamo in prodotti rivoluzionari.',
      role: 'Studia nuove formule e tecnologie per migliorare costantemente i nostri prodotti.'
    },
    {
      id: 'production',
      name: 'Produzione',
      icon: 'production-icon',
      description: 'Esperti nella lavorazione di tessuti non tessuti e materiali tecnici all\'avanguardia.',
      role: 'Trasforma i progetti in prodotti finiti con precisione e attenzione ai dettagli.'
    },
    {
      id: 'quality',
      name: 'Controllo Qualità',
      icon: 'quality-icon',
      description: 'Garanti dell\'eccellenza di ogni prodotto che esce dalla nostra azienda.',
      role: 'Verifica che tutti i prodotti rispettino i nostri standard elevati e le normative vigenti.'
    },
    {
      id: 'logistics',
      name: 'Logistica',
      icon: 'logistics-icon',
      description: 'Esperti nella gestione della supply chain e nella distribuzione internazionale.',
      role: 'Assicura che i prodotti arrivino puntualmente ai nostri clienti in tutto il mondo.'
    }
  ];
  
  return (
    <section className="team-section">
      <div className="team-background-waves"></div>
      
      <div className="container">
        <header className="team-header">
          <h2 className="team-title">IL NOSTRO TEAM</h2>
          <div className="team-divider"></div>
          <p className="team-subtitle">Un gruppo di professionisti appassionati e dedicati</p>
        </header>
        
        <div className="team-content">
          <div className="team-tabs">
            <button 
              className={`team-tab ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <span className="tab-icon overview-icon"></span>
              <span className="tab-text">Panoramica</span>
            </button>
            {departments.map(dept => (
              <button 
                key={dept.id}
                className={`team-tab ${activeTab === dept.id ? 'active' : ''}`}
                onClick={() => setActiveTab(dept.id)}
              >
                <span className={`tab-icon ${dept.icon}`}></span>
                <span className="tab-text">{dept.name}</span>
              </button>
            ))}
          </div>
          
          <div className="team-tab-content">
            {activeTab === 'overview' ? (
              <div className="team-overview-content">
                <div className="team-image-container">
                  <div className="team-image"></div>
                  <div className="team-image-overlay"></div>
                  <div className="team-image-badge">dal 2009</div>
                </div>
                
                <div className="team-description">
                  <p>
                    Il nostro team è formato da professionisti con una lunga esperienza nel settore della pulizia domestica. Ogni membro contribuisce con la propria competenza e passione al successo dell'azienda, lavorando insieme per garantire prodotti di alta qualità e un servizio eccellente.
                  </p>
                  <p>
                    Dalla ricerca e sviluppo alla produzione, dal controllo qualità alla logistica, ogni reparto lavora in sinergia per assicurare che i prodotti Citysan siano sempre all'altezza delle aspettative dei nostri clienti.
                  </p>
                  
                  <div className="team-values">
                    <div className="team-value">
                      <span className="value-icon expertise-icon"></span>
                      <h4>Competenza</h4>
                    </div>
                    <div className="team-value">
                      <span className="value-icon passion-icon"></span>
                      <h4>Passione</h4>
                    </div>
                    <div className="team-value">
                      <span className="value-icon innovation-icon"></span>
                      <h4>Innovazione</h4>
                    </div>
                    <div className="team-value">
                      <span className="value-icon teamwork-icon"></span>
                      <h4>Collaborazione</h4>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="team-department-content">
                {departments.filter(dept => dept.id === activeTab).map(dept => (
                  <div key={dept.id} className="department-details">
                    <div className="department-header">
                      <span className={`department-icon ${dept.icon}`}></span>
                      <h3>{dept.name}</h3>
                    </div>
                    
                    <div className="department-description">
                      <p>{dept.description}</p>
                      <div className="department-role">
                        <h4>Ruolo chiave:</h4>
                        <p>{dept.role}</p>
                      </div>
                      
                      <div className="department-stats">
                        <div className="department-stat">
                          <span className="stat-number">100%</span>
                          <span className="stat-label">Dedicati alla qualità</span>
                        </div>
                        <div className="department-stat">
                          <span className="stat-number">15+</span>
                          <span className="stat-label">Anni di esperienza</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="department-image"></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;