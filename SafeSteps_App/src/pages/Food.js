// src/pages/Food.js
import React, { useState } from 'react';
import './CategoryPage.css'; // Custom CSS for category pages

function Food() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Example people offering help for food (50 cases)
  const exampleCases = Array.from({ length: 50 }, (_, index) => ({
    name: `Helper ${index + 1}`,
    description: `Offering free food and groceries. Case #${index + 1}`,
    location: index % 2 === 0 ? 'Lisbon' : 'Porto', // Alternate between Lisbon and Porto for variety
  }));

  // Filter the example cases based on search query
  const filteredCases = exampleCases.filter(caseItem => 
    caseItem.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    caseItem.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="category-container">
      <h2>Food Assistance</h2>
      
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

export default Food;
