const remoteURL = "http://localhost:5002"

export default {
    getAllFriends() {
       return fetch(`${remoteURL}/friends`).then(result => result.json())
    },

    deleteFriend(id) {
        return fetch(`${remoteURL}/friends/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
    },

    postNewFriend(newFriend) {
        return fetch(`${remoteURL}/friends/`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newFriend)
        }).then(result => result.json())

    },

   
    getUserFriends() {
        return fetch(`${remoteURL}/friends/?_expand=user`).then(result => result.json())
    },

    // getUserFriendsById(userId) {
    //     return fetch(`${remoteURL}/users/${userId}?_embed=friends`).then(result => result.json())
    // },

    // getUserFriends() {
    //     return fetch(`${remoteURL}/users/?_embed=friends`).then(result => result.json())
    // }

    
}


