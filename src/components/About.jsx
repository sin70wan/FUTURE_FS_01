// components/About.jsx
import React from 'react';

const About = () => {
  const skills = [
    'Security Architecture',
    'Penetration Testing',
    'Full-Stack Development',
    'DevSecOps',
    'Cloud Security',
    'Cryptography',
    'API Security',
    'Incident Response'
  ];

  return (
    <section className="about" id="about">
      <h2>## About Me</h2>
      
      <div className="about-content">
        {/* Left Column - Text */}
        <div className="about-left">
          <div className="about-text">
            <p>
              I bridge the worlds of cybersecurity and software development. 
              I don't just build applications—I architect fortresses. Every line of code 
              I write is a layer of defense, every system I design is a challenge to break.
            </p>
            <p>
              As both <strong>Red Team</strong> (attacker) and <strong>Blue Team</strong> (defender), 
              I understand security from all angles. My approach combines offensive security 
              expertise with scalable software architecture to create systems that are 
              not just functional, but fundamentally secure.
            </p>
          </div>
          
          <div className="skills-list">
            <h3>Core Expertise:</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="skill-bullet">◈</span>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right Column - Profile Image */}
        <div className="about-right">
          <div className="profile-image-container">
            <div className="image-border"></div>
            {/* <img 
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Lina Temam" 
              className="profile-image"
            /> */}
          </div>
        </div>
      </div>
      
      {/* Terminal Section */}
      {/* <div className="terminal">
        <div className="terminal-header">
          <span style={{ color: '#ff5555' }}>●</span>
          <span style={{ color: '#ffb86c' }}>●</span>
          <span style={{ color: '#50fa7b' }}>●</span>
          <div className="terminal-title">terminal:~ $ whoami</div>
        </div>
        <div className="terminal-body">
          <div>$ whoami</div>
          <div style={{ color: '#50fa7b' }}>lina_temam</div>
          <div>&nbsp;</div>
          <div>$ cat about.txt</div>
          <div>
            <div>Name: Lina Temam</div>
            <div>Role: Cyber Security Developer</div>
            <div>Focus: Secure by Design Architecture</div>
            <div>Approach: Build systems that withstand attacks</div>
            <div>Philosophy: Security is not a feature, it's the foundation</div>
          </div>
          <div>&nbsp;</div>
          <div>$ ./security_check --current-status</div>
          <div>&gt; System: ACTIVE</div>
          <div>&gt; Security: ENABLED</div>
          <div>&gt; Mode: BUILD & BREAK</div>
        </div>
      </div> */}
    </section>
  );
};

export default About;