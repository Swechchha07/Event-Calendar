import React from "react";
import { generateCalendar, formatDate } from "../utils/dateUtils";
import { format, addMonths, subMonths } from "date-fns";
import Day from "./Day";

const Calendar = ({ currentDate, setCurrentDate, events, onDayClick }) => {
  const days = generateCalendar(currentDate);

  const handlePrev = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNext = () => setCurrentDate(addMonths(currentDate, 1));

  return (
    <div>
      <div className="header">
        <button onClick={handlePrev}>❮</button>
        <h2>{format(currentDate, "MMMM yyyy")}</h2>
        <button onClick={handleNext}>❯</button>
      </div>
      <div className="calendar-grid">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="day-label">{d}</div>
        ))}
        {days.map((day, index) => (
          <Day
            key={index}
            day={day}
            events={events[formatDate(day)] || []}
            onClick={() => onDayClick(day)}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
