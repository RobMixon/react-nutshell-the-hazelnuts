import React, { useState, useEffect } from 'react';
import TaskManager from '../../components/modules/TaskManager'
const userId = 2; 
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
    task.title === "" ? window.alert("Please make sure you fill in title"): task.completeBy === "" ? window.alert("please enter a completion date") :
    setIsLoading(true)
    TaskManager.post(task).then(() => props.history.push("/tasks"))
}
// checkbox to mark complete as true

// save button

return (
    <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="title"
                            placeholder="Enter a Title"
                        />
                        <label htmlFor="title">Title: </label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="completeBy"
                            placeholder="Enter a completion data"
                        />
                        <label htmlFor="completeBy">Complete By: </label>

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