// src/pages/AboutPage.js
import React from 'react';
import '../styles/AboutPage.css';
import '../styles/animations.css';
import Certifications from '../components/Certifications';
import OrganizationChart from '../components/OrganizationChart';

function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-hero-content container">
          <h1 className="fade-in-down">LA NOSTRA STORIA</h1>
          <p className="about-hero-subtitle fade-in-up delay-200">Un impegno costante verso qualità e innovazione</p>
        </div>
      </div>
      
      <section className="about-intro-section">
        <div className="container">
          <div className="about-intro-content">
            <div className="about-intro-text fade-in-right">
              <h2>CHI SIAMO</h2>
              <div className="section-divider"></div>
              <p className="intro-large-text">
                Dal 2009, Citysan è sinonimo di eccellenza nel settore dei prodotti per la pulizia domestica in Italia e in Europa.
              </p>
              <p>
                Citysan è stata fondata nel 2009 in una sede di 1500 metri quadri e fin dall'inizio si è concentrata sulla progettazione, produzione e fornitura di prodotti di alta qualità con una completa tracciabilità delle sue materie prime; il suo vero vantaggio: flessibilità e capacità di cercare soluzioni innovative. In questo modo l'azienda è cresciuta con successo in Italia e nel mercato europeo per dare miglior servizio si è spostata in una sede di circa 3500 metri quadri.
              </p>
              <p>
                Assicurare la piena soddisfazione del cliente è un incentivo costante a migliorare i nostri prodotti esistenti e a svilupparne di nuovi.
              </p>
            </div>
            <div className="about-intro-image fade-in-left delay-300">
              <div className="about-image-container">
                <img src="/azienda.jpg" alt="Sede Citysan" className="about-image" />
                <div className="about-image-overlay"></div>
                <div className="about-image-frame"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="timeline-section">
        <div className="container">
          <div className="section-header text-center fade-in">
            <h2>IL NOSTRO PERCORSO</h2>
            <div className="section-divider center-divider"></div>
          </div>
          
          <div className="timeline">
            <div className="timeline-item fade-in-right">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2009</div>
              <div className="timeline-content">
                <h3>Fondazione</h3>
                <p>Apertura della prima sede di 1500 metri quadri e inizio della produzione di articoli per la pulizia domestica.</p>
              </div>
            </div>
            
            <div className="timeline-item right fade-in-left delay-200">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2012</div>
              <div className="timeline-content">
                <h3>Espansione nel mercato europeo</h3>
                <p>Primi accordi importanti con distributori europei e ampliamento della gamma prodotti.</p>
              </div>
            </div>
            
            <div className="timeline-item fade-in-right delay-300">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2015</div>
              <div className="timeline-content">
                <h3>Certificazione ISO 9001:2015</h3>
                <p>Ottenimento della certificazione di qualità ISO 9001:2015, a conferma del nostro impegno verso l'eccellenza.</p>
              </div>
            </div>
            
            <div className="timeline-item right fade-in-left delay-400">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2018</div>
              <div className="timeline-content">
                <h3>Certificazione IFS-HPC</h3>
                <p>Ottenimento della certificazione IFS-HPC Version 3 "Scope 2" per i prodotti chimici per la casa.</p>
              </div>
            </div>
            
            <div className="timeline-item fade-in-right delay-500">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Oggi</div>
              <div className="timeline-content">
                <h3>Nuova sede di 3500 mq</h3>
                <p>Trasferimento nella nuova sede più ampia e moderna per supportare la crescita continua dell'azienda.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="values-section">
        <div className="container">
          <div className="section-header text-center fade-in">
            <h2>I NOSTRI VALORI</h2>
            <div className="section-divider center-divider"></div>
          </div>
          
          <div className="values-grid">
            <div className="value-card fade-in-up">
              <div className="value-icon quality-icon"></div>
              <h3>Qualità</h3>
              <p>Controllo rigoroso di tutti i materiali utilizzati in tutta la filiera produttiva.</p>
            </div>
            
            <div className="value-card fade-in-up delay-200">
              <div className="value-icon innovation-icon"></div>
              <h3>Innovazione</h3>
              <p>Ricerca costante di soluzioni innovative per migliorare i nostri prodotti.</p>
            </div>
            
            <div className="value-card fade-in-up delay-300">
              <div className="value-icon sustainability-icon"></div>
              <h3>Sostenibilità</h3>
              <p>Impegno verso l'ambiente con l'utilizzo di materiali riciclati e processi sostenibili.</p>
            </div>
            
            <div className="value-card fade-in-up delay-400">
              <div className="value-icon customer-icon"></div>
              <h3>Cliente</h3>
              <p>Attenzione costante alle esigenze del cliente e ai suoi feedback.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sostituisci la vecchia sezione certificazioni con il nuovo componente */}
      <Certifications />
      
      <section className="team-section">
        <div className="container">
          <div className="section-header text-center fade-in">
            <h2>IL NOSTRO TEAM</h2>
            <div className="section-divider center-divider"></div>
            <p className="section-subheading">Un gruppo di professionisti appassionati e dedicati</p>
          </div>
          
          <div className="team-description fade-in delay-200">
            <p>
              Il nostro team è formato da professionisti con una lunga esperienza nel settore della pulizia domestica. Ogni membro del team contribuisce con la propria competenza e passione al successo dell'azienda, lavorando insieme per garantire prodotti di alta qualità e un servizio eccellente ai nostri clienti.
            </p>
            <p>
              Dalla ricerca e sviluppo alla produzione, dal controllo qualità alla logistica, ogni reparto lavora in sinergia per assicurare che i prodotti Citysan siano sempre all'altezza delle aspettative dei nostri clienti.
            </p>
          </div>
          
          {/* Organigramma aziendale */}
          <div className="team-chart fade-in delay-300">
            <OrganizationChart />
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="container">
          <div className="cta-content fade-in">
            <h2>VUOI SAPERNE DI PIÙ?</h2>
            <p>Contattaci per maggiori informazioni sui nostri prodotti e servizi</p>
            <a href="/contatti" className="cta-button">Contattaci ora</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;