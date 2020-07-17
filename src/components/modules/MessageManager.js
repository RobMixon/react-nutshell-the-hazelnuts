const remoteURL = "http://localhost:5002"

export default {
    getAllMessages() {
        return fetch(`${remoteURL}/messages`).then(result => result.json())
    },

    getWithUser() {
        return fetch(`${remoteURL}/messages?_expand=user`).then(result => result.json())
    },

    postMessage(newMessage) {
        return fetch(`${remoteURL}/messages`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newMessage)
        }).then(result => result.json())
    },

    updateMessage(editedMessage) {
        return fetch(`${remoteURL}/messages/${editedMessage.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedMessage)
        }).then(data => data.json());
    },

    getMessage(id) {
        return fetch(`${remoteURL}/messages/${id}`).then(result => result.json())
    }
        
}