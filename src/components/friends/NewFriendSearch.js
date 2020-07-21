import React, { useEffect, useState} from "react";
import FriendManager from "../modules/FriendManager";

const NewFriendSearch = (props) => {
    let currentUser = JSON.parse(sessionStorage.getItem("user",))
  
    //set search term into state
    const [friendSearch, setFriendSearch] = useState({
        search: "",
        friendsArray: []
    })
   
    const handleFieldChange = event => {
        let target = event.target
        let {name, value} = target
        setFriendSearch({...friendSearch, [name]: value});
        console.log(name, value)
    }

   const getUserFriends = () => {
       FriendManager.getUserFriends().then(friends => {
        
        //    const findFriend = friends.find((friend) => {  
        //       if (friend.user.username.includes(friendSearch.search)) {
        //           return friend
        //       }
        //    })
          setFriendSearch({...friendSearch, friendsArray: friends})
        
           
      })
   }

        useEffect(() => {
           getUserFriends();
        }, [])

        
    const postFriend = () => {
       let match = friendSearch.friendsArray.find(friend => {
          
            if(friend.user.username.includes(friendSearch.search.value)) {
              
                return friend
            }
        })
        console.log(match)
        const postFriendObject = {
            userId: match.userId,
            activeUserId: currentUser.id
        }
        
        FriendManager.postNewFriend(postFriendObject)
        .then(() => props.history.push("/messages"))
    } 
    
          
    return (
        <form onSubmit={postFriend}>
        <div className="searchFriendsField">
          <input 
            type="text" 
            id="searchFriends" 
            name="search"
            value={friendSearch.search} 
            onChange={handleFieldChange}
            placeholder="Find A Friend..."/>
      </div> 
      </form> 
    )
}

export default NewFriendSearch;
