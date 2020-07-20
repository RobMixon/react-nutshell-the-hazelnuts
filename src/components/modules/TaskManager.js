const taskUrl = "http://localhost:5002"

const TaskManager = {
    getAll() {
        return (fetch (`${taskUrl}/tasks`).then(task => task.json()) )
    },
    post(newTask) {
        return(`${taskUrl}/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              }
        })
    }
}




export default TaskManager