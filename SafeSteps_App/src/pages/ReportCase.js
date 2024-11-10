// ReportCase.js
import React, { useState } from 'react';
import './ReportCase.css'; 

const ReportCase = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    location: '',
    categories: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store data to local file or backend
    saveFormData(formData);

    // Clear form
    setFormData({
      name: '',
      contact: '',
      location: '',
      categories: []
    });
  };

  const saveFormData = (data) => {
    // For demo purposes, we're logging the data here.
    // In a real app, this could be an API call to store the data.
    console.log('Form Data:', data);
    // Alternatively, you could use `fs` (if this is a backend) or an API endpoint.
  };

  return (
    <div className="report-case-container">
      <h1>Report case</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="yellow-input"
        />

        <label>Contact:</label>
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          className="yellow-input"
        />

        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="yellow-input"
        />

        <label>Categories (Food, Sleep, Company, Love):</label>
        <input
          type="text"
          name="categories"
          value={formData.categories}
          onChange={handleChange}
          className="yellow-input"
          placeholder="Enter categories separated by commas"
        />

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ReportCase;
