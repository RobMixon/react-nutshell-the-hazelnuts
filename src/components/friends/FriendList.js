import React, { useEffect, useState } from "react";
import FriendManager from "../modules/FriendManager";
import FriendCard from "./FriendCard";



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
        FriendManager.deleteFriend(id)
        .then(() => {
            FriendManager.getUserFriends().then((friendsFromAPI) => {
              console.log(friendsFromAPI)
                 setFriends(friendsFromAPI)
            });
        });
    };

  return (
    <section className="friendSection">   
      <div className="friendsContainer__header">
        <div className="friendsHeader__title">
            <h3>Friend List</h3>
        </div>
      </div>
      <div className="friendsContainer">
      {friends && friends.map(friend => <FriendCard key={friend.id}
                                                    friend={friend}
                                                    deleteFriend={deleteFriend}
                                                    {...props} 
                                                  />)}  
          
        <div className="friendOutput">
        
          </div>
        </div>
       
        <div className="searchFriendsField">
          <input 
            type="search" 
            id="searchFriends" 
            name="searchFriends" 
            placeholder="Find A Friend..."/>

      </div>   
      
    </section>
  )};

export default FriendList;