// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">SafeSteps</div>
      <div className="account-section">
        <img src="path-to-your-image.png" alt="My account" className="account-icon" />
        <span>My account</span>
      </div>
    </header>
  );
}

export default Header;
