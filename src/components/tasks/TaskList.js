import TaskManager from "../modules/TaskManager"
// import { Link } from "react-router-dom";
import TaskCard from "./TaskCard"
import React, { useState, useEffect } from 'react';
import UserCard from "../auth/UserCard";
import FriendList from "../friends/FriendList";


const TaskList = (props) => {
    const userId = 1;
    
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
        <UserCard />
        <div className="container">
            <h1>Add Task</h1>

            <button type="button" className="addbtn" onClick={() => {props.history.push("/tasks/new")}} >Add Task</button>

            
            <section className="taskCard">{ task.map(element => 
                <TaskCard key={element.id} task={element} {...props}/>
                )};
                </section>
        </div>
        <FriendList />
    </>
    )

}

export default TaskList