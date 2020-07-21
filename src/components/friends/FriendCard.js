import React from "react";

const FriendCard = (props) => {

  
    return (
        <>
        <div className="singleFriend">
            <div className="friend__userDetails">
              <img className="friend__userImage" src="./userIcon-black.png" alt="userIcon" />
              <div className="friend__name">
              
              {props.friend.user === undefined ? undefined : props.friend.user.username}
              </div>
            </div>
            <div className="friendsList__deleteBtn">
              <button id="deleteFriend" className="deleteBtn" type="button" onClick={() => props.deleteFriend(props.friend.id)}>&times;</button>
            </div>
        </div>
    </>
    )
}

export default FriendCard;



