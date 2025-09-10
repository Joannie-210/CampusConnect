import React, { useState, useEffect } from "react";
import eventsData from "../data/events.json";
import "../styles/Events.css";

function EventsPage() {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");
  const [view, setView] = useState("cards");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    // Simulate API call with a delay
    setTimeout(() => {
      // Add sample photos to events for demonstration
      const eventsWithPhotos = eventsData.map(event => ({
        ...event,
        photos: event.photos || [
          "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        ]
      }));
      setEvents(eventsWithPhotos);
    }, 500);
  }, []);

  // Filter events based on category and search query
  const filteredEvents = events.filter((e) => {
    const matchesCategory = filter === "All" || e.category === filter;
    const name = (e.name || "").toLowerCase();
    const description = (e.description || "").toLowerCase();
    const matchesSearch = name.includes(searchQuery.toLowerCase()) ||
                          description.includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort events based on selected criteria and order
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    let comparison = 0;
    
    if (sort === "date") {
      comparison = new Date(a.date) - new Date(b.date);
    } else if (sort === "name") {
      comparison = a.name.localeCompare(b.name);
    } else if (sort === "category") {
      comparison = a.category.localeCompare(b.category);
    }
    
    return sortOrder === "asc" ? comparison : -comparison;
  });

  // Separate events into upcoming and past
  const now = new Date();
  const upcomingEvents = sortedEvents.filter(event => new Date(event.date) >= now);
  const pastEvents = sortedEvents.filter(event => new Date(event.date) < now);

  // Open photo viewer
  const openPhotoViewer = (event, index = 0) => {
    setSelectedEvent(event);
    setPhotoIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  // Close photo viewer
  const closePhotoViewer = () => {
    setSelectedEvent(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Navigate to next photo
  const nextPhoto = () => {
    setPhotoIndex((prevIndex) => 
      prevIndex === selectedEvent.photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Navigate to previous photo
  const prevPhoto = () => {
    setPhotoIndex((prevIndex) => 
      prevIndex === 0 ? selectedEvent.photos.length - 1 : prevIndex - 1
    );
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedEvent) return;
      
      if (e.key === 'Escape') {
        closePhotoViewer();
      } else if (e.key === 'ArrowRight') {
        nextPhoto();
      } else if (e.key === 'ArrowLeft') {
        prevPhoto();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedEvent]);

  return (
    <div className="events-page">
      <div className="events-header">
        <h1>Campus Events</h1>
        <p>Discover and participate in our diverse campus activities</p>
      </div>

      {/* Controls Section */}
      <div className="controls-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="controls-group">
          <div className="filter-control">
            <label>Filter by:</label>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="All">All Events</option>
              <option value="Technical">Technical</option>
              <option value="Cultural">Cultural</option>
              <option value="Sports">Sports</option>
              <option value="Departmental">Departmental</option>
            </select>
          </div>

          <div className="sort-control">
            <label>Sort by:</label>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="date">Date</option>
              <option value="name">Name</option>
              <option value="category">Category</option>
            </select>
            <button 
              className={`sort-order ${sortOrder}`}
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            >
              {sortOrder === "asc" ? "↑" : "↓"}
            </button>
          </div>

          <div className="view-control">
            <label>View:</label>
            <div className="view-toggle">
              <button 
                className={view === "cards" ? "active" : ""}
                onClick={() => setView("cards")}
              >
                Cards
              </button>
              <button 
                className={view === "table" ? "active" : ""}
                onClick={() => setView("table")}
              >
                Table
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      {upcomingEvents.length > 0 && (
        <section className="events-section">
          <h2>Upcoming Events</h2>
          {view === "cards" ? (
            <div className="events-grid">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <EventsTable events={upcomingEvents} />
          )}
        </section>
      )}

      {/* Past Events Section */}
      {pastEvents.length > 0 && (
        <section className="events-section past-events">
          <h2>Past Events</h2>
          {view === "cards" ? (
            <div className="events-grid">
              {pastEvents.map((event) => (
                <EventCard 
                  key={event.id} 
                  event={event} 
                  isPast={true} 
                  onViewPhotos={() => openPhotoViewer(event)}
                />
              ))}
            </div>
          ) : (
            <EventsTable 
              events={pastEvents} 
              isPast={true} 
              onViewPhotos={openPhotoViewer}
            />
          )}
        </section>
      )}

      {sortedEvents.length === 0 && (
        <div className="no-events">
          <h3>No events found</h3>
          <p>Try adjusting your filters or search query</p>
        </div>
      )}

      {/* Photo Viewer Modal */}
      {selectedEvent && (
        <PhotoViewer
          event={selectedEvent}
          photoIndex={photoIndex}
          onClose={closePhotoViewer}
          onNext={nextPhoto}
          onPrev={prevPhoto}
        />
      )}
    </div>
  );
}

// Event Card Component
function EventCard({ event, isPast = false, onViewPhotos }) {
  return (
    <div className={`event-card ${isPast ? 'past' : ''}`}>
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
          <button className="register-btn">Register</button>
        )}
        <button 
          className="details-btn"
          onClick={isPast ? onViewPhotos : () => {}}
        >
          {isPast ? 'View Photos' : 'More Details'}
        </button>
      </div>
    </div>
  );
}

// Events Table Component
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

// Photo Viewer Component
function PhotoViewer({ event, photoIndex, onClose, onNext, onPrev }) {
  return (
    <div className="photo-viewer-overlay" onClick={onClose}>
      <div className="photo-viewer-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="photo-viewer-header">
          <h3>{event.name} - Photos</h3>
          <div className="photo-counter">
            {photoIndex + 1} / {event.photos.length}
          </div>
        </div>
        
        <div className="photo-container">
          <button className="nav-btn prev-btn" onClick={onPrev}>‹</button>
          
          <div className="main-photo">
            <img 
              src={event.photos[photoIndex]} 
              alt={`${event.name} - Photo ${photoIndex + 1}`}
            />
          </div>
          
          <button className="nav-btn next-btn" onClick={onNext}>›</button>
        </div>
        
        <div className="photo-thumbnails">
          {event.photos.map((photo, index) => (
            <div 
              key={index} 
              className={`thumbnail ${index === photoIndex ? 'active' : ''}`}
              onClick={() => setPhotoIndex(index)}
            >
              <img src={photo} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventsPage;