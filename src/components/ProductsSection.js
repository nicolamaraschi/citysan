import React from 'react';
import '../styles/ProductsSection.css';

function ProductsSection() {
  return (
    <section className="products-section">
      <div className="container">
        <h2>I NOSTRI PRODOTTI</h2>
        <p className="products-description">
          Riforniamo la distribuzione su larga scala per tutto ciò riguardante il settore della pulizia domestica Laundry e Cleaning con l'utilizzo di tessuto non tessuto usa e getta e di supporti in microfibra (veline cattura polvere, cattura colore, sbiancanti, ravviva colori, stirafacile, catturapolvere addizionati con profumi essenze e sanificanti, bustine per lavatrice con detersivo/detergente multifunzione, veline wet wipes per la pulizia della casa e per la pulizia degli animali domestici- PET). Un completo servizio al Cliente, la sicurezza del consumatore, le proposte innovative sono obiettivi che hanno sempre caratterizzato e distinto la nostra Azienda.
        </p>
        
        <div className="product-categories">
          <div className="product-category">
            <div style={{ height: '200px', background: '#0066cc', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>Laundry Care</div>
            <h3>Laundry Care</h3>
          </div>
          <div className="product-category">
            <div style={{ height: '200px', background: '#0099ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>Cleaning House</div>
            <h3>Cleaning House</h3>
          </div>
          <div className="product-category">
            <div style={{ height: '200px', background: '#33ccff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>Wet Wipes</div>
            <h3>Wet Wipes</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
