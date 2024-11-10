// src/pages/Sleep.js
import React, { useState } from 'react';
import './CategoryPage.css';

function Accomodation() {
  const [searchQuery, setSearchQuery] = useState('');

  const exampleCases = [
    { name: 'Sophia', description: 'Offering a free room for anyone who needs a place to sleep.', location: 'Lisbon' },
    { name: 'James', description: 'A local hotel offering a free night for those in need.', location: 'Porto' },
    { name: 'Olga', description: 'Providing space in her house for emergency stays.', location: 'Faro' }
  ];

  const filteredCases = exampleCases.filter(caseItem => 
    caseItem.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    caseItem.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="category-container">
      <h2>Sleep Assistance</h2>
      
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search for help..." 
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="cases-list">
        {filteredCases.length > 0 ? (
          filteredCases.map((caseItem, index) => (
            <div key={index} className="case-card">
              <h3>{caseItem.name}</h3>
              <p>{caseItem.description}</p>
              <small>Location: {caseItem.location}</small>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default Accomodation;
