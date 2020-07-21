import React, { useState, useEffect } from 'react';
import UserManager from '../modules/UserManager';
import NavBar from "../nav/NavBar";

const UserCard = props => {
  const [user, setUser] = useState({ userName: ""});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    UserManager.getUser(props.userId)
      .then(user => {
        setUser({
            user: user.userName
        });
        setIsLoading(false);
      });
  }, [props.userId]);

  const isAuthenticated = () => sessionStorage.getItem("user") !== null;

  const clearUser = () => {
    sessionStorage.clear()
    setHasUser(isAuthenticated())
  }

  const [hasUser, setHasUser] = useState(isAuthenticated());

  return (
    <div className="userContainer">
      <div className="user__profilePicture">
        <img className="mainUserImage" src="./userIcon-white.png" alt="userIcon" />
      </div>
      <div className="user__userName">
        <p> UserName {user.userName}
          <sup> &#8226;</sup></p>
      </div>
      <div className="navBar">
        <NavBar hasUser={hasUser} disabled={isLoading} clearUser={clearUser} />
      </div>
    </div>
)}


export default UserCard;