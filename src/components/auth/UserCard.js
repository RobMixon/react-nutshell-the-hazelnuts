import React, { useState } from 'react';
import NavBar from "../nav/NavBar";


const UserCard = props => {
  
  // const isAuthenticated = () => sessionStorage.getItem("user") !== null;
  const sessionUser = JSON.parse(sessionStorage.getItem("user"))
  
  const clearUser = () => {
    sessionStorage.clear()
    setHasUser(sessionUser)
  }
  
  const [hasUser, setHasUser] = useState(sessionUser !== null);
  

  return (
    <div className="userContainer">
      <div className="user__profilePicture">
        <img className="mainUserImage" src={`./images/${sessionUser.image}`} alt="userIcon" />
      </div>
      <div className="user__userName">
        <p> {sessionUser.username}
          <sup> &#8226;</sup></p>
      </div>
      <div className="navBar">
        <NavBar hasUser={hasUser} clearUser={clearUser} />
      </div>
    </div>
)}


export default UserCard;