import React, { useState, useEffect } from "react"
import TaskManager from "../modules/TaskManager"
import TaskForm from "./TaskForm"
import UserCard from "../auth/UserCard";
import FriendList from "../friends/FriendList";


const TaskFormEdit = props => {
return(
    <>
        <UserCard />

    <div>Hey</div>
        <FriendList />

    </>
)
}

export default TaskFormEdit