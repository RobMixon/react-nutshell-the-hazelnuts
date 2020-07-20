// renders individual task card
import React from 'react';
import { Link } from "react-router-dom";



const TaskCard = (props) => {

    return (
        <div id={`task__${props.task.id}`} className="singleTask">
            <div className="taskBody__left">
                <div className="task__checkbox">
                    <input type="checkbox" className="checkbox"/>
                </div>
                <div className="task__description">
                    <h3>{props.task.title}</h3>
                </div>
            </div>  
            <div className="taskBody__right">
                <div className="completeBy">
                    <p>Complete by: <span>{props.task.completeBy}</span></p>
                </div>
                <div className="taskButtonContainer">
                    <div className="clearfix">
                        
                        {props.userId == props.task.userId ?  <div className="clearfix"> <Link to={`/tasks/${props.task.id}/edit`}><button type="button" className="editbtn" id="darkBtn">Edit</button></Link></div>:null}
                    </div>
                    <div className="taskDeleteButton">
                    {props.userId == props.task.userId ?  <div className="clearfix"> <button id={`deleteTask__${props.task.id}`} className="fullDeleteBtn" type="button" onClick={() => props.deleteTask(props.task.id)}>Delete</button></div>:null}
                        
                    </div>
                </div>   
            </div>
        </div>
    )}

export default TaskCard