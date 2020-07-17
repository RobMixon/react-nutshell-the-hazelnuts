import React from "react";
import { Route } from "react-router-dom";
// import Login from "./auth/Login"
// import Home from "./home/Home"

//Message Imports
import MessageList from './components/messages/MessageList';

//Article Imports
import ArticleList from './components/articles/ArticleList';

//Event Imports
// import EventList from './components/events/EventList';

//Task Imports
// import TaskList from './components/tasks/TaskList';

//Friends Imports
// import FriendList from './components/friends/FriendList';


const ApplicationViews = () => {
    return (
      <React.Fragment>
        {/* LOGIN ROUTES */}
        {/* <Route 
          path="/login" 
          render={props => {
            return <Login 
            // setUser={setUser} 
            {...props} />
        }} /> */}

        {/* HOME ROUTES */}
        {/* <Route
          exact
          path="/"
          render={props => {
            return <Home />;
        }}
        /> */}

        {/* MESSAGE ROUTES */}
        <Route
          exact
          path="/messages"
          render={props => {
              return <MessageList {...props} />
        }}
        />

        {/* ARTICLE ROUTES */}
        <Route
          exact
          path="/articles"
          render={props => {
              return <ArticleList {...props} />
        }}
        />

        {/* EVENT ROUTES */}
        {/* <Route
          exact
          path="/events"
          render={props => {
              return <EventList {...props} />
        }}
        /> */}

        {/* TASK ROUTES */}
        {/* <Route
          exact
          path="/tasks"
          render={props => {
              return <TaskList {...props} />
        }}
        /> */}

        {/* FRIEND ROUTE */}
        {/* <Route
          exact
          path="/friends"
          render={props => {
              return <FriendList {...props} />
        }}
        /> */}
      </React.Fragment>
    )
};

export default ApplicationViews