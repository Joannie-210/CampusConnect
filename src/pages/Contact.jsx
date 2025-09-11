import React from "react";
import "../styles/Contact.css";
import contactBg from "../assets/contacts.jpg"; 

export default function Contact() {
  return (
    <div className="contact-page">

      <div 
        className="contact-hero" 
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="overlay">
        <h2>Get in <i style={{color: "#ffaa00", fontStyle: "normal"}}>Touch</i></h2>
        </div>
      </div>

      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Type your message here"></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        
        <div className="contact-info">
          <h3>Campus Location</h3>
          <p>123 College Avenue, Main City, NG</p>
          <p>Email: info@campusconnect.edu</p>
          <p>Phone: +234 800 123 4567</p>

          <div className="map-container">
            <iframe
              title="Campus Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31517.071382996715!2d7.4659!3d9.05785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b31c11c44f3%3A0x31f9c62e622f73bb!2sUniversity%20of%20Abuja!5e0!3m2!1sen!2sng!4v1694249588820!5m2!1sen!2sng"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
