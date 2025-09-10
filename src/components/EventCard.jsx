import React from "react";

function EventCard({ event, isPast = false }) {
  return (
    <div className={`event-card ${isPast ? 'past' : ''}`}>
      <div className="event-header">
        <span className={`event-category ${event.category?.toLowerCase()}`}>
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
            <span>{event.time}</span>
          </div>
          <div className="event-detail">
            <span>{event.venue}</span>
          </div>
        </div>
        <p className="event-description">{event.description}</p>
      </div>
      <div className="event-actions">
        {!isPast && (
          <button className="register-btn">
            Register
          </button>
        )}
        <button className="details-btn">
          More Details
        </button>
      </div>
    </div>
  );
}

export default EventCard;