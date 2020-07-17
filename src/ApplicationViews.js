import React from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import MessageList from "./components/messages/MessageList";



const ApplicationViews = (props) => {

    const hasUser = props.hasUser;
    const setUser = props.setUser;

    return (
        <>
        <Route path="/login" render={props => {
            return <Login setUser={setUser} {...props} />
        }} />

        <Route exact path="/"
        render={props => {
          return <Home {...props} />
        }} />

        <Route
        exact path="/messages"
        render={props => {
            if (hasUser) {
            return <MessageList {...props} />
            } else {
                return <Redirect to="/login" />  
            }
        }} />
        </>
    )
};

export default ApplicationViews