import TaskManager from "../modules/TaskManager"
import { Link } from "react-router-dom";
import TaskCard from "./TaskCard"
import React, { useState, useEffect } from 'react';

const TaskList = (props) => {
    
    const [task, setTask] = useState([])
   

// get tasks function
const getTask = () => {
TaskManager.getAll().then((result) => {
    setTask(result)
    
})
}

// console.log(task)


// delete task function

// useEffect
useEffect(() => {
getTask()
}, []) 
  
// return : open form button + ArticleCard function
return (
    <>
        <div className="container">
            <h1>Add Task</h1>

            <button type="button" className="addbtn">Add</button>
            
            <section className="taskCard">{ task.map(element => 
                <TaskCard key={element.id} task={element} {...props}/>
                )};
                </section>
        </div>
    </>
    )

}

export default TaskList