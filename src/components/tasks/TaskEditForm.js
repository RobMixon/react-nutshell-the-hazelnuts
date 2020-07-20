import React, { useState, useEffect } from "react"
import TaskManager from "../modules/TaskManager"
import TaskForm from "./TaskForm"
import UserCard from "../auth/UserCard";
import FriendList from "../friends/FriendList";


const TaskFormEdit = props => {
    const [task, setTask] = useState({ title: "", completeBy: "", status: false});
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...task };
        stateToChange[evt.target.id] = evt.target.value;
        setTask(stateToChange);
    };
    //this updates the existing animal card
    const updateExistingTask = evt => {
        evt.preventDefault()
        setIsLoading(true);

        // This is an edit, so we need the id
        const editTask = {
            id: props.match.params.tasksId,
            userId: task.userId,
            title: task.title,
            completeBy: task.completeBy,
        };

        TaskManager.update(editTask)
            .then(() => props.history.push("/tasks"))
    }

    useEffect(() => {
        TaskManager.get(props.match.params.tasksId)
            .then(task => {
                setTask(task);
                setIsLoading(false);
                
            });
    }, []);




return(
    <>
        <UserCard />

        <form>
                <fieldset>
                    <div className="formgrid">
                    <label htmlFor="title">Title: </label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="title"
                           value={task.title}
                        />


                        <label htmlFor="completeBy">Complete By: </label>
                        <input
                            type="date"
                            required
                            onChange={handleFieldChange}
                            id="completeBy"
                            value={task.completeBy}

                        />
                        

                    </div>
                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={updateExistingTask}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        <FriendList />

    </>
)
}

export default TaskFormEdit