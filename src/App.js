import React, { useState, useEffect } from "react";
import Calendar from "./components/Calendar";
import EventModal from "./components/EventModal";
import { formatDate } from "./utils/dateUtils";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem("events");
    return saved ? JSON.parse(saved) : {};
  });
  const [modalDate, setModalDate] = useState(null);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleSave = (event) => {
    const dateKey = formatDate(modalDate);
    const newEvent = { ...event, id: uuidv4() };
    setEvents((prev) => ({
      ...prev,
      [dateKey]: [...(prev[dateKey] || []), newEvent],
    }));
  };
  

  return (
    <div className="App">
      <h1>📅 Custom Event Calendar</h1>
      <Calendar
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        events={events}
        onDayClick={(day) => setModalDate(day)}
      />
      {modalDate && (
        <EventModal
          date={formatDate(modalDate)}
          onClose={() => setModalDate(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}

export default App;
