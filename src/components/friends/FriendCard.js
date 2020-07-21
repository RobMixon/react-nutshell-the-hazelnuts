import React from "react";

const FriendCard = (props) => {

  // const showFriends = () => {
  //   if (props.friend.user === undefined) {
  //    null
  //   } else if (props.friend.userId === 1) {
  //     return null
  //   }else {
  //     return props.friend.user.username
  //   }
  // }
  
  const sessionUser = JSON.parse(sessionStorage.getItem("user"))

    return (
        <>
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
    </>
    )
}

export default FriendCard;



