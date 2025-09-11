import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">    
        <div className="footer-col">
          <h2 className="footer-logo">Campus<i style={{color: "#ffaa00"}}>Connect</i></h2>
          <p className="footer-desc">
            Your one-stop hub for discovering, tracking, and attending campus events. 
            Stay connected with the life of your campus.
          </p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Column 2 - About */}
        <div className="footer-col">
          <h3 className="footer-heading">About</h3>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Mission</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* Column 3 - Events */}
        <div className="footer-col">
          <h3 className="footer-heading">Events</h3>
          <ul>
            <li><a href="#">Workshops</a></li>
            <li><a href="#">Sports</a></li>
            <li><a href="#">Cultural</a></li>
          </ul>
        </div>

    
        <div className="footer-col">
          <h3 className="footer-heading">Quick Links</h3>
          <ul>
            <li><a href="/about">About us</a></li>
            <li><a href="events">Upcoming Events</a></li>
            <li><a href="/gallery">Gallery</a></li>
            
          </ul>
        </div>

        {/* Column 5 - Contact */}
        <div className="footer-col">
          <h3 className="footer-heading">Contact</h3>
          <ul>
            <li><a href="#">Contact Form</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="/feedback">Feedback</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CampusConnect. All rights reserved.</p>
      </div>
    </footer>
  );
}
