// src/components/Hero.jsx
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Plan the Journey Behind the Scenes</h1>
        <p>Your official hub for railway timetable documentation and coordination.</p>
        <button className="hero-button">Explore Timetables</button>
      </div>
    </section>
  );
};

export default Hero;
