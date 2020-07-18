import React from "react";
// import { Link } from "react-router-dom";
import "./EventCard.css";

// returns HTML for individual Events (cards)

const EventCard = props => {
    return (
    <div className="card">
        <div className="card-content">
            <h3>title: <span className="card-eventtitle">{props.event.title}</span></h3>
            <p>Location: {props.event.location}</p>
            <p>Date: {props.event.date}</p>
            {/* <button type="button"
                onClick={() => props.history.push(`/events/${props.event.id}/edit`)}> Edit 
            </button> */}
        </div>
    </div>
    )
}

export default EventCard;