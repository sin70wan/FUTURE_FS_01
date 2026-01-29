// components/Skills.jsx
import React from 'react';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>## Technical Arsenal</h2>
      <p>Comprehensive toolkit for defense and development.</p>
      
      <div className="terminal">
        <div className="terminal-header">
          <span style={{ color: '#ff5555' }}>●</span>
          <span style={{ color: '#ffb86c' }}>●</span>
          <span style={{ color: '#50fa7b' }}>●</span>
          <div className="terminal-title">bash - load_modules.sh</div>
        </div>
        <div className="terminal-body">
          <div>$ ./load_modules --all</div>
          <div>&gt; Loading offensive security modules...</div>
          <div>&gt; Loading backend architecture modules...</div>
          <div>&gt; Loading cryptography modules...</div>
          <div>&gt; Loading frontend security modules...</div>
          <div>&gt; All modules loaded successfully.</div>
        </div>
      </div>
      
      <div className="skills-grid">
        <div className="skill-category">
          <h3>### Offensive Security</h3>
          <ul>
            <li>Pen Testing</li>
            <li>Burp Suite</li>
            <li>OWASP Top 10</li>
          </ul>
        </div>
        
        <div className="skill-category">
          <h3>### Backend Architecture</h3>
          <ul>
            <li>Node.js</li>
            <li>Go</li>
            <li>PostgreSQL</li>
            <li>Redis</li>
          </ul>
        </div>
        
        <div className="skill-category">
          <h3>### Cryptography & Auth</h3>
          <ul>
            <li>OAuth 2.0</li>
            <li>JWT</li>
            <li>Zero Knowledge</li>
          </ul>
        </div>
        
        <div className="skill-category">
          <h3>### Frontend Secure</h3>
          <ul>
            <li>Next.js</li>
            <li>React</li>
            <li>CSP Headers</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;