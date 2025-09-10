import React from "react";
import "../styles/Footer.css";
import bg from "../assets/bg-img.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <div className="footer-small-text">
            <h2 className="footer-logo">Campus Connect</h2>
            <p className="footer-text">
              If your campus updates aren’t all in one place, neither are your students.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>Campus Life</h3>
              <ul>
                <li><a href="#">Events & Activities</a></li>
                <li><a href="#">Customer Stories</a></li>
                <li><a href="#">Campus Gallery</a></li>
                <li><a href="#">Guides</a></li>
                <li><a href="#">Webinars</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Support</h3>
              <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Feedback</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Social</h3>
              <ul>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <span className="demo-label">Events</span>
          <h3 className="demo-title">Get Event Alerts</h3>
          <form className="demo-form">
            <input
              type="email"
              placeholder="Enter your email..."
              required
            />
            <button type="submit">→</button>
          </form>
        </div>
      </div>

      <div className="footer-bg">
        <img src={bg} alt="Campus Connect background illustration" />
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CampusConnect — Built for Aptech</p>
        <div className="footer-bottom-links">
          <a href="#">Support</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
