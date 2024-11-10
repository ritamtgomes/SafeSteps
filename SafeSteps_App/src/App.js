// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import Home from './pages/Home';
import HelpMe from './pages/HelpMe';
import Food from './pages/Food';
import Accommudation from './pages/Accommodation'; // Sleep instead of Accommodation
import Company from './pages/Company';
import Love from './pages/Love';
import ReportCase from './pages/ReportCase';
import EmergencyContacts from './pages/EmergencyContacts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help-me" element={<HelpMe />} />
        <Route path="/food" element={<Food />} />
        <Route path="/accomodation" element={<Accommudation />} />
        <Route path="/company" element={<Company />} />
        <Route path="/love" element={<Love />} />
        <Route path="/emergency-contacts" element={<EmergencyContacts />} />
        <Route path="/ReportCase" element={<ReportCase />} />
      </Routes>
    </Router>
  );
}

export default App;
