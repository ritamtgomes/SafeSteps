import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
  return (
    <div className="home-container">
      <div className="creative-header">
        <h1 className="creative-title">SafeSteps</h1>
      </div>
      <Link to="/let-me-help">
        <button className="big-button">I GIVE HELP</button>
      </Link>
      <Link to="/help-me">
        <button className="medium-button">I NEED HELP</button>
      </Link>
      <Link to="/emergency-contacts">
        <button className="small-button">I CALL EMERGENCY</button>
      </Link>
      <Link to="/ReportCase">
        <button className="map-button">REPORT CASE</button>
      </Link>

     
      <footer>
        <span className="warning">⚠️</span>
        <p>We don't take any responsibility for your actions! Don't trust everyone!</p>
      </footer>
    </div>
  );
};

export default Home;