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
    }
}