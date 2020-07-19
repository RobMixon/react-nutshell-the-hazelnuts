import React from "react";
import { Link } from "react-router-dom";

// returns HTML for individual Events (cards)

const EventCard = props => {
    return (
    <div className="card">
        <div className="card-content">
            <h3><span className="card-eventtitle">{props.event.title}</span></h3>
            <p>Location: {props.event.location}</p>
            <p>Date: {props.event.date}</p>
            <button type="button"
                onClick={() => props.history.push(`/events/${props.event.id}/edit`)}> Edit 
            </button>
            {props.deleteEvent &&
            <button type="button" onClick={()=> 
               props.deleteEvent(props.event.id)}>Cancel Event</button>}
            <Link to={`/events/${props.event.id}`}><button>Event Details</button></Link>
        </div>
    </div>
    )
}

export default EventCard;