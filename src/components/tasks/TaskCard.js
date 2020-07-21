// renders individual task card
//Gavin Swofford 7/20/2020

import React from 'react';
import { Link } from "react-router-dom";
import TaskManager from '../../components/modules/TaskManager'



const TaskCard = (props) => {


    let user = sessionStorage.getItem('user')
    const UserId = user.slice(user.search("id"))
    const myId = UserId.split(":")[1]
   let userId = (myId.split("}")[0])
    const checkBox = () => {
        let newTask = {
            userId: userId,
            title: props.task.title,
            completeBy: props.task.completeBy,
            status: true
        }
       
        TaskManager.post(newTask);
    }


    return (userId == props.task.userId && !props.task.status ?
        <div id={`task__${props.task.id}`} className="singleTask">
            <div className="taskBody__left">
                <div className="task__checkbox">
                    <input type="checkbox" className="checkbox"/>
                </div>
                <div className="task__description">
                    <h3>{props.task.title}</h3>
                </div>
            </div>  
            <div className="taskBody__middle">
                
            </div>
            <div className="taskBody__right">
                <div className="completeBy">
                    <p>Complete by: <span>{props.task.completeBy}</span></p>
                </div>
                <div className="taskButtonContainer">
                    <div className="clearfix">
                        
                        {userId == props.task.userId ?  <div className="clearfix"> <Link to={`/tasks/${props.task.id}/edit`}><button type="button" className="editbtn" id="darkBtn">Edit</button></Link></div>:null}
                    </div>
                    <div className="taskDeleteButton">
                    {userId == props.task.userId ?  <div className="clearfix"> <button id={`deleteTask__${props.task.id}`} className="fullDeleteBtn" type="button" onClick={() => props.deleteTask(props.task.id)}>Delete</button></div>:null}
                        
                    </div>
                </div>   
            </div>
        </div> : null
    )}

export default TaskCard