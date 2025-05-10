// src/pages/AboutUs.jsx
import React from 'react';
import '../styles/AboutUs.css'; // Adjust path if necessary

const AboutUs = () => {
  return (
    <div className="aboutus-page">
      <h1>About Us</h1>
      <p className="about-intro">
        Welcome to Travel Companion! This platform is built with a passion for making travel easier and smarter.
      </p>
      <div className="about-team">
        <div className="about-card">
          <h2>Frontend Developer</h2>
          <p><strong>Kummari Yasaswini</strong></p>
          <p>Created the UI with React and CSS for a smooth user experience.</p>
        </div>
        <div className="about-card">
          <h2>Backend Developer</h2>
          <p><strong>Yerradla Sri Lakshmi</strong></p>
          <p>Built backend logic and APIs using Spring Boot and MySQL.</p>
        </div>
        <div className="about-card">
          <h2>Connectivity & Integration</h2>
          <p><strong>Chapa Deekshitha</strong></p>
          <p>Handled integration of AI assistant, deployment, and backend-frontend linkage.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
