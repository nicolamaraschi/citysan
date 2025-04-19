// src/components/OrganizationChart.js
import React from 'react';
import '../styles/OrganizationChart.css';

function OrganizationChart() {
  return (
    <div className="organization-chart-container">
      <h3 className="chart-title">La Nostra Struttura Organizzativa</h3>
      
      <div className="org-chart">
        {/* CEO / Direzione */}
        <div className="org-level level-1">
          <div className="org-box">
            <div className="org-content">
              <div className="org-avatar">
                <div className="avatar-placeholder">
                  {/* Icona CEO - Corona/leadership */}
                  <svg className="role-icon" viewBox="0 0 24 24">
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1M12 5.68C12.5 5.68 12.95 6.11 12.95 6.63V10.11L18.82 12.06L17.95 12.94L12.95 12.17V16.36C14.53 16.36 15.81 17.63 15.81 19.21H8.22C8.22 17.63 9.5 16.36 11.08 16.36V12.17L6.08 12.94L5.22 12.06L11.08 10.11V6.63C11.08 6.11 11.53 5.68 12.03 5.68H12Z" />
                  </svg>
                </div>
              </div>
              <div className="org-info">
                <h4 className="org-name">Mario Rossi</h4>
                <div className="org-position">Amministratore Delegato</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Connettori */}
        <div className="org-connectors level-1-2">
          <div className="connector-wrapper">
            <div className="connector"></div>
          </div>
        </div>
        
        {/* Direzioni funzionali */}
        <div className="org-level level-2">
          <div className="org-box">
            <div className="org-content">
              <div className="org-avatar">
                <div className="avatar-placeholder">
                  {/* Icona Operativo - Ingranaggi/operations */}
                  <svg className="role-icon" viewBox="0 0 24 24">
                    <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
                  </svg>
                </div>
              </div>
              <div className="org-info">
                <h4 className="org-name">Laura Bianchi</h4>
                <div className="org-position">Direttore Operativo</div>
              </div>
            </div>
          </div>
          
          <div className="org-box">
            <div className="org-content">
              <div className="org-avatar">
                <div className="avatar-placeholder">
                  {/* Icona Commerciale - Grafico crescita/vendite */}
                  <svg className="role-icon" viewBox="0 0 24 24">
                    <path d="M3.5,18.5L9.5,12.5L13.5,16.5L22,6.92L20.59,5.5L13.5,13.5L9.5,9.5L2,17L3.5,18.5Z" />
                  </svg>
                </div>
              </div>
              <div className="org-info">
                <h4 className="org-name">Marco Verdi</h4>
                <div className="org-position">Direttore Commerciale</div>
              </div>
            </div>
          </div>
          
          <div className="org-box">
            <div className="org-content">
              <div className="org-avatar">
                <div className="avatar-placeholder">
                  {/* Icona Tecnico - Strumenti/sviluppo */}
                  <svg className="role-icon" viewBox="0 0 24 24">
                    <path d="M22.7,19L13.6,9.9C14.5,7.6 14,4.9 12.1,3C10.1,1 7.1,0.6 4.7,1.7L9,6L6,9L1.6,4.7C0.4,7.1 0.9,10.1 2.9,12.1C4.8,14 7.5,14.5 9.8,13.6L18.9,22.7C19.3,23.1 19.9,23.1 20.3,22.7L22.6,20.4C23.1,20 23.1,19.3 22.7,19Z" />
                  </svg>
                </div>
              </div>
              <div className="org-info">
                <h4 className="org-name">Anna Neri</h4>
                <div className="org-position">Direttore Tecnico</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Connettori */}
        <div className="org-connectors level-2-3">
          <div className="connector-wrapper">
            <div className="connector"></div>
            <div className="connector"></div>
          </div>
          <div className="connector-wrapper">
            <div className="connector"></div>
            <div className="connector"></div>
          </div>
          <div className="connector-wrapper">
            <div className="connector"></div>
            <div className="connector"></div>
          </div>
        </div>
        
        {/* Reparti */}
        <div className="org-level level-3">
          <div className="org-box">
            <div className="org-content">
              <div className="org-department-icon">
                <svg className="dept-icon" viewBox="0 0 24 24">
                  <path d="M12,6V9L16,5L12,1V4A8,8 0 0,0 4,12C4,13.57 4.46,15.03 5.24,16.26L6.7,14.8C6.25,13.97 6,13 6,12A6,6 0 0,1 12,6M18.76,7.74L17.3,9.2C17.74,10.04 18,11 18,12A6,6 0 0,1 12,18V15L8,19L12,23V20A8,8 0 0,0 20,12C20,10.43 19.54,8.97 18.76,7.74Z" />
                </svg>
              </div>
              <div className="org-info simple">
                <div className="org-position">Produzione</div>
              </div>
            </div>
          </div>
          
          <div className="org-box">
            <div className="org-content">
              <div className="org-department-icon">
                <svg className="dept-icon" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M7,15H17V17H7V15M10.3,11.2L8.4,9.3L7,10.7L10.3,14L17,7.3L15.6,5.9L10.3,11.2Z" />
                </svg>
              </div>
              <div className="org-info simple">
                <div className="org-position">Controllo Qualità</div>
              </div>
            </div>
          </div>
          
          <div className="org-box">
            <div className="org-content">
              <div className="org-department-icon">
                <svg className="dept-icon" viewBox="0 0 24 24">
                  <path d="M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z" />
                </svg>
              </div>
              <div className="org-info simple">
                <div className="org-position">Vendite</div>
              </div>
            </div>
          </div>
          
          <div className="org-box">
            <div className="org-content">
              <div className="org-department-icon">
                <svg className="dept-icon" viewBox="0 0 24 24">
                  <path d="M18.5,12C16.57,12 15,10.43 15,8.5A3.5,3.5 0 0,1 18.5,5A3.5,3.5 0 0,1 22,8.5A3.5,3.5 0 0,1 18.5,12M18.5,6.5A2,2 0 0,0 16.5,8.5A2,2 0 0,0 18.5,10.5A2,2 0 0,0 20.5,8.5A2,2 0 0,0 18.5,6.5M5.75,8.9L4,9.65V13H2V8.3L7.25,6.15C7.5,6.05 7.75,6 8,6C8.7,6 9.35,6.35 9.7,6.95L10.65,8.55C11.55,10 13.15,11 15,11V13C12.4,13 10.1,11.75 8.85,9.9L8.55,9.4L7,9.85V13H5V9L5.75,8.9M13,2V4H8V2H13M18.5,13C22.1,13 22,18 22,18H15C15,18 14.9,13 18.5,13Z" />
                </svg>
              </div>
              <div className="org-info simple">
                <div className="org-position">Marketing</div>
              </div>
            </div>
          </div>
          
          <div className="org-box">
            <div className="org-content">
              <div className="org-department-icon">
                <svg className="dept-icon" viewBox="0 0 24 24">
                  <path d="M7,2H17A2,2 0 0,1 19,4V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V4A2,2 0 0,1 7,2M7,4V20H17V4H7M11,7H13V9H11V7M11,11H13V17H11V11Z" />
                </svg>
              </div>
              <div className="org-info simple">
                <div className="org-position">R&D</div>
              </div>
            </div>
          </div>
          
          <div className="org-box">
            <div className="org-content">
              <div className="org-department-icon">
                <svg className="dept-icon" viewBox="0 0 24 24">
                  <path d="M6,22A3,3 0 0,1 3,19C3,18.4 3.18,17.84 3.5,17.37L9,7.81V6A1,1 0 0,1 8,5V4A2,2 0 0,1 10,2H14A2,2 0 0,1 16,4V5A1,1 0 0,1 15,6V7.81L20.5,17.37C20.82,17.84 21,18.4 21,19A3,3 0 0,1 18,22H6M5,19A1,1 0 0,0 6,20H18A1,1 0 0,0 19,19C19,18.79 18.93,18.59 18.82,18.43L16.53,14.47L14,17L8.93,11.93L5.18,18.43C5.07,18.59 5,18.79 5,19M13,10A1,1 0 0,0 12,11A1,1 0 0,0 13,12A1,1 0 0,0 14,11A1,1 0 0,0 13,10Z" />
                </svg>
              </div>
              <div className="org-info simple">
                <div className="org-position">Laboratorio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="organization-note">
        <p>La nostra struttura organizzativa è progettata per garantire efficienza, comunicazione fluida e rapida risposta alle esigenze del mercato. Ogni dipartimento lavora in sinergia per assicurare la massima qualità in ogni fase del processo produttivo.</p>
      </div>
    </div>
  );
}

export default OrganizationChart;