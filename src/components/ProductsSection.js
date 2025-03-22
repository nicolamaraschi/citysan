import React from 'react';
import '../styles/ProductsSection.css';

function ProductsSection() {
  return (
    <section className="products-section">
      <div className="container">
        <div className="section-header">
          <h2>I NOSTRI PRODOTTI</h2>
          <div className="section-divider"></div>
        </div>
        
        <p className="products-description">
          Riforniamo la distribuzione su larga scala per tutto ciò riguardante il settore della pulizia domestica Laundry e Cleaning con l'utilizzo di tessuto non tessuto usa e getta e di supporti in microfibra (veline cattura polvere, cattura colore, sbiancanti, ravviva colori, stirafacile, catturapolvere addizionati con profumi essenze e sanificanti, bustine per lavatrice con detersivo/detergente multifunzione, veline wet wipes per la pulizia della casa e per la pulizia degli animali domestici- PET). Un completo servizio al Cliente, la sicurezza del consumatore, le proposte innovative sono obiettivi che hanno sempre caratterizzato e distinto la nostra Azienda.
        </p>
        
        <div className="product-categories">
          <div className="product-category">
            <div className="product-image">
              <img src="/Landry_gif.gif" alt="Laundry Care" className="product-gif" />
              <div className="product-overlay">
                <span>Scopri di più</span>
              </div>
            </div>
            <h3>Laundry Care</h3>
            <p>Soluzioni innovative per la cura dei tuoi capi</p>
          </div>
          
          <div className="product-category">
            <div className="product-image">
              <img src="/Cleaning_gif.gif" alt="Cleaning House" className="product-gif" />
              <div className="product-overlay">
                <span>Scopri di più</span>
              </div>
            </div>
            <h3>Cleaning House</h3>
            <p>Prodotti efficaci per la pulizia della casa</p>
          </div>
          
          <div className="product-category">
            <div className="product-image">
              <img src="/Wet_Wipes_gif.gif" alt="Wet Wipes" className="product-gif" />
              <div className="product-overlay">
                <span>Scopri di più</span>
              </div>
            </div>
            <h3>Wet Wipes</h3>
            <p>Salviette umidificate per diverse esigenze</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;