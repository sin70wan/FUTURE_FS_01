// components/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    identity: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState(''); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.message) {
      setStatus('ERROR: EMAIL AND MESSAGE REQUIRED');
      setStatusType('error');
      return;
    }

    setIsSending(true);
    setStatus('> Establishing encrypted channel...');
    setStatusType('');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('SUCCESS: ENCRYPTED MESSAGE TRANSMITTED TO DATABASE & EMAIL SENT');
        setStatusType('success');
        setFormData({
          identity: '',
          email: '',
          message: ''
        });
      } else {
        setStatus(`ERROR: ${data.message || 'Failed to send message'}`);
        setStatusType('error');
      }
    } catch (error) {
      setStatus('ERROR: CONNECTION FAILED. CHECK SERVER CONNECTION.');
      setStatusType('error');
      console.error('Error:', error);
    } finally {
      setIsSending(false);
      
      // Clear status after 5 seconds
      setTimeout(() => {
        setStatus('');
        setStatusType('');
      }, 5000);
    }
  };

  const handleReset = () => {
    setFormData({
      identity: 'guest_user_01',
      email: '',
      message: ''
    });
    setStatus('');
    setStatusType('');
  };

  return (
    <section className="contact" id="contact">
      <h2> Contact Terminal</h2>
      
      <div className="terminal" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="terminal-header">
          <span style={{ color: '#ff5555' }}>●</span>
          <span style={{ color: '#ffb86c' }}>●</span>
          <span style={{ color: '#50fa7b' }}>●</span>
          <div className="terminal-title">Contact Protocol - /contact-protocol</div>
        </div>
        
        <div className="terminal-body">
          <div>secure-sh</div>
          <div style={{ marginTop: '10px' }}>
            <span className="terminal-prompt">[root@tit~]#</span>
            <span> ./initiate contact.sh --secure</span>
          </div>
          <div style={{ marginTop: '10px' }}>
            <span className="terminal-prompt">&gt;</span>
            <span> Establishing encrypted channel...Done.</span>
          </div>
          <div>
            <span className="terminal-prompt">&gt;</span>
            <span> Loading interface...Ready.</span>
          </div>
          
          <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
            <div>
              <div style={{ color: '#ffb86c', marginBottom: '5px' }}>ENTER_IDENTITY:</div>
              <div className="input-field">
                <input
                  type="text"
                   placeholder="eneter your name"
                  name="identity"
                  value={formData.identity}
                  onChange={handleChange}
                  className="terminal-input"
                  style={{ 
                    color: '#00ff00',
                    backgroundColor: 'rgba(0, 255, 0, 0.1)',
                    border: '1px solid #00ff00',
                    padding: '10px',
                    borderRadius: '4px',
                    width: '100%'
                  }}
                />
              </div>
            </div>
            
            <div style={{ marginTop: '20px' }}>
              <div style={{ color: '#ffb86c', marginBottom: '5px' }}>TARGET_COORDINATES (EMAIL):</div>
              <div className="input-field">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="terminal-input"
                  style={{ 
                    color: '#00ff00',
                    backgroundColor: 'rgba(0, 255, 0, 0.1)',
                    border: '1px solid #00ff00',
                    padding: '10px',
                    borderRadius: '4px',
                    width: '100%'
                  }}
                  required
                />
              </div>
            </div>
            
            <div style={{ marginTop: '20px' }}>
              <div style={{ color: '#ffb86c', marginBottom: '5px' }}>PAYLOAD_DATA (MESSAGE):</div>
              <div className="input-field">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your encrypted message here..."
                  rows="6"
                  className="terminal-input"
                  style={{ 
                    color: '#00ff00',
                    backgroundColor: 'rgba(0, 255, 0, 0.1)',
                    border: '1px solid #00ff00',
                    padding: '10px',
                    borderRadius: '4px',
                    width: '100%',
                    resize: 'vertical',
                    fontFamily: "'Courier New', monospace"
                  }}
                  required
                />
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
              <button
                type="submit"
                className="btn"
                disabled={isSending}
                style={{ 
                  backgroundColor: isSending ? '#333' : '#00ff00',
                  color: isSending ? '#666' : '#000',
                  cursor: isSending ? 'not-allowed' : 'pointer'
                }}
              >
                {isSending ? 'SENDING...' : 'EXECUTE_SEND'}
              </button>
              <button
                type="button"
                className="btn btn-outline"
                onClick={handleReset}
              >
                [ABORT]
              </button>
            </div>
          </form>
          
          {status && (
            <div style={{ 
              marginTop: '20px', 
              padding: '10px',
              backgroundColor: statusType === 'success' ? 'rgba(80, 250, 123, 0.1)' : 'rgba(255, 85, 85, 0.1)',
              border: `1px solid ${statusType === 'success' ? '#50fa7b' : '#ff5555'}`,
              borderRadius: '4px',
              color: statusType === 'success' ? '#50fa7b' : '#ff5555'
            }}>
              <span className="terminal-prompt">&gt;</span> {status}
            </div>
          )}
          
          <div style={{ marginTop: '40px', color: '#8be9fd' }}>
            <div style={{ color: '#ffb86c', marginBottom: '10px' }}># OR CONNECT VIA DIRECT UPLINK:</div>
            <div className="social-links">
              <a href="linatemam0707@gmail.com" className="social-link">
                <span className="social-icon">✉</span> linatemam0707@gmail.com
              </a>
              <a href="https://github.com/sin70wan" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">🐙</span> github.com/sin70wan
              </a>
              <a href="https://www.linkedin.com/in/lina-r" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">💼</span>https://www.linkedin.com/in/lina
              </a>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">📸</span> instagram.com/yourusername
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;