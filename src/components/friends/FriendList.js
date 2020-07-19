import React from "react";


const FriendList = (props) => {
  return (
    <section className="friendSection">   
      <div className="friendsContainer__header">
        <div className="friendsHeader__title">
            <h3>Friend List</h3>
        </div>
      </div>
      <div className="friendsContainer">
      <div className="searchFriendsField">
          <input 
            type="search" 
            id="searchFriends" 
            name="searchFriends" 
            placeholder="Find A Friend..."/>
        </div>        
        <div className="friendOutput">
          {/* START SAMPLE HTML TO BE MOVED TO FRIEND CARD */}
          <div className="singleFriend">
            <div className="friend__userDetails">
              <img className="friend__userImage" src="./userIcon-black.png" alt="userIcon" />
              <div className="friend__name">
                FriendUserName
              </div>
            </div>
            <div className="friendsList__deleteBtn">
              <button id="deleteFriend" className="deleteBtn" type="button">&times;</button>
            </div>
            {/* END SAMPLE HTML */}
          </div>
        </div>
      </div>
    </section>
  )};

export default FriendList;