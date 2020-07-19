const remoteURL = "http://localhost:5002"

export default {
    getAllMessages() {
        return fetch(`${remoteURL}/messages`).then(result => result.json())
    },

    //Get messages with user information
    getWithUser() {
        return fetch(`${remoteURL}/messages?_expand=user`).then(result => result.json())
    },

    //POST
    postMessage(newMessage) {
        return fetch(`${remoteURL}/messages`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newMessage)
        }).then(result => result.json())
    },

    //PUT
    updateMessage(editedMessage) {
        return fetch(`${remoteURL}/messages/${editedMessage.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedMessage)
        }).then(data => data.json());
    },

    //Get message based on message id
    getMessage(id) {
        return fetch(`${remoteURL}/messages/${id}`).then(result => result.json())
    },

    //get specific message based on user in order to show up as separate card during edit
    getMessageWithId(id, userId) {
        return fetch(`${remoteURL}/messages/${id}?userId=${userId}`)
        .then(result => result.json())
    },

    getUsers() {
        return fetch(`${remoteURL}/users`).then(result => result.json())
        
    }
   
        
}