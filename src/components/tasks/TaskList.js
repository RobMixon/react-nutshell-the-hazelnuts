import TaskManager from "../modules/TaskManager"
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const TaskList = () => {
    
    const [task, setTask] = useState([])

// get tasks function
TaskManager.getAll((result) => {
    setTask(result)
    console.log(task)
})
console.log(task)
return (
<div>Hey</div>
)

// delete task function

// useEffect

// return : open form button + ArticleCard function


}

export default TaskList