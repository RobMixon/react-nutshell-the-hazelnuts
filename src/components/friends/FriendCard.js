import React from "react";

const FriendCard = (props) => {
  let currentUser = JSON.parse(sessionStorage.getItem("user",))
  
    return (
     <>
       {props.friend.activeUserId !== currentUser.id ? null : 

        <div className="singleFriend">
            <div className="friend__userDetails">
              <img className="friend__userImage" src={(`./images/${props.friend.user.image}`)} alt="userIcon" />
              <div className="friend__name">
            
              {props.friend.user === undefined ? null : props.friend.user.username}
              </div>
            </div>
            <div className="friendsList__deleteBtn">
              <button id="deleteFriend" className="deleteBtn" type="button" onClick={() => props.deleteFriend(props.friend.id)}>&times;</button>
          </div>
      </div>
    }
    </>

      
  )
      
  
  
}

export default FriendCard;



