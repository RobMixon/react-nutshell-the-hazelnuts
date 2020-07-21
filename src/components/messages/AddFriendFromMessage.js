import React from "react";
import {Link} from "react-router-dom";
import UserCard from "../auth/UserCard";
import FriendList from "../friends/FriendList";


const AddFriendFromMessage = (props) => {
     
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