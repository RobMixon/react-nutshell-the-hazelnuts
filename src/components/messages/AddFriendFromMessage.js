import React, { useState, useEffect} from "react";
import FriendManager from "../modules/FriendManager";
import MessageManager from "../modules/MessageManager";
import "../friends/friend.css"

const AddFriendFromMessage = (props) => {
    const [friend, setFriend] = useState({userId: 1, activeUserId:""})
    
    const postNewFriend = (event) => {
        const stateToChange = {userId: 1,
                               activeUserId: parseInt(friend.activeUserId) }
        stateToChange[event.target] = event.target.value
        console.log(event.target)
        console.log(event.target.value)
        setFriend(stateToChange)
        
        event.preventDefault();
       FriendManager.postNewFriend(friend)
        .then(() => props.history.push("/friends"))
        window.location.reload(true)
        
        
    }
          
    return (
       
        <>
        <div className="container"  // style={{ display: hidden ? "none" : "block" }}>
            <h1>Add Friend?</h1>
        <div className="clearfix">
        <button 
        type="button"
        // set this to value of props from FriendList?
        // value={}
        onClick=
            {postNewFriend}
        className="confirmbtn">
        Confirm
        </button>
        <button 
        type="button" 
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