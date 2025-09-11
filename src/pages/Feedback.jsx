import React from "react";
import "../styles/Feedback.css";

export default function Feedback() {
  return (
    <div className="feedback-page">
      <h2>Event Feedback</h2>
      <form
        className="feedback-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("This form is UI-only");
        }}
      >
        <label className="">
          Name
          <input  placeholder="Enter Full Name"/>
        </label>
        <label>
          Email
          <input type="email" placeholder="Enter your email, e.g: tartor@gmail.com"/>
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

        <label>
          Overall, how entertaining was the event?
          <div className="feedback-rating">
            <div className="feedback-rating-container">
              <label className="feedback-container">
                <input
                  type="radio"
                  name="entertainment"
                  className="radio"
                  value="1"
                />
                <div className="feedback-radio-content">
                  <p>1</p>
                </div>
                <h4>Boring</h4>
              </label>
              <label className="feedback-container">
                <input
                  type="radio"
                  name="entertainment"
                  className="radio"
                  value="2"
                />
                <div className="feedback-radio-content">
                  <p>2</p>
                </div>
              </label>
              <label className="feedback-container">
                <input
                  type="radio"
                  name="entertainment"
                  className="radio"
                  value="3"
                />
                <div className="feedback-radio-content">
                  <p>3</p>
                </div>
              </label>
              <label className="feedback-container">
                <input
                  type="radio"
                  name="entertainment"
                  className="radio"
                  value="4"
                />
                <div className="feedback-radio-content">
                  <p>4</p>
                </div>
              </label>
              <label className="feedback-container">
                <input
                  type="radio"
                  name="entertainment"
                  className="radio"
                  value="5"
                />
                <div className="feedback-radio-content">
                  <p>5</p>
                </div>
                <h4>Very Entertaining</h4>
              </label>
            </div>
          </div>
        </label>

        <label>
          How welcoming was the atmosphere?
          <div className="feedback-rating">
            <div className="feedback-rating-container">
              <label className="feedback-container">
                <input
                  type="radio"
                  name="atmosphere"
                  className="radio"
                  value="1"
                />
                <div className="feedback-radio-content">
                  <p>1</p>
                </div>
                <h4>Poor</h4>
              </label>
              <label className="feedback-container">
                <input
                  type="radio"
                  name="atmosphere"
                  className="radio"
                  value="2"
                />
                <div className="feedback-radio-content">
                  <p>2</p>
                </div>
              </label>
              <label className="feedback-container">
                <input
                  type="radio"
                  name="atmosphere"
                  className="radio"
                  value="3"
                />
                <div className="feedback-radio-content">
                  <p>3</p>
                </div>
              </label>
              <label className="feedback-container">
                <input
                  type="radio"
                  name="atmosphere"
                  className="radio"
                  value="4"
                />
                <div className="feedback-radio-content">
                  <p>4</p>
                </div>
              </label>
              <label className="feedback-container">
                <input
                  type="radio"
                  name="atmosphere"
                  className="radio"
                  value="5"
                />
                <div className="feedback-radio-content">
                  <p>5</p>
                </div>
                <h4>Excellent</h4>
              </label>
            </div>
          </div>
        </label>

        <label>
          How likely are you to join future events?
          <div className="feedback-rating">
            <div className="feedback-rating-container">
              <label className="feedback-container">
                <input
                  type="radio"
                  name="futureEvents"
                  className="radio"
                  value="1"
                />
                <div className="feedback-radio-content">
                  <p>1</p>
                </div>
                <h4>Not Likely</h4>
              </label>
              <label className="feedback-container">
                <input
                  type="radio"
                  name="futureEvents"
                  className="radio"
                  value="2"
                />
                <div className="feedback-radio-content">
                  <p>2</p>
                </div>
              </label>
              <label className="feedback-container">
                <input
                  type="radio"
                  name="futureEvents"
                  className="radio"
                  value="3"
                />
                <div className="feedback-radio-content">
                  <p>3</p>
                </div>
              </label>
              <label className="feedback-container">
                <input
                  type="radio"
                  name="futureEvents"
                  className="radio"
                  value="4"
                />
                <div className="feedback-radio-content">
                  <p>4</p>
                </div>
              </label>
              <label className="feedback-container">
                <input
                  type="radio"
                  name="futureEvents"
                  className="radio"
                  value="5"
                />
                <div className="feedback-radio-content">
                  <p>5</p>
                </div>
                <h4>Very Likely</h4>
              </label>
            </div>
          </div>
        </label>

        <label>
          Comments<textarea rows="4"></textarea>
        </label>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
