import React, { useState, useEffect} from "react";
import FriendManager from "../modules/FriendManager";
import {Link} from "react-router-dom"

const AddFriendFromMessage = (props) => {
    const [friend, setFriend] = useState({userId: 2})
    const [isLoading, setIsLoading] = useState(false)
    
    const postNewFriend = (event) => {
        event.preventDefault();
        setIsLoading(true)
        const stateToChange = {userId: 2, activeUserId: parseInt(friend.activeUserId)}
        stateToChange[event.target] = event.target.value
        console.log(event.target)
        console.log(event.target.value)
        setFriend(stateToChange)
        
       FriendManager.postNewFriend(friend)
        .then(() => props.history.push("/messages"))
        // window.location.reload(true)
        
        
    }
          
    return (
        <>
        <div className="container">
            <h1>Add Friend?</h1>
        <div className="clearfix">
        <button 
        type="button"
        // set this to value of props 
        value={friend.userId}
        onClick={postNewFriend}
        disabled={isLoading}
        className="confirmbtn">
        Confirm
        </button>
        <Link to="/messages">
        <button 
        type="button" 
        className="cancelbtn">  
        Just Kidding
        </button>
        </Link>
      </div>
    </div>

      


        </>

    )
}

export default AddFriendFromMessage