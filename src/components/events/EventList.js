import React, { useState, useEffect } from 'react';
import EventCard from "./EventCard";
import EventManager from "../modules/EventManager";
import UserCard from "../auth/UserCard";
import FriendList from "../friends/FriendList";


const EventList = (props) => {
    //Initial state of empty array
    const [events, setEvents] = useState([]);

    const getEvent = () => {
        //data comes back from API, we use setanimals to update state
        return EventManager.getAll().then(eventsFromAPI => {
            const eventsByDate = eventsFromAPI.sort((date1, date2) => new Date(date1.date) - new Date(date2.date))
            setEvents(eventsByDate)
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
            <main className="mainFlex">
                <section className="mainFlex__userCard">
                    <UserCard />
                </section>
            <section className="mainFlex__subpage">
                <section className="section-content">
                    <button 
                        type="button" 
                        className="wideBlueBtn" 
                        onClick={() => {props.history.push("/events/new")}}>
                        Add New Event
                    </button>
                </section>
                <div className="eventContainer-cards">
                    {events.map(event => <EventCard 
                        key={event.id} 
                        event={event}
                        deleteEvent={deleteEvent} 
                        {...props}/> )}
                </div>
            </section>
                <section className="mainFlex__friendList">
                    <FriendList {...props} />
                </section>
            </main>
        </>
    )
}

export default EventList;