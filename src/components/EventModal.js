import React, { useState, useEffect } from "react";

const defaultEvent = {
  title: "",
  time: "",
  description: "",
  recurrence: "none",
  color: "#4caf50",
};

const EventModal = ({ date, onClose, onSave, existingEvent }) => {
  const [event, setEvent] = useState(defaultEvent);

  useEffect(() => {
    if (existingEvent) {
      setEvent(existingEvent);
    }
  }, [existingEvent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(event);
    onClose();
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h3>{existingEvent ? "Edit" : "Add"} Event on {date}</h3>
        <input name="title" value={event.title} onChange={handleChange} placeholder="Title" required />
        <input name="time" value={event.time} onChange={handleChange} placeholder="HH:MM" required />
        <textarea name="description" value={event.description} onChange={handleChange} placeholder="Description" />
        <select name="recurrence" value={event.recurrence} onChange={handleChange}>
          <option value="none">None</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
        </select>
        <input type="color" name="color" value={event.color} onChange={handleChange} />
        <button type="submit">Save</button>
        <button onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default EventModal;
