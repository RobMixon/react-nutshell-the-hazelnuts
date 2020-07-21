import React, { useState } from "react";
import FriendManager from "../modules/FriendManager";
import {Link} from "react-router-dom";
import UserCard from "../auth/UserCard";
import FriendList from "../friends/FriendList";


const AddFriendFromMessage = (props) => {
    let currentUser = JSON.parse(sessionStorage.getItem("user",))

    const [friend, setFriend] = useState({userId: "", activeUserId: 1})
    const [isLoading, setIsLoading] = useState(false)
    
    const postNewFriend = (event) => {
        event.preventDefault();
        setIsLoading(true)
        const stateToChange = {userId: "" , activeUserId: currentUser.id}
        setFriend(stateToChange)
        
       FriendManager.postNewFriend(stateToChange)
        .then(() => props.history.push("/messages")) 
        
    }
          
    return (
        <>
        <main className="mainFlex">
                <section className="mainFlex__userCard">
                    <UserCard />
                </section>
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

    <section className="mainFlex__friendList">
                    <FriendList {...props} />
                </section>
            </main>


</>

    )
}

export default AddFriendFromMessage