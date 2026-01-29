// server.js - Complete with Email Support
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'portfolio_db',
  port: process.env.DB_PORT || 3306
});

db.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
  } else {
    console.log('✅ Connected to MariaDB database');
    createTables();
  }
});

function createTables() {
  const messagesTable = `
    CREATE TABLE IF NOT EXISTS messages (
      id INT AUTO_INCREMENT PRIMARY KEY,
      identity VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      status ENUM('pending', 'sent', 'failed') DEFAULT 'pending'
    )
  `;
  
  db.query(messagesTable, (err) => {
    if (err) {
      console.error('❌ Error creating table:', err.message);
    } else {
      console.log('✅ Messages table ready');
    }
  });
}

// Email Transporter Configuration
let transporter;
let emailEnabled = false;

if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  // For Gmail
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  emailEnabled = true;
  console.log('✅ Email service enabled (Gmail)');
} else if (process.env.EMAIL_HOST && process.env.EMAIL_PORT) {
  // For other SMTP (like Ethereal)
  transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  emailEnabled = true;
  console.log(`✅ Email service enabled (${process.env.EMAIL_HOST})`);
} else {
  console.log('⚠️  Email service disabled - Set EMAIL_USER and EMAIL_PASS in .env');
}

// Test email connection
if (emailEnabled && transporter) {
  transporter.verify((error) => {
    if (error) {
      console.error('❌ Email connection failed:', error.message);
      console.log('💡 Tip: Check your .env credentials or use Ethereal Email for testing');
    } else {
      console.log('✅ Email server is ready to send');
    }
  });
}

