import React, { useState, useEffect} from "react";
import FriendManager from "../modules/FriendManager";
import {Link} from "react-router-dom"
import MessageManager from "../modules/MessageManager";


const AddFriendFromMessage = (props) => {
    // const [friend, setFriend] = useState({userId: 1, activeUserId:""})
    // const [isLoading, setIsLoading] = useState(false)
    // // const [hidden, setHidden] = useState(true)
    
    // const postNewFriend = (event) => {
    //     event.preventDefault();
    //     setIsLoading(true)
    //     const stateToChange = {userId: 1,
    //                            activeUserId: parseInt(friend.activeUserId) }
    //     stateToChange[event.target] = event.target.value
    //     console.log(event.target)
    //     console.log(event.target.value)
    //     setFriend(stateToChange)
        
        
        
    //    FriendManager.postNewFriend(friend)
    //     .then(() => props.history.push("/friends"))
    //     // window.location.reload(true)
        
        
    // }
          
    return (
       // style={{ display: hidden ? "none" : "block" }}>
        <>
        <div className="container">
            <h1>Add Friend?</h1>
        <div className="clearfix">
        <button 
        type="button"
        // set this to value of props from FriendList?
        // value={}
        // onClick=
        //     {postNewFriend}
        // disabled={isLoading}
        className="confirmbtn">
        Confirm
        </button>
        <Link to="/messages">
        <button 
        type="button" 
        // disabled={isLoading}
        // onClick={() => props.history.push("/messages")}
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