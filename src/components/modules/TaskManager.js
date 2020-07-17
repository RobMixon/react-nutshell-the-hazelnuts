taskUrl = "http://localhost:5002/"

TaskManager = {
    getAll = () => {
        return (fetch (`${taskUrl}/tasks`).then((task) => {
           task.json() 
        }) )
    }
}


export default TaskManager