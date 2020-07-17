import React from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import MessageList from "./components/messages/MessageList";

//Article Imports
import ArticleList from './components/articles/ArticleList';
import ArticleForm from './components/articles/ArticleForm'

//Event Imports
// import EventList from './components/events/EventList';

//Task Imports
import TaskList from './components/tasks/TaskList';

//Friends Imports
// import FriendList from './components/friends/FriendList';


const ApplicationViews = (props) => {

console.log(props)
    const hasUser = props.hasUser;
    const setUser = props.setUser;

    return (
      <React.Fragment>
        <Route path="/login" render={props => {
            return <Login setUser={setUser} {...props} />
        }} />

        <Route exact path="/"
        render={props => {
          return <Home {...props} />
        }} />

        {/* MESSAGE ROUTES */}
        <Route
          exact path="/messages"
          render={props => {
            if (hasUser) {
              return <MessageList {...props} />
            } else {
              return <Redirect to="/login" />  
            }
          }} />

        {/* ARTICLE ROUTES */}
        <Route
          exact
          path="/articles"
          render={props => {
              return <ArticleList {...props} />
        }}
        />
        <Route
          exact
          path="/articles/new"
          render={props => {
              return <ArticleForm {...props} />
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
      </React.Fragment>
    )
};

export default ApplicationViews