  import React from "react";
  import { currentDateTime } from "../modules/helperFunctions";

  const MessageCard = props => {
    
    return (
        <>
        <div className="singleChat">
    <div className="chatFloat__left">
        <div className="chat__profilePicture">
             {/* <img src={}/>  */}
        </div>
    </div>
    <div className="chatFloat__middle">
        <div className="chatAbove__userName">
            <h4>{props.message.user.username}</h4>
        </div>
        <div className="chatBelow__message">
            <p className="chat__text">
                {props.message.content}
            </p>
        </div>
    </div>
    <div className="chatFloat__right">
        <div className="chat__date">
            <div className="chatDate__container">
                <p className="chatData__text">{currentDateTime(props.message.date)}</p>
            </div>
        </div>
        <div className="chat__buttonContainer">

        {/* added add friend button if not the current user */}
            <div className="chatAddFriendButton">
                {props.message.userId === 1 ? null : 
                <button
                className="chat__addFriendBtn"
                type="button"
                onClick={() => {props.history.push("/friends")}} 
                >
                Add Friend
                </button>
                }
            </div>

            <div className="chatEditButton">
            {/* shows edit button only for current user */}
             {props.message.userId !== 1 ? null : 
            <button 
                className="chat__editBtn" 
                type="button"
                onClick={() => props.history.push(`/messages/${props.message.id}/edit`)}>
                Edit
            </button>} 
                
            </div>
        </div>
    </div>
</div>

 </>

    )

     
   
     }

  export default MessageCard
     
 




// returns individual message cards

// add friend button if not already friends

// edit message button is current user