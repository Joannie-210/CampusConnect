import React from 'react'

function EventsTable({ events, isPast = false, onViewPhotos }) {
  return (
    <div className="events-table-container">
      <table className="events-table">
        <thead>
          <tr>
            <th>Date & Time</th>
            <th>Event Name</th>
            <th>Category</th>
            <th>Venue</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id} className={isPast ? 'past' : ''}>
              <td>
                <div className="event-datetime">
                  <div>{new Date(event.date).toLocaleDateString()}</div>
                  <div>{event.time}</div>
                </div>
              </td>
              <td className="event-name">{event.name}</td>
              <td>
                <span className={`event-category ${event.category.toLowerCase()}`}>
                  {event.category}
                </span>
              </td>
              <td>{event.venue}</td>
              <td className="event-desc">{event.description}</td>
              <td>
                <div className="table-actions">
                  {!isPast && (
                    <button className="register-btn">Register</button>
                  )}
                  <button 
                    className="details-btn"
                    onClick={isPast ? () => onViewPhotos(event) : () => {}}
                  >
                    {isPast ? 'View Photos' : 'Details'}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventsTable
