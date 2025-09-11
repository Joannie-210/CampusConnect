import React from "react";

function CalendarView({ events }) {
  // Group events by date
  const eventsByDate = events.reduce((acc, event) => {
    const date = new Date(event.date).toDateString();
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(event);
    return acc;
  }, {});

  return (
    <div className="calendar-view">
      {Object.entries(eventsByDate).map(([date, dateEvents]) => (
        <div key={date} className="calendar-day">
          <h3>{date}</h3>
          <div className="day-events">
            {dateEvents.map(event => (
              <div key={event.id} className="calendar-event">
                <h4>{event.name}</h4>
                <p>{event.time} • {event.venue}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CalendarView;