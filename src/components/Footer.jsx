// components/Footer.jsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer-terminal">
        <div className="terminal-header">
          <span style={{ color: '#ff5555' }}>●</span>
          <span style={{ color: '#ffb86c' }}>●</span>
          <span style={{ color: '#50fa7b' }}>●</span>
          <div className="terminal-title">system_status.sh --footer</div>
        </div>
        
        <div className="terminal-body">
          <div className="footer-content">
            <div className="footer-grid">
              <div className="footer-section">
                <h3>// SECURE CONNECTIONS</h3>
                <div className="footer-links">
                  <a href="linatemam0707@gmail.com" className="footer-link">
                    <span className="link-icon">📧</span> linatemam0707@gmail.com
                  </a>
                  <a href="https://github.com/lina-temam" target="_blank" rel="noopener noreferrer" className="footer-link">
                    <span className="link-icon">🔧</span> github.com/lina-temam
                  </a>
                  <a href="https://www.linkedin.com/in/lina-r" target="_blank" rel="noopener noreferrer" className="footer-link">
                    <span className="link-icon">💼</span> https://www.linkedin.com/in/lina
                  </a>
                </div>
              </div>
              
              <div className="footer-section">
                <h3>// SOCIAL CHANNELS</h3>
                <div className="footer-links">
                  <a href="https://twitter.com/lina_temam" target="_blank" rel="noopener noreferrer" className="footer-link">
                    <span className="link-icon">🐦</span> @lina_temam
                  </a>
                  <a href="https://instagram.com/lina.temam" target="_blank" rel="noopener noreferrer" className="footer-link">
                    <span className="link-icon">📸</span> instagram.com/lina.temam
                  </a>
                  <a href="https://medium.com/@lina.temam" target="_blank" rel="noopener noreferrer" className="footer-link">
                    <span className="link-icon">✍️</span> medium.com/@lina.temam
                  </a>
                </div>
              </div>
              
              <div className="footer-section">
                <h3>// SYSTEM STATUS</h3>
                <div className="status-info">
                  <div className="status-item">
                    <span className="status-indicator active"></span>
                    <span>Portfolio: ONLINE</span>
                  </div>
                  <div className="status-item">
                    <span className="status-indicator active"></span>
                    <span>Contact: ACTIVE</span>
                  </div>
                  <div className="status-item">
                    <span className="status-indicator active"></span>
                    <span>Security: ENABLED</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="footer-bottom">
              <div className="copyright">
                <span className="terminal-prompt">[root@portfolio]</span> ~# Copyright © {currentYear} Lina Temam. All systems secure.
              </div>
              <div className="footer-tagline">
                Built with React & Node.js | Encrypted with AES-256
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;