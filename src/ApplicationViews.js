import React from "react";
import { Route, Redirect } from "react-router-dom";

//home import
import Home from "./components/home/Home";
//login import
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import MessageList from "./components/messages/MessageList";
import MessageEditForm from "./components/messages/MessageEditForm";

//Article Imports
import ArticleList from './components/articles/ArticleList';
import ArticleForm from './components/articles/ArticleForm'

//Event Imports
import EventList from "./components/events/EventList";
import EventDetail from "./components/events/EventDetail";
import EventForm from "./components/events/EventForm";
import EventEditForm from "./components/events/EventEditForm";

//Task Imports
import TaskList from './components/tasks/TaskList';
import TaskForm from "./components/tasks/TaskForm";
import TaskFormEdit from "./components/tasks/TaskEditForm"

// Friends Imports
import FriendList from './components/friends/FriendList';
import AddFriendFromMessage from "./components/messages/AddFriendFromMessage";


const ApplicationViews = (props) => {

    const hasUser = props.hasUser;
    const setUser = props.setUser;

    return (
      <React.Fragment>
        <Route path="/login" render={props => {
            return <Login setUser={setUser} {...props} />
        }} />

        {/* login paths */}
        <Route path="/register" render={props => {
            return <Register setUser={setUser} {...props} />
        }} />

        <Route exact path="/"
        render={props => {
          if (hasUser) {
            return <Home {...props} />
          } else {
            return <Redirect to="/login" />
          }}} />

        {/* MESSAGE ROUTES */}
        <Route
          exact path="/messages"
          render={props => {
            if (hasUser) {
              return <MessageList {...props} hasUser={hasUser} setUser={setUser} />
            } else {
              return <Redirect to="/login" />  
            }
          }} />

          <Route
          exact
            path="/messages/:messageId(\d+)/edit"
            render={props => {
              return <MessageEditForm {...props} messageId={props.match.params.messageId} />
            }}
            />

          <Route
          path="/messages/addFriend"
          render={props => {
              return <AddFriendFromMessage {...props} />
                 
          }}
         
          />
        {/* ARTICLE ROUTES */}
        <Route
          exact
          path="/articles"
          render={props => {
            if (hasUser) {
              return <ArticleList {...props} />
            } else {
              return <Redirect to="/login" /> 
            } 
        }}
        />
        <Route
          exact
          path="/articles/new"
          render={props => {
              return <ArticleForm {...props}  />
        }}
        />

        {/* EVENT ROUTES */}
        {/* route to get all events */}
        <Route exact path="/events" render={props => {
            if (hasUser) {
            return <EventList {...props} />
            } else {
              return <Redirect to="/login" /> 
            } }}/>
        {/* route to get specific event and details of it  */}
        <Route exact path="/events/:eventId(\d+)" render={(props) => {
          return (
          <EventDetail eventId={parseInt(props.match.params.eventId)}{...props} />)}} />
          {/* route to create new event */}
        <Route path="/events/new" render={(props) => {
          return <EventForm {...props} /> }} />
          {/* route to edit events */}
        <Route path="/events/:eventId(\d+)/edit" render={props => {
          if (hasUser) {
            return <EventEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }}} />

        {/* TASK ROUTES */}
        <Route
          exact
          path="/tasks"
          render={props => {
            if (hasUser) {
              return <TaskList {...props} />
            } else {
                return <Redirect to="/login" /> 
            } 
        }}
        />
        <Route
          exact
          path="/tasks/new"
          render={props => {
              return <TaskForm {...props} />
        }}
        />
        <Route path="/tasks/:tasksId(\d+)/edit" render={props => {
              return <TaskFormEdit {...props} />
            }} />


        {/* FRIEND ROUTES */}
        <Route
          exact
          path="/friends"
          render={props => {
              return <FriendList {...props} userId={props.match.params.userId}/>
        }}
        />
      </React.Fragment>
    )
};

export default ApplicationViews