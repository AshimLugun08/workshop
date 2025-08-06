import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact" id="contact">
      <div className="section-title">
        <h2>Get In Touch</h2>
        <p>We'd love to hear from you. Contact us for a free consultation.</p>
      </div>
      <div className="contact-grid">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Have questions or want to learn more about our services? Reach out to us using the information below.</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-text">
                <h4>Our Location</h4>
                <p>123 Business Avenue, Suite 100<br />San Francisco, CA 94107</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-text">
                <h4>Phone Number</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div className="contact-text">
                <h4>Email Address</h4>
                <p>info@nexussolutions.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;