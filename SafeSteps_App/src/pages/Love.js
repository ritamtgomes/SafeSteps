// src/pages/Love.js
import React, { useState } from 'react';
import './CategoryPage.css'; // Reusing the same CSS file

function Love() {
  const [searchQuery, setSearchQuery] = useState('');

  // Example people offering love (50 cases)
  const exampleCases = Array.from({ length: 50 }, (_, index) => ({
    name: `Helper ${index + 1}`,
    description: `Offering emotional support and companionship. Case #${index + 1}`,
    location: index % 2 === 0 ? 'Lisbon' : 'Porto',
  }));

  // Filter the example cases based on search query
  const filteredCases = exampleCases.filter(caseItem => 
    caseItem.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    caseItem.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="category-container">
      <h2>Love and Emotional Support</h2>
      
      {/* Search bar */}
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search for help..." 
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>

      {/* List of example cases */}
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

export default Love;
