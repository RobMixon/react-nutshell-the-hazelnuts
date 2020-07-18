import React, { useState, useEffect } from "react";
import EventManager from "../modules/EventManager";
import "./EventDetail.css";

const EventDetail = props => {
  const [event, setEvent] = useState({ title: "", location: "", date:"" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    EventManager.get(props.eventId).then(event => {
      setEvent({
        title: event.title,
        location: event.location,
        date: event.date
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
      <div className="card-content">
        <h3>title: <span style={{ color: "darkslategrey" }}>{event.title}</span></h3>
        <p>location: {event.location}</p>
        <p>date: {event.date}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>Cancel</button>
      </div>
    </div>
  )
}

export default EventDetail;