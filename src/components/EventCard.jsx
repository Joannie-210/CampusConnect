import React, { useState } from "react";


function EventCard({ event, isPast = false }) {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);


  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div className={`event-card ${isPast ? 'past' : ''}`}>

      {event.image && (
        <div className="event-image-container">
         <img src={event.image} alt={event.name} className="event-image" />
        </div>
      )}
      <div className="event-header">
        <span className={`event-category ${event.category.toLowerCase()}`}>
          {event.category}
        </span>
        <span className="event-date">
          {new Date(event.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          })}
        </span>
      </div>

      <div className="event-content">
        <h3>{event.name}</h3>
        <div className="event-details">
          <div className="event-detail">
            <span className="icon"></span>
            <span>{event.time}</span>
          </div>
          <div className="event-detail">
            <span className="icon"></span>
            <span>{event.venue}</span>
          </div>
        </div>
        <p className="event-description">{event.description}</p>
      </div>

      <div className="event-actions">
        {!isPast && (
          <button className="register-btn" onClick={() => setShowRegisterModal(true)}>
            Register
          </button>
        )}
        <button
          className="details-btn"
          onClick={() => setShowDetailsModal(true)}
        >
          More Details
        </button>
      </div>

      
      {showRegisterModal && !showDetailsModal && (
        <div className="details-modal-overlay" onClick={() => setShowRegisterModal(false)}>
          <div className="details-modal" onClick={stopPropagation}>
            <button className="close-btn" onClick={() => setShowRegisterModal(false)}>×</button>
            <h2>Register for {event.name}</h2>
            <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Venue:</strong> {event.venue}</p>
            <form onSubmit={e => { e.preventDefault(); setShowRegisterModal(false); }}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <button type="submit" className="register-btn">Submit</button>
            </form>
          </div>
        </div>
      )}

      {showDetailsModal && !showRegisterModal && (
        <div className="details-modal-overlay" onClick={() => setShowDetailsModal(false)}>
          <div className="details-modal" onClick={stopPropagation}>
            <button className="close-btn" onClick={() => setShowDetailsModal(false)}>×</button>
            <h2>{event.name}</h2>
            <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Venue:</strong> {event.venue}</p>
            <p><strong>Category:</strong> {event.category}</p>
            <p><strong>Description:</strong> {event.description}</p>
            {event.department && <p><strong>Department:</strong> {event.department}</p>}
          </div>
        </div>
      )}
    </div>
  );
}

export default EventCard;