// components/About.jsx
import React, { useState } from 'react';
// Import your image from assets - UPDATE THIS PATH!
import profileImage from '../assets/image.png'; // Change to your actual image filename

const About = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="about" id="about">
      {/* Simple about content with animated image */}
      <div className="about-simple">
        {/* Left: Text content */}
        <div className="about-text-simple">
          <h2 className="whoami-title">
            <span className="highlight">$</span> whoami
          </h2>
          <div className="terminal-response">
            <span className="username">lina_temam</span>
            <span className="role">Cyber Security + Developer</span>
          </div>
          
          <div className="bio-text">
            <p>
              I bridge cybersecurity and software development to create systems that are 
              <span className="highlight"> secure by design</span>. I don't just build applications—
              I architect digital fortresses where every line of code serves as both 
              functionality and defense.
            </p>
            <p>
              With experience in both <span className="highlight">offensive security</span> (testing systems by breaking them) 
              and <span className="blue-team">defensive architecture</span> (building systems to withstand attacks), I approach 
              security from all angles to ensure comprehensive protection.
            </p>
          </div>
          
          <div className="simple-philosophy">
            <div className="philosophy-line">"Secure by Design,</div>
            <div className="philosophy-line">Tested by Experience,</div>
            <div className="philosophy-line">Trusted by Users"</div>
          </div>
        </div>
        
        {/* Right: Animated profile image */}
        <div className="profile-image-animated-container">
          <div 
            className={`profile-image-wrapper ${isHovering ? 'hovering' : ''}`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Glowing border effect */}
            <div className="image-glow"></div>
            
            {/* Main image with black & white effect */}
            <img 
              src={profileImage} 
              alt="Lina Temam" 
              className={`profile-image-animated ${isHovering ? 'color' : 'bw'}`}
            />
            
            {/* Floating particles effect */}
            <div className="particles">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="particle" style={{ '--i': i }}></div>
              ))}
            </div>
            
            {/* Scan line effect */}
            <div className="scan-line"></div>
            
            {/* Status indicator */}
            <div className="image-status-animated">
              <span className="status-pulse"></span>
              <span className="status-text">SYSTEM ACTIVE</span>
            </div>
          </div>
          
          {/* Terminal commands */}
          <div className="image-terminal">
            <div className="terminal-line">
              <span className="highlight">$</span> ./image_status.sh
            </div>
            <div className="terminal-line">
              <span className="highlight">&gt;</span> SECURITY: ENABLED
            </div>
            <div className="terminal-line">
              <span className="highlight">&gt;</span> HOVER: {isHovering ? 'COLOR_MODE' : 'BW_MODE'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;