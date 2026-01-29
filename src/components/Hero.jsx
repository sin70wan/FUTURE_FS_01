// components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <h1># I build secure systems.<br />I break them to make them stronger.</h1>
      <p>Senior Security Engineer & Full-Stack Developer helping companies secure their infrastructure before the threats arrive.</p>
      <div className="hero-buttons">
        <button className="btn">Start Conversation</button>
        <button className="btn btn-outline">View GitHub</button>
      </div>
    </section>
  );
};

export default Hero;