// 📨 Contact Form API with Email
app.post('/api/contact', async (req, res) => {
  try {
    const { identity = 'guest_user_01', email, message } = req.body;
    
    console.log('📩 New contact submission:', { identity, email });
    
    if (!email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Email and message are required' 
      });
    }

    // Save to database first
    const insertQuery = 'INSERT INTO messages (identity, email, message, status) VALUES (?, ?, ?, ?)';
    db.query(insertQuery, [identity, email, message, 'pending'], async (err, result) => {
      if (err) {
        console.error('❌ Database error:', err.message);
        return res.status(500).json({ 
          success: false, 
          error: 'Failed to save message to database',
          details: err.message 
        });
      }

      const messageId = result.insertId;
      console.log('✅ Message saved to database. ID:', messageId);

      let emailStatus = 'failed';
      
      // Try to send emails if enabled
      if (emailEnabled && transporter) {
        try {
          // 1. Send notification to yourself (the owner)
          const ownerMailOptions = {
            from: `"Portfolio Contact" <${process.env.EMAIL_USER || process.env.EMAIL_FROM}>`,
            to: process.env.EMAIL_USER || process.env.EMAIL_FROM,
            replyTo: email,
            subject: `🚀 New Message: ${identity}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #333; border-bottom: 2px solid #00ff00; padding-bottom: 10px;">
                  💌 New Portfolio Message
                </h2>
                
                <div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
                  <h3 style="color: #666; margin-top: 0;">👤 Contact Details</h3>
                  <p><strong>Name:</strong> ${identity}</p>
                  <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                  <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
                  <p><strong>Message ID:</strong> #${messageId}</p>
                </div>

                <div style="background: #fff; border-left: 4px solid #00ff00; padding: 15px; margin: 20px 0;">
                  <h4 style="color: #333; margin-top: 0;">💬 Message:</h4>
                  <p style="white-space: pre-line; color: #444; line-height: 1.6;">${message}</p>
                </div>

                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px dashed #ddd; color: #666; font-size: 12px;">
                  <p>📊 <strong>Quick Actions:</strong></p>
                  <p>↪ <a href="mailto:${email}">Reply to ${identity}</a></p>
                  <p>📋 <a href="http://localhost:5000/api/messages">View All Messages</a></p>
                </div>
              </div>
            `
          };

          await transporter.sendMail(ownerMailOptions);
          console.log('✅ Notification email sent to owner');
          
          // 2. Send auto-reply to the sender
          try {
            const replyMailOptions = {
              from: `"Lina Temam - Cyber Developer" <${process.env.EMAIL_USER || process.env.EMAIL_FROM}>`,
              to: email,
              subject: '✅ Message Received - Lina Temam',
              html: `
                <div style="font-family: 'Courier New', monospace; background: #0a0a0a; color: #00ff00; padding: 30px;">
                  <div style="max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #00ff00; border-bottom: 1px solid #00ff00; padding-bottom: 10px;">
                      🚀 MESSAGE TRANSMISSION SUCCESSFUL
                    </h2>
                    
                    <div style="border: 1px solid #00ff00; padding: 20px; margin: 20px 0; background: rgba(0, 255, 0, 0.05);">
                      <p><strong>🔐 STATUS:</strong> ENCRYPTED &amp; RECEIVED</p>
                      <p><strong>👤 RECIPIENT:</strong> Lina Temam (Cyber Developer)</p>
                      <p><strong>🆔 MESSAGE ID:</strong> #${messageId}</p>
                      <p><strong>⏰ TIME:</strong> ${new Date().toLocaleString()}</p>
                    </div>
                    
                    <p>Thank you for reaching out! I've received your message and will review it shortly.</p>
                    
                    <div style="margin-top: 30px; padding: 15px; border: 1px dashed #00ff00; font-size: 14px;">
                      <p><strong>📧 What happens next:</strong></p>
                      <p>1. I'll review your message within 24 hours</p>
                      <p>2. You'll receive a personal response from me</p>
                      <p>3. For urgent matters, connect via social links</p>
                    </div>
                    
                    <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #333;">
                      <p style="color: #8be9fd;">// Lina Temam</p>
                      <p style="color: #666; font-size: 12px;">Cyber Security + Developer</p>
                    </div>
                  </div>
                </div>
              `
            };

            await transporter.sendMail(replyMailOptions);
            console.log('✅ Auto-reply sent to sender');
            emailStatus = 'sent';
            
          } catch (replyError) {
            console.warn('⚠️  Auto-reply failed, but notification sent:', replyError.message);
            emailStatus = 'partial';
          }
          
        } catch (emailError) {
          console.warn('⚠️  Email sending failed:', emailError.message);
          console.log('💡 Still saved to database!');
        }
      } else {
        console.log('ℹ️  Email service not configured, only saved to database');
      }

      // Update email status in database
      db.query('UPDATE messages SET status = ? WHERE id = ?', [emailStatus, messageId]);

      // Send response
      res.status(200).json({
        success: true,
        message: emailStatus === 'sent' 
          ? 'Message sent successfully! Check your email for confirmation.' 
          : emailStatus === 'partial'
          ? 'Message saved! (Auto-reply failed but notification sent)'
          : 'Message saved to database! (Email service not configured)',
        details: {
          messageId: messageId,
          emailStatus: emailStatus,
          savedToDatabase: true,
          emailConfigured: emailEnabled
        }
      });
    });

  } catch (error) {
    console.error('❌ Server error:', error.message);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      details: error.message
    });
  }
});

// 📊 Get all messages
app.get('/api/messages', (req, res) => {
  const query = 'SELECT * FROM messages ORDER BY created_at DESC';
  db.query(query, (err, results) => {
    if (err) {
      console.error('❌ Error fetching messages:', err.message);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json(results);
  });
});

// ℹ️ Server info
app.get('/', (req, res) => {
  res.json({
    message: '🚀 Portfolio Backend API',
    version: '2.0.0',
    features: {
      database: 'MariaDB ✅',
      email: emailEnabled ? 'Configured ✅' : 'Not Configured ⚠️',
      endpoints: ['POST /api/contact', 'GET /api/messages']
    },
    status: 'Operational',
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`
  🚀 PORTFOLIO BACKEND WITH EMAIL
  ================================
  📍 URL: http://localhost:${PORT}
  📊 Database: ${process.env.DB_NAME || 'portfolio_db'}
  📧 Email: ${emailEnabled ? 'ENABLED ✅' : 'DISABLED ⚠️'}
  🕒 Started: ${new Date().toLocaleString()}
  ================================
  `);
  
  if (!emailEnabled) {
    console.log(`
  💡 EMAIL SETUP INSTRUCTIONS:
  ----------------------------
  1. Edit .env file in backend folder
  2. Add these lines (for Gmail):
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASS=your-16-char-app-password
  
  3. For testing, use Ethereal Email:
     - Go to: https://ethereal.email/
     - Create free account
     - Use provided SMTP credentials
  ----------------------------
    `);
  }
});