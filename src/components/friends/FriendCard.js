import React from "react";

const FriendCard = (props) => {
  
    return (
        <>
        <div className="singleFriend">
            <div className="friend__userDetails">
              <img className="friend__userImage" src="./userIcon-black.png" alt="userIcon" />
              <div className="friend__name">
                {/* {props.friend} */}
              </div>
            </div>
            <div className="friendsList__deleteBtn">
              <button id="deleteFriend" className="deleteBtn" type="button">&times;</button>
            </div>
        </div>
    </>
    )
}

export default FriendCard;



