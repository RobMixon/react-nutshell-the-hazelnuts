import React from "react";
import { Route } from "react-router-dom";
import MessageList from "./components/messages/MessageList";

const ApplicationViews = () => {
    return (
        <>
        <Route
        exact
        path="/messages"
        render={props => {
            return <MessageList {...props} />
        }}
        />
        </>





        // Tasks views
        
    )
};

export default ApplicationViews