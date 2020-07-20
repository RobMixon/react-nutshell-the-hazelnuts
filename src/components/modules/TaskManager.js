const taskUrl = "http://localhost:5002"

const TaskManager = {
    getAll() {
        return (fetch (`${taskUrl}/tasks`).then(task => task.json()) )
    },
    post(newTask) {
        return fetch(`${taskUrl}/tasks`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newTask)
        }).then(data => data.json())
      }
}




export default TaskManager