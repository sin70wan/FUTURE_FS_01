// components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <h2>## The Architect & The Breaker</h2>
      <p>
        Security isn't a feature—it's the foundation. With a background in both 
        offensive security (Red Teaming) and scalable software architecture, I bridge 
        the critical gap between "fast" and "safe."
      </p>
      <p>
        I don't just patch vulnerabilities; I design self-healing architectures that 
        withstand modern attack vectors. My code is clean, my audits are ruthless.
      </p>
      
      <div className="stats">
        <div className="stat-item">
          <div className="stat-number">05+</div>
          <div className="stat-label">Years Exp</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">50+</div>
          <div className="stat-label">Audits</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">100%</div>
          <div className="stat-label">Secure</div>
        </div>
      </div>
      
      <div className="terminal">
        <div className="terminal-header">
          <span style={{ color: '#ff5555' }}>●</span>
          <span style={{ color: '#ffb86c' }}>●</span>
          <span style={{ color: '#50fa7b' }}>●</span>
          <div className="terminal-title">zsh - secure-channel - 80×24</div>
        </div>
        <div className="terminal-body">
          <div>// LOADING_MODULES ...</div>
          <div style={{ marginTop: '10px' }}>&gt; Initializing secure environment...</div>
          <div>&gt; Loading encryption protocols...</div>
          <div>&gt; Ready for secure operations.</div>
        </div>
      </div>
    </section>
  );
};

export default About;