  import React from "react";
  import { currentDateTime } from "../modules/helperFunctions";

  const MessageCard = props => {

    return (
        <>
            <div className="chatCard">
                <div className="chatCard__left">
                <div className="chat__userImage">
                    <img src={`./userIcon-black.png`}/>
                </div>
            </div>
            <div className="chatCard__middle">
                <div className="chatAbove__userName">
                    <h4>{props.message.user.username}</h4>
                    {/* added add friend button if not the current user (should this be username?) */}
                    {props.message.userId === 1 ? null : 
                        <button
                        className="chat__addFriendBtn"
                        type="button"
                        id="addFriendBtn"
                        // onClick={} --need to present user with message asking to verify if want to add friend to friend list
                        >
                            <img src="./addFriend-black.png" className="addFriendIcon" />
                        </button>
                        }
                </div>
                <div className="chatBelow__message">
                    <p className="chat__text">
                        {props.message.content}
                    </p>
                </div>
            </div>
            <div className="chatCard__right">
                <div className="chat__date">
                    <div className="chatDate__container">
                        <p className="chatDate__text">{currentDateTime(props.message.date)}</p>
                    </div>
                </div>
                <div className="chat__buttonContainer">
                    <div className="chatEditButton">
                        {/* shows edit button only for current user */}
                        {/* sessionStorage.getItem("credentials", parseInt()) */}
                        {props.message.userId !== 1  ? null : 
                        <button 
                        className="chat__editBtn"
                        id="darkBtn" 
                        type="button"
                        // onClick={} --need to send current message back to form on same or different page? and allow user to edit and submit again..
                        >
                        Edit
                    </button>} 
                    </div>
                </div>  
            </div>
        </div>
        </>
)};

  export default MessageCard
     
 




// returns individual message cards

// add friend button if not already friends

// edit message button is current user