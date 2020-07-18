import React, { useState, useEffect } from 'react';
import EventCard from "./EventCard";
import EventManager from "../modules/EventManager";

const EventList = (props) => {
    //Initial state of empty array
    const [events, setEvents] = useState([]);

    const getEvent = () => {
        //data comes back from API, we use setanimals to update state
        return EventManager.getAll().then(eventsfromAPI => {
            setEvents(eventsfromAPI)
        })
    };

    const deleteEvent = id => {
        EventManager.delete(id)
            .then(() => EventManager.getAll().then(setEvents))
    };

    useEffect(() => {
        getEvent()
    }, []);

    return(
        <>
        <section className="section-content">
            <button type="button" className="btn" 
                onClick={() => {props.history.push("/events/new")}}>New Event</button>
        </section>
        <div className="container-cards">
            {events.map(event => <EventCard key={event.id} event={event}
                deleteEvent={deleteEvent} {...props}/> )}
        </div>
        </>
    )
}

export default EventList;