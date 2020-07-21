import React, { useEffect, useState} from "react";
import FriendManager from "../modules/FriendManager";

const NewFriendSearch = (props) => {
    let searchFieldValue;
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
        console.log(searchFieldValue)
    }

   const getUserFriends = () => {
    FriendManager.getUserFriends().then(friends => {
        const findFriend = friends.find(friend => {
            console.log(friend)
            return friend.user.username.includes(friendSearch.search)
        })
        setFriendSearch({...friendSearch, friendsArray: findFriend})
        console.log(findFriend)
        
   })
}

        useEffect(() => {
           getUserFriends();
        }, [])
        
  
    const postFriend = () => {
        const postFriendObject = {
            userId: friendSearch.friendsArray.id,
            activeUserId: 1
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
