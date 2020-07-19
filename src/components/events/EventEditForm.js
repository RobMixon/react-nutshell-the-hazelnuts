import React, { useState, useEffect } from "react"
import EventManager from "../modules/EventManager"
import "./EventForm.css"

const EventEditForm = props => {
  const [event, setEvent] = useState({ title: "", location: "", date: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...event };
    stateToChange[evt.target.id] = evt.target.value;
    setEvent(stateToChange);
  };

  const updateExistingEvent = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedEvent = {
      id: props.match.params.eventId,
      title: event.title,
      location: event.location,
      date: event.date
    };

    EventManager.update(editedEvent)
      .then(() => props.history.push("/events"))
  }

  useEffect(() => {
    EventManager.get(props.match.params.eventId)
      .then(event => {
       setEvent(event);
       setIsLoading(false);
      });
  }, [props.match.params.eventId]);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input type="text" required className="form-control" 
                onChange={handleFieldChange} id="title" value={event.title}/>
                <label htmlFor="title">Event Title</label>
            <input type="text" required className="form-control"
                onChange={handleFieldChange} id="location" value={event.location}/>
                <label htmlFor="location">Location</label>
            <input type="text" required className="form-control"
                onChange={handleFieldChange} id="date" value={event.date}/>
                <label htmlFor="location">Date</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingEvent}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default EventEditForm;