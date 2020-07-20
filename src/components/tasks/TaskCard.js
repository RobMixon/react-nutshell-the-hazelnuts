// renders individual task card
import React from 'react';

const TaskCard = (props) => {
    console.log(props, "hey")
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
                        <button type="button" className="editbtn" id="darkBtn">Edit</button>
                    </div>
                    <div className="taskDeleteButton">
                        <button id={`deleteTask__${props.task.id}`} className="fullDeleteBtn" type="button">Delete</button>
                    </div>
                </div>   
            </div>
        </div>
    )}

export default TaskCard