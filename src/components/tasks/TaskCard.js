// renders individual task card
import React from 'react';
import "./TaskCard.css"

const TaskCard = (props) => {
    console.log(props, "hey")
 return (
     <div id={`task__${props.task.id}`} className="singleTask">
     <div className="task__header">
     <div className="taskDeleteButton">
             <button id={`deleteTask__${props.task.id}`} className="deleteBtn" type="button">&times;</button>
         </div>
         <div className="completeBy">
             <p>Complete by: {props.task.completeBy}</p>
         </div>
         
     </div> 
     <div className="taskBody">
         <div className="task__checkbox">
             <input type="checkbox" className="checkbox"/>
         </div>
         <div className="task__description">
             <h3>{props.task.title}</h3>
         </div>   
         <div className="clearfix">
        <button type="button" className="editbtn">edit</button>
        
      </div>
     </div>
 </div>

 )

}

export default TaskCard