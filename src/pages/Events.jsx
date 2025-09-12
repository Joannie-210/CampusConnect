import React, { useState, useEffect } from "react";
import eventsData from "../data/events.json";
import "../styles/Events.css";
import EventCard from "../components/EventCard";
import EventsTable from "../components/EventsTable";
import { FaSearch, FaThLarge, FaTable, FaCalendarAlt } from "react-icons/fa";

function EventsPage() {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");
  const [view, setView] = useState("cards");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [bookmarks, setBookmarks] = useState(() => {

    const saved = localStorage.getItem("bookmarkedEvents");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setEvents(eventsData);
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  
  useEffect(() => {
    localStorage.setItem("bookmarkedEvents", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (eventId) => {
    setBookmarks((prev) =>
      prev.includes(eventId)
        ? prev.filter((id) => id !== eventId)
        : [...prev, eventId]
    );
  };

  // --- filtering & sorting ---
  const filteredEvents = events.filter((e) => {
    const matchesCategory = filter === "All" || e.category === filter;
    const name = (e.name || "").toLowerCase();
    const description = (e.description || "").toLowerCase();
    const matchesSearch =
      name.includes(searchQuery.toLowerCase()) ||
      description.includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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

  const now = new Date();
  const upcomingEvents = sortedEvents.filter(
    (event) => new Date(event.date) >= now
  );
  const pastEvents = sortedEvents.filter(
    (event) => new Date(event.date) < now
  );

  return (
    <div className="events-page">
      <div className="events-header">
        <h1>Campus Events</h1>
        <p>Discover and participate in our diverse campus activities</p>
      </div>

   
      <div className="controls-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search events by name or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="search-icon">
            <FaSearch />
          </span>
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
              onClick={() =>
                setSortOrder(sortOrder === "asc" ? "desc" : "asc")
              }
              aria-label={`Sort ${
                sortOrder === "asc" ? "descending" : "ascending"
              }`}
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
                aria-label="Card view"
              >
                <FaThLarge />
              </button>
              <button
                className={view === "table" ? "active" : ""}
                onClick={() => setView("table")}
                aria-label="Table view"
              >
                <FaTable />
              </button>
            </div>
          </div>
        </div>
      </div>

      {isLoading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading events...</p>
        </div>
      )}

      {!isLoading && upcomingEvents.length > 0 && (
        <section className="events-section">
          <div className="section-header">
            <h2>Upcoming Events</h2>
          </div>
          {view === "cards" ? (
            <div style={{ marginTop: "40px" }} className="events-grid">
              {upcomingEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  isBookmarked={bookmarks.includes(event.id)}
                  onToggleBookmark={() => toggleBookmark(event.id)}
                />
              ))}
            </div>
          ) : (
            <EventsTable events={upcomingEvents} />
          )}
        </section>
      )}

      {!isLoading && pastEvents.length > 0 && (
        <section className="events-section past-events">
          <div className="section-header">
            <h2>Past Events</h2>
          </div>
          {view === "cards" ? (
            <div className="events-grid">
              {pastEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  isPast={true}
                  isBookmarked={bookmarks.includes(event.id)}
                  onToggleBookmark={() => toggleBookmark(event.id)}
                />
              ))}
            </div>
          ) : (
            <EventsTable events={pastEvents} isPast={true} />
          )}
        </section>
      )}

      {!isLoading && sortedEvents.length === 0 && (
        <div className="no-events">
          <div className="no-events-icon">
            <FaCalendarAlt size={32} color="#1B4D3E" />
          </div>
          <h3>No events found</h3>
          <p>Try adjusting your filters or search query</p>
        </div>
      )}
    </div>
  );
}

export default EventsPage;
