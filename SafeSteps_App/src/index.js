// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css'; // Importa o CSS global
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
