// src/pages/LetMeHelp.js
import React from 'react';
import './LetMeHelp.css'; // Ensure you have this CSS file for styling

function LetMeHelp() {
  return (
    <div className="let-me-help-container">
      
      <div className="button-section">
        <button className="action-button food-button">🍔 Food</button>
        <button className="action-button sleep-button">🏠 Sleep</button>
        <button className="action-button company-button">👤 Company</button>
        <button className="action-button love-button">❤️ Love</button>
      </div>
    </div>
  );
}

export default LetMeHelp;
