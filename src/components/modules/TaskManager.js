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
      },
      update(task) {
        return fetch(`${taskUrl}/tasks/${task.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(task)
        }).then(data => data.json());
      },
      get(id) {
        return fetch(`${taskUrl}/tasks/${id}`).then(result => result.json())
      }
}




export default TaskManager