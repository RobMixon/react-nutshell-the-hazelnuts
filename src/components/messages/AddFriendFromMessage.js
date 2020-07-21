import React, { useState, useEffect} from "react";
import FriendManager from "../modules/FriendManager";
import {Link} from "react-router-dom"
import MessageManager from "../modules/MessageManager";

const AddFriendFromMessage = (props) => {
    
    //active user needs to be current logged in user from session storage?
    const [friend, setFriend] = useState({userId: "", activeUserId: 1})
    const [isLoading, setIsLoading] = useState(false)
    
    const postNewFriend = (event) => {
        event.preventDefault();
        setIsLoading(true)
        const stateToChange = {userId:"", activeUserId: 1}
        setFriend(stateToChange)
        
       FriendManager.postNewFriend(stateToChange)
        .then(() => props.history.push("/messages")) 
        
    }
          
    return (
        <>
        <div className="container">
            <h1>Add Friend?</h1>
        <div className="clearfix">
        <button 
        type="button"
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