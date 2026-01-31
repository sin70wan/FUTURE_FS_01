// components/Skills.jsx
import React from 'react';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2> Skills & Learning</h2>
      <p>Tools and technologies I'm working with</p>
      
      <div className="terminal">
        <div className="terminal-header">
          <span></span>
          <span></span>
          <span></span>
          <div className="terminal-title">bash --skills</div>
        </div>
        <div className="terminal-body">
          <div>$ ./check_current_skills</div>
          <div>&gt; TryHackMe: Active</div>
          <div>&gt; PortSwigger: Learning</div>
          <div>&gt; PicoCTF: Completed</div>
          <div>&gt; Status: Building Foundations</div>
        </div>
      </div>
      
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Web Development</h3>
          <ul>
            <li>React.js</li>
            <li>Node.js</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
        
        <div className="skill-category">
          <h3>Security Practice</h3>
          <ul>
            <li>TryHackMe</li>
            <li>PortSwigger</li>
            <li>PicoCTF</li>
            <li>OWASP Basics</li>
            <li>Burp Suite</li>
          </ul>
        </div>
        
        <div className="skill-category">
          <h3>Tools</h3>
          <ul>
            <li>VS Code</li>
            <li>Linux Terminal</li>
            <li>Postman</li>
            <li>Docker Basics</li>
            <li>MariaDB</li>
          </ul>
        </div>
        
        <div className="skill-category">
          <h3>Currently Learning</h3>
          <ul>
            <li>Web App Security</li>
            <li>API Security</li>
            <li>Secure Coding</li>
            <li>Cloud Basics</li>
            <li>React Native</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;