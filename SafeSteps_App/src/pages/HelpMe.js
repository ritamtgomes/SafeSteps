// src/pages/HelpMe.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './HelpMe.css'; // Ensure you have this CSS file for styling

function HelpMe() {
  return (
    <div className="help-me-container">
      <h2>Help Me</h2>

      <div className="button-section">
        <Link to="/food">
          <button className="action-button food-button">🍔 Food</button>
        </Link>
        <Link to="/sleep">
          <button className="action-button sleep-button">🏠 Sleep</button>
        </Link>
        <Link to="/company">
          <button className="action-button company-button">👤 Company</button>
        </Link>
        <Link to="/love">
          <button className="action-button love-button">❤️ Love</button>
        </Link>
      </div>
    </div>
  );
}

export default HelpMe;
