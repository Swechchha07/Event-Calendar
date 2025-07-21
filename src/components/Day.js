import React from "react";
import { format } from "date-fns";

const Day = ({ day, events, onClick }) => {
  return (
    <div className="day-cell" onClick={onClick}>
      <div className="day-number">{format(day, "d")}</div>
      <ul className="event-list">
        {events.map((event) => (
          <li key={event.id} className="event-item" style={{ background: event.color }}>
            {event.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Day;
