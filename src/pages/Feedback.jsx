import React from "react";
import "../styles/Feedback.css";
import feedbackHero from "../assets/feed.jpg"; 

export default function Feedback() {
  return (
    <div className="feedback-page">
      <div className="feedback-hero">
        <img src={feedbackHero} alt="Event feedback" />
        <div className="feedback-hero-text">
          <h1>We <i style={{color: "#ffaa00", fontStyle: "normal"}}>Value </i>Your Feedback</h1>
          <p>
            Help us make future events even better by sharing your thoughts and experiences.
          </p>
        </div>
      </div>

      <form
        className="feedback-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("This form is UI-only");
        }}
      >
        <h2>Event Feedback Form</h2>

        <label>
          Name
          <input placeholder="Enter Full Name" />
        </label>

        <label>
          Email
          <input
            type="email"
            placeholder="Enter your email, e.g: tartor@gmail.com"
          />
        </label>

        <label>
          User Type
          <select>
            <option>Student</option>
            <option>Faculty</option>
            <option>Visitor</option>
          </select>
        </label>

        <label>
          Event Attended
          <select>
            <option value="">Select event</option>
            <option>Departmental</option>
            <option>Cultural</option>
            <option>Sports</option>
            <option>Technical</option>
          </select>
        </label>

        {/* Ratings */}
        <fieldset>
          <legend>Overall, how entertaining was the event?</legend>
          <div className="feedback-rating">
            {[1, 2, 3, 4, 5].map((n) => (
              <label key={n} className="feedback-container">
                <input type="radio" name="entertainment" value={n} />
                <div className="feedback-radio-content">{n}</div>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend>How welcoming was the atmosphere?</legend>
          <div className="feedback-rating">
            {[1, 2, 3, 4, 5].map((n) => (
              <label key={n} className="feedback-container">
                <input type="radio" name="atmosphere" value={n} />
                <div className="feedback-radio-content">{n}</div>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend>How likely are you to join future events?</legend>
          <div className="feedback-rating">
            {[1, 2, 3, 4, 5].map((n) => (
              <label key={n} className="feedback-container">
                <input type="radio" name="futureEvents" value={n} />
                <div className="feedback-radio-content">{n}</div>
              </label>
            ))}
          </div>
        </fieldset>

        <label>
          Comments
          <textarea rows="4" placeholder="Share your thoughts..."></textarea>
        </label>

        <button className="btn">Submit Feedback</button>
      </form>
    </div>
  );
}
