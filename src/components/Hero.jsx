// components/Hero.jsx
import React from 'react';

const Hero = () => {
  // Function to scroll to contact section
  const handleStartConversation = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Function to open GitHub (replace with your actual GitHub URL)
  const handleViewGitHub = () => {
    // Replace 'your-username' with your actual GitHub username
    window.open('https://github.com/sin70wan', '_blank', 'noopener,noreferrer');
  };

  // Alternative: Open LinkedIn or other social
  const handleViewLinkedIn = () => {
    // window.open('https://linkedin.com/in/your-username', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="hero" id="hero">
     <h1>I Secure Systems. I Build Them Too.</h1>
<p>Cybersecurity analyst by profession, web developer by passion. Creating applications that are secure by design, not by accident.</p>
      <div className="hero-buttons">
        <button 
          className="btn" 
          onClick={handleStartConversation}
          aria-label="Go to contact section"
        >
          Start Conversation
        </button>
        
        <button 
          className="btn btn-outline" 
          onClick={handleViewGitHub}
          aria-label="Visit GitHub profile"
        >
          View GitHub
        </button>
        
        {/* Optional: Add LinkedIn button */}
        {/* <button 
          className="btn btn-outline" 
          onClick={handleViewLinkedIn}
          aria-label="Visit LinkedIn profile"
        >
          View LinkedIn
        </button> */}
      </div>
    </section>
  );
};

export default Hero;