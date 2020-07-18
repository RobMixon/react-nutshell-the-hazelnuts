import React from "react";


const FriendList = (props) => {
  return (
    <section class="friendSection">   
      <div class="friendsContainer__header">
        <div class="friendsHeader__title">
            <h3>Friend List</h3>
        </div>
      </div>
      <div class="friendsContainer">
      <div class="searchFriendsField">
          <input 
            type="search" 
            id="searchFriends" 
            name="searchFriends" 
            placeholder="Find A Friend..."/>
        </div>        
        <div class="friendOutput">
          {/* START SAMPLE HTML TO BE MOVED TO FRIEND CARD */}
          <div class="singleFriend">
            <div class="friend__userDetails">
              <img class="friend__userImage" src="./userIcon-black.png"/>
              <div class="friend__name">
                FriendUserName
              </div>
            </div>
            <div class="friendsList__deleteBtn">
              <button id="deleteFriend__${obj.id}" class="deleteBtn" type="button">&times;</button>
            </div>
            {/* END SAMPLE HTML */}
          </div>
        </div>
      </div>
    </section>
  )};

export default FriendList;