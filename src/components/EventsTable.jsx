import React, { useState } from "react";
import { FaRegEye, FaRegEdit, FaRegClipboard } from "react-icons/fa";

function EventsTable({ events, isPast = false }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleDetails = (event) => {
    setSelectedEvent(event);
    setShowDetailsModal(true);
    setShowRegisterModal(false);
  };

  const handleRegister = (event) => {
    setSelectedEvent(event);
    setShowRegisterModal(true);
    setShowDetailsModal(false);
  };

  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div className="events-table-container">
      <table className="events-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date & Time</th>
            <th>Venue</th>
            <th>Category</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id} className={isPast ? "past" : ""}>
              <td className="event-name">{event.name}</td>
              <td className="event-datetime">
                {new Date(event.date).toLocaleDateString()}
                <br />
                <span>{event.time}</span>
              </td>
              <td>{event.venue}</td>
              <td>{event.category}</td>
              <td className="event-desc">{event.description}</td>
              <td className="table-actions">
                {!isPast && (
                  <button
                    title="Register"
                    onClick={() => handleRegister(event)}
                  >
                    <FaRegClipboard style={{ marginRight: 4 }} /> Register
                  </button>
                )}
                <button
                  title="Details"
                  onClick={() => handleDetails(event)}
                >
                  <FaRegEye style={{ marginRight: 4 }} /> Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      {showRegisterModal && selectedEvent && (
        <div
          className="details-modal-overlay"
          onClick={() => setShowRegisterModal(false)}
        >
          <div className="details-modal" onClick={stopPropagation}>
            <button
              className="close-btn"
              onClick={() => setShowRegisterModal(false)}
            >
              ×
            </button>
            <h2>Register for {selectedEvent.name}</h2>
            <p>
              <strong>Date:</strong> {new Date(selectedEvent.date).toLocaleString()}
            </p>
            <p>
              <strong>Time:</strong> {selectedEvent.time}
            </p>
            <p>
              <strong>Venue:</strong> {selectedEvent.venue}
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowRegisterModal(false);
              }}
            >
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <button type="submit" className="register-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Details Modal */}
      {showDetailsModal && selectedEvent && (
        <div
          className="details-modal-overlay"
          onClick={() => setShowDetailsModal(false)}
        >
          <div className="details-modal" onClick={stopPropagation}>
            <button
              className="close-btn"
              onClick={() => setShowDetailsModal(false)}
            >
              ×
            </button>
            <h2>{selectedEvent.name}</h2>
            <p>
              <strong>Date:</strong> {new Date(selectedEvent.date).toLocaleString()}
            </p>
            <p>
              <strong>Time:</strong> {selectedEvent.time}
            </p>
            <p>
              <strong>Venue:</strong> {selectedEvent.venue}
            </p>
            <p>
              <strong>Category:</strong> {selectedEvent.category}
            </p>
            <p>
              <strong>Description:</strong> {selectedEvent.description}
            </p>
            {selectedEvent.department && (
              <p>
                <strong>Department:</strong> {selectedEvent.department}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default EventsTable;
