const taskUrl = "http://localhost:5002"

const TaskManager = {
    getAll() {
        return (fetch (`${taskUrl}/tasks`).then(task => task.json()) )
    }
}




export default TaskManager