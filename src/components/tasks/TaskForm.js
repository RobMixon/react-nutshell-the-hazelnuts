//Gavin Swofford 7/20/2020
import React, { useState } from 'react';
import TaskManager from '../../components/modules/TaskManager'

let user = sessionStorage.getItem('user')
    const UserId = user.slice(user.search("id"))
    const myId = UserId.split(":")[1]
   let userId = (myId.split("}")[0])
const TaskForm = (props) => {

    const [task, setTask] = useState({userId: userId, title: "", completeBy: "", status: false})
    const [isLoading, setIsLoading] = useState(false);

// add task function with userID, task name, due date(manual), complete (default: false)
const handleFieldChange = evt => {
    const stateToChange = {...task};
    stateToChange[evt.target.id] = evt.target.value
    setTask(stateToChange);
}

const constructNewTask = evt => {
    evt.preventDefault();
    if(task.title === "" || task.completeBy === "") { window.alert("please fill in the form") }
    else {
    setIsLoading(true)
    let newTask = {
        userId: userId,
        title: task.title,
        completeBy: task.completeBy,
        status: task.status
    }
   
    TaskManager.post(newTask).then(() => props.history.push("/tasks"));
}
};
// checkbox to mark complete as true

// save button

return (
    <>
        <form className="taskForm__form">
            <fieldset className="taskForm__fieldset">
                <div className="taskForm__formgrid">
                <label htmlFor="title">Title: </label>
                    <input
                        type="text"
                        required
                        onChange={handleFieldChange}
                        id="title"
                        placeholder="Enter a Title"
                    />


                    <label htmlFor="completeBy">Complete By: </label>
                    <input
                        type="date"
                        required
                        onChange={handleFieldChange}
                        id="completeBy"
                        placeholder="Enter a completion data"
                    />
                    

                </div>
                <div className="alignRight">
                    <button
                        type="button"
                        disabled={isLoading}
                        onClick={constructNewTask}
                    >Submit</button>
                </div>
            </fieldset>
        </form>

    </>
)
}


export default TaskForm