import React from 'react';
import './EmergencyContacts.css'; // Certifique-se de que o caminho do arquivo CSS está correto

const EmergencyContacts = () => {
  return (
    <div className="emergency-contacts-container">
      <h1>ARE YOU SURE YOU WANT TO CALL EMERGENCY (112)?</h1>
      <div className="button-container">
        {/* Botão "Yes" que liga para o 112 */}
        <a href="tel:112">
          <button className="yes">Yes</button>
        </a>
        {/* Botão "No" que redireciona para a página inicial */}
        <a href="/">
          <button className="no">No</button>
        </a>
      </div>
    </div>
  );
};

export default EmergencyContacts;
