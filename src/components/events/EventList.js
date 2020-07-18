import React, { useState, useEffect } from 'react';
import EventCard from "./EventCard";
import EventManager from "../modules/EventManager";
import NavBar from "../nav/NavBar";

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

    const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

    const clearUser = () => {
        sessionStorage.clear()
        setHasUser(isAuthenticated())
    }

    const [hasUser, setHasUser] = useState(isAuthenticated());

    return(
        <>
        <NavBar hasUser={hasUser} clearUser={clearUser} />
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