import React from "react";

const UserCard = props => {

  return (
    <div className="userContainer">
      <div className="user__profilePicture">
        <img className="mainUserImage" src="./userIcon-white.png"/>
      </div>
      <div className="user__userName">
        <p>Username <sup>&#8226;</sup></p>
      </div>
    </div>
)}

export default UserCard