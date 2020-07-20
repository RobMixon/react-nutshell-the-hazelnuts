import React, { useEffect, useState } from "react";
import FriendManager from "../modules/FriendManager";
import FriendCard from "./FriendCard";
import AddFriendFromMessage from "../messages/AddFriendFromMessage";

const FriendList = (props) => {
    
    //declaring initial state as empty array
    const [friends, setFriends] = useState([])
    
    
    
    // get all user's friends
    const getFriends = () => {
        return FriendManager.getUserFriends().then(friendsFromAPI=> {
            console.log(friendsFromAPI)
            setFriends(friendsFromAPI)

        })
    };

    useEffect(() => {
        getFriends();
    }, []);


    const deleteFriend = (id) => {
        FriendManager.deleteFriend()
        .then(() => {
            FriendManager.getAllFriends().then((friendsFromAPI) => {
                 setFriends(friendsFromAPI)
            });
        });
    };


    return (
        <>
    
        <div className="container-cards">
       
             {friends && friends.map(friend => <FriendCard key={friend.id}
                                                  friend={friend}
                                                  deleteFriend={deleteFriend}
                                                  {...props} 
                                                  />)}  
        </div>
        </>
    );
};

export default FriendList

















// get friends function

// delete friend function

// search friend function

// add friend function

// save button

// useEffect

// return : open form button + ArticleCard function