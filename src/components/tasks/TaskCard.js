// renders individual task card
import React from 'react';
import "./TaskCard.css";
import { Link } from "react-router-dom";


const TaskCard = (props) => {
  
    
 return (
     <div id={`task__${props.task.id}`} className="singleTask">
     <div className="task__header">
     {props.userId == props.task.userId ? <div className="taskDeleteButton">
             <button id={`deleteTask__${props.task.id}`} className="deleteBtn" type="button">&times;</button>
         </div>: null}
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
        
         {props.userId == props.task.userId ?  <div className="clearfix"> <Link to={`/tasks/${props.task.userId}/edit`}><button type="button" className="editbtn" >edit</button></Link></div>:null}
        
      
     </div>
 </div>

 )

}

export default TaskCard