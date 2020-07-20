<<<<<<< HEAD
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
=======
import React from "react";
>>>>>>> master


const FriendList = (props) => {
  return (
    <section className="friendSection">   
      <div className="friendsContainer__header">
        <div className="friendsHeader__title">
            <h3>Friend List</h3>
        </div>
      </div>
      <div className="friendsContainer">
          
        <div className="friendOutput">
          {/* START SAMPLE HTML TO BE MOVED TO FRIEND CARD */}
          <div className="singleFriend">
            <div className="friend__userDetails">
              <img className="friend__userImage" src="./userIcon-black.png" alt="userIcon" />
              <div className="friend__name">
                FriendUserName
              </div>
            </div>
            <div className="friendsList__deleteBtn">
              <button id="deleteFriend" className="deleteBtn" type="button">&times;</button>
            </div>
            {/* END SAMPLE HTML */}
          </div>
          <div className="searchFriendsField">
            <input 
              type="search" 
              id="searchFriends" 
              name="searchFriends" 
              placeholder="Find A Friend..."/>
          </div> 
        </div>   
      </div>
    </section>
  )};

export default FriendList;