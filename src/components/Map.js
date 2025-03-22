// Aggiorna il file Map.js
// Salva questo codice in src/components/Map.js

import React from 'react';
import '../styles/Map.css';

function Map() {
  return (
    <div className="map-container">
      <iframe 
        title="Citysan Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.5799097372296!2d11.7323693!3d45.8024957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4778e8f5c24cd175%3A0x6b9c975d3b6940e4!2sVia%20Verona%2C%2011%2C%2036020%20Pove%20del%20Grappa%20VI!5e0!3m2!1sit!2sit!4v1648037880926!5m2!1sit!2sit" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy"
      ></iframe>
      
      <div className="map-attribution">
        <div className="map-pulse"></div>
        <span>CITYSAN - Via Verona, 11 - Pove del Grappa (VI)</span>
      </div>
    </div>
  );
}

export default Map;