import React, { useState } from 'react';
import EventManager from '../modules/EventManager';


const EventForm = props => {
  const [event, setEvent] = useState({ title: "", location: "", date: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...event };
    stateToChange[evt.target.id] = evt.target.value;
    setEvent(stateToChange);
  };

  const constructNewEvent = evt => {
    evt.preventDefault();
    if (event.title === "" || event.location === ""|| event.date === "") {
      window.alert("Please input an Event title, location and date before submitting");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      EventManager.post(event)
        .then(() => props.history.push("/events"));
    }
  };

  return (
    <>
      <form className="eventForm__form">
        <fieldset className="eventForm__fieldset">
          <div className="event__formgrid">
            <input type="text" required onChange={handleFieldChange}
              id="title" placeholder="Event Title"/>
            <label htmlFor="title">Title</label>
            <input type="text" required onChange={handleFieldChange}
              id="location" placeholder="location" />
            <label htmlFor="location">Event's location</label>
            <input type="date" required onChange={handleFieldChange}
              id="date" placeholder="date" />
            <label htmlFor="date">Event's date</label>
            <input type="time" required onChange={handleFieldChange}
              id="startTime" placeholder="Starts" />
            <label htmlFor="startTime">Start Time</label>
            <input type="time" required onChange={handleFieldChange}
              id="endTime" placeholder="Ends" />
            <label htmlFor="endTime">End Time</label>
          </div>
          <div className="submitBtn">
            <button 
              type="button" 
              className="wideBlueBtn"
              disabled={isLoading} 
              onClick={constructNewEvent}>Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default EventForm;