const userUrl = "http://localhost:5002"

const UserManager = {
    getUser() {
        return (fetch (`${userUrl}/users`).then(user => user.json()) )
    }
}




export default UserManager