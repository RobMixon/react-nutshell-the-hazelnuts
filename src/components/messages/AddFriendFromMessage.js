import React, { useState } from "react";
import FriendManager from "../modules/FriendManager";
import "../friends/friend.css"

const AddFriendFromMessage = (props) => {
    const [friend, setFriend] = useState({userId: 1, followingId: 0})
    const [hidden, setHidden] = useState(true)
    

    const postNewFriend = (event) => {
        const stateToChange = {userId: 1,
                               followingId: parseInt(friend.followingId) }
        stateToChange[event.target] = event.target.value
        setFriend(stateToChange)
        
        event.preventDefault();
       FriendManager.postNewFriend(friend)
        .then(() => props.history.push("/friends"))
        window.location.reload(true)
        
        
    }
          
    return (
        <>
        <div className="container" style={{ display: hidden ? "none" : "block" }}>
            <h1>Add Friend?</h1>
        <div className="clearfix">
        <button 
        type="button"
        value={friend.followingId}
        onClick=
            {postNewFriend}
        className="confirmbtn">
        Confirm
        </button>
        <button 
        type="button" 
        value={friend.activeUserId}
        onClick={() => props.history.push("/messages")}
        className="cancelbtn">
        Just Kidding
        </button>
      </div>
      </div>

    </>

    )
}

export default AddFriendFromMessage