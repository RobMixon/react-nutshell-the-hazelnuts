import React, { useState } from 'react';
import EventManager from '../modules/EventManager';
import './EventForm.css';

const EventForm = props => {
  const [event, setEvent] = useState({ title: "", location: "", date: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...event };
    stateToChange[evt.target.id] = evt.target.value;
    setEvent(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
  */
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
      <form>
        <fieldset>
          <div className="formgrid">
            <input type="text" required onChange={handleFieldChange}
              id="title" placeholder="Event Title"/>
            <label htmlFor="title">Title</label>
            <input type="text" required onChange={handleFieldChange}
              id="location" placeholder="location" />
            <label htmlFor="location">Event's location</label>
            <input type="text" required onChange={handleFieldChange}
              id="date" placeholder="date" />
            <label htmlFor="date">Event's date</label>
          </div>
          <div className="alignRight">
            <button type="button" disabled={isLoading} 
            onClick={constructNewEvent} >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default EventForm;