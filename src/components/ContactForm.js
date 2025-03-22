// Aggiornamento del file ContactForm.js
// Salva questo codice in src/components/ContactForm.js

import React, { useState } from 'react';
import '../styles/ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuliamo l'invio del form con un ritardo
    setTimeout(() => {
      setFormSubmitted(true);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="contact-form-container">
      {formSubmitted ? (
        <div className="form-success">
          <svg className="success-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#4CAF50" />
            <path fill="#FFFFFF" d="M9.3 16.3l-4.6-4.6L6.1 10l3.2 3.2 8.6-8.6 1.4 1.4z" />
          </svg>
          <h3>Grazie per averci contattato!</h3>
          <p>Ti risponderemo al più presto.</p>
          <button 
            onClick={() => setFormSubmitted(false)} 
            className="reset-form-button"
          >
            Invia un altro messaggio
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Nome e Cognome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Inserisci il tuo nome completo"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="La tua email di contatto"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Oggetto</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Oggetto del messaggio"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Messaggio</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              placeholder="Scrivi qui il tuo messaggio..."
            ></textarea>
          </div>
          
          <div className="form-group form-privacy">
            <input
              type="checkbox"
              id="privacy"
              name="privacy"
              required
            />
            <label htmlFor="privacy">
              Ho letto e accetto l'informativa sulla privacy ai sensi del GDPR (Regolamento UE 2016/679)
            </label>
          </div>
          
          <button 
            type="submit" 
            className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="button-spinner"></span>
                <span>Invio in corso...</span>
              </>
            ) : 'Invia messaggio'}
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;