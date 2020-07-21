import React, { useState, useEffect } from "react";
import EventManager from "../modules/EventManager";

const EventDetail = props => {
  const [event, setEvent] = useState({ title: "", location: "", date: "", startTime: "", endTime: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    EventManager.get(props.eventId).then(event => {
      setEvent({
        title: event.title,
        location: event.location,
        date: event.date,
        startTime: event.startTime,
        endTime: event.endTime
      });
      setIsLoading(false);
    });
  }, [props.eventId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    EventManager.delete(props.eventId).then(() =>
      props.history.push("/events")
    );
  };


  return (
    <div className="card">
      <div className="card-content-details">
        <h3><span style={{ color: "darkslategrey" }}>{event.title}</span></h3>
        <li>&#x1F3E0; Location:</li> 
        <li><span>{event.location}</span></li>
        <li>&#x1F4C5; Date:</li> 
        <li><span>{event.date}</span></li>
        <li>&#x23F2; Time:</li> 
        <li><span>{event.startTime} to {event.endTime}</span></li>
        <button type="button" disabled={isLoading} onClick={handleDelete}>Cancel</button>
      </div>
    </div>
  )
}

export default EventDetail;