import React from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import MessageList from "./components/messages/MessageList";
//Task Imports
import TaskList from './components/tasks/TaskList';


const ApplicationViews = (props) => {

console.log(props)
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
          exact
          path="/messages"
          render={props => {
              return <MessageList {...props} />
        }}
        />

        {/* ARTICLE ROUTES */}
        {/* <Route
          exact
          path="/articles"
          render={props => {
              return <ArticleList {...props} />
        }}
        /> */}

        {/* EVENT ROUTES */}
        {/* <Route
          exact
          path="/events"
          render={props => {
              return <EventList {...props} />
        }}
        /> */}

        {/* TASK ROUTES */}
        <Route
          exact
          path="/tasks"
          render={props => {
              return <TaskList {...props} />
        }}
        />

        {/* FRIEND ROUTE */}
        {/* <Route
          exact
          path="/friends"
          render={props => {
              return <FriendList {...props} />
        }}
        /> */}
     
        </>
    )
};

export default ApplicationViews