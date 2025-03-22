import React from 'react';
import '../styles/AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1>CHI SIAMO</h1>
        </div>
      </div>
      
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <p>
                Citysan è stata fondata nel 2009 in una sede di 1500 metri quadri e fin dall'inizio si è concentrata sulla progettazione, produzione e fornitura di prodotti di alta qualità con una completa tracciabilità delle sue materie prime; il suo vero vantaggio: flessibilità e capacità di cercare soluzioni innovative. In questo modo l'azienda è cresciuta con successo in Italia e nel mercato europeo per dare miglior servizio si è spostata in una sede di circa 3500 metri quadri.
              </p>
              <p>
                Assicurare la piena soddisfazione del cliente è un incentivo costante a migliorare i nostri prodotti esistenti e a svilupparne di nuovi.
              </p>
            </div>
            <div className="about-image">
              <div style={{ height: '300px', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Immagine Citysan</div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mission-section about-page-mission">
        <div className="container">
          <h2>MISSIONE</h2>
          <p>
            Citysan è un'azienda produttrice di articoli per la pulizia domestica Laundry e Cleaning in tessuto non tessuto. Utilizza tessuti tecnici all'avanguardia ai quali vengono conferite diverse funzionalità ed esclusivamente sostanze secondo la normativa europea "REACH" Reg.1907/2006 CE non tossiche nel rispetto della salute dei nostri Consumatori, nel rispetto della salute dei nostri Operatori (provvedendo a garantire un posto di lavoro continuamente migliorato anche con l'utilizzo di filtri e macchinari di ultima generazione). Assicura una completa rintracciabilità di tutte le materie prime utilizzate.
          </p>
          <p>
            <strong>La nostra missione:</strong> Processo di miglioramento continuo rispettando la Natura, senza uso di sostanze tossiche ma cercando di aumentare l'uso di materiali riciclati con un'attenzione costante alla qualità.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
