import React from "react";

function EventCard({ event, isRegistered, onRegister }) {
  const handleRegisterClick = () => {
    onRegister(event.id);
  };

  return (
    <div className="event-card">
      <div className="event-image">
        <img src={event.image || "/default-event.jpg"} alt={event.name} />
        <span className={`event-badge ${event.category.toLowerCase()}`}>
          {event.category}
        </span>
      </div>
      
      <div className="event-content">
        <h3>{event.name}</h3>
        <div className="event-details">
          <div className="event-detail">
            <span className="icon">📅</span>
            <span>{new Date(event.date).toLocaleDateString()}</span>
          </div>
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
        
        <button 
          className={`register-btn ${isRegistered ? 'registered' : ''}`}
          onClick={handleRegisterClick}
        >
          {isRegistered ? 'Registered ✓' : 'Register Now'}
        </button>
      </div>
    </div>
  );
}

export default EventCard;