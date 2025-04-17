// ProductsOverviewSection.js - Componente completo con i valori aziendali migliorati
import React from 'react';
import '../styles/ProductsOverviewSection.css';

function ProductsOverviewSection() {
  return (
    <section className="products-overview-section">
      <div className="container">
        <div className="section-header">
          <h2>I NOSTRI PRODOTTI</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="product-overview">
          <h3>La nostra gamma di prodotti</h3>
          
          <div className="product-categories-grid">
            <div className="product-category-card">
              <div className="category-icon laundry-icon"></div>
              <h4>Laundry Care</h4>
              <ul className="product-examples">
                <li>Cattura colore</li>
                <li>Sbiancanti</li>
                <li>Ravviva colori</li>
                <li>Bustine detergenti</li>
              </ul>
            </div>
            
            <div className="product-category-card">
              <div className="category-icon cleaning-icon"></div>
              <h4>Cleaning House</h4>
              <ul className="product-examples">
                <li>Veline cattura polvere</li>
                <li>Tessuti in microfibra</li>
                <li>Prodotti sanificanti</li>
                <li>Additivi profumati</li>
              </ul>
            </div>
            
            <div className="product-category-card">
              <div className="category-icon wipes-icon"></div>
              <h4>Wet Wipes</h4>
              <ul className="product-examples">
                <li>Pulizia domestica</li>
                <li>Igiene personale</li>
                <li>Per animali domestici</li>
                <li>Biodegradabili</li>
              </ul>
            </div>
          </div>
          
          <div className="company-values-section">
            <h3>I nostri punti di forza</h3>
            
            <div className="company-values-grid">
              <div className="value-card">
                <div className="value-icon-container">
                  <div className="value-icon service-icon"></div>
                </div>
                <h4>Servizio personalizzato</h4>
                <p>Offriamo un'assistenza dedicata e soluzioni su misura per ogni cliente</p>
                <div className="value-feature">
                  <span className="check-icon"></span>
                  <span>Supporto tecnico</span>
                </div>
                <div className="value-feature">
                  <span className="check-icon"></span>
                  <span>Consulenza specializzata</span>
                </div>
              </div>
              
              <div className="value-card">
                <div className="value-icon-container">
                  <div className="value-icon safety-icon"></div>
                </div>
                <h4>Sicurezza garantita</h4>
                <p>Tutti i nostri prodotti sono testati per garantire la massima sicurezza</p>
                <div className="value-feature">
                  <span className="check-icon"></span>
                  <span>Test rigorosi</span>
                </div>
                <div className="value-feature">
                  <span className="check-icon"></span>
                  <span>Materiali selezionati</span>
                </div>
              </div>
              
              <div className="value-card">
                <div className="value-icon-container">
                  <div className="value-icon innovation-icon"></div>
                </div>
                <h4>Innovazione continua</h4>
                <p>Ricerchiamo costantemente nuove soluzioni per migliorare i nostri prodotti</p>
                <div className="value-feature">
                  <span className="check-icon"></span>
                  <span>Ricerca e sviluppo</span>
                </div>
                <div className="value-feature">
                  <span className="check-icon"></span>
                  <span>Tecnologie all'avanguardia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsOverviewSection;