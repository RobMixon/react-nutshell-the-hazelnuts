//Gavin Swofford 7/20/2020


import TaskManager from "../modules/TaskManager"
// import { Link } from "react-router-dom";
import TaskCard from "./TaskCard"
import React, { useState, useEffect } from 'react';
import UserCard from "../auth/UserCard";
import FriendList from "../friends/FriendList";


const TaskList = (props) => {

    //below gets the userID from session storage
    let user = sessionStorage.getItem('user')
    const UserId = user.slice(user.search("id"))
    const myId = UserId.split(":")[1]
    let userId = (myId.split("}")[0])

    //below handles the logic for when a check box is marked
    const checkBox = (tim) => {
        let newTask = {
            userId: userId,
            title: tim.title,
            completeBy: tim.completeBy,
            status: true,
            id: tim.id
        }

       
        TaskManager.update(newTask).then(() => {
            getTask()
        })
    }

    const [task, setTask] = useState([])


    // get tasks function
    const getTask = () => {
        TaskManager.getAll().then((result) => {
            setTask(result)

        })
    }



    // delete task function
    const deleteTask = (id) => {
        TaskManager.delete(id).then(() => {
            getTask()
        })
    }

    // useEffect
    useEffect(() => {
        getTask()
    }, [])

    // return : open form button + ArticleCard function
    return (
        <>
            <main className="mainFlex">
                <section className="mainFlex__userCard">
                    <UserCard />
                </section>
                <section className="mainFlex__subpage ">
                    <div className="postTask__button">
                        <button type="button" className="wideBlueBtn" onClick={() => { props.history.push("/tasks/new") }}>Add Task</button>
                    </div>
                    <div className="taskCard">{task.map(element =>
                        <TaskCard key={element.id} task={element} userId={userId} checkBox={checkBox} deleteTask={deleteTask} {...props} />
                    )}
                    </div>
                </section>
                <section className="mainFlex__friendList">
                    <FriendList {...props} />
                </section>
            </main>
        </>
    )

}

export default TaskList