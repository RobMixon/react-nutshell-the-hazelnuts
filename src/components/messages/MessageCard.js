  import React from "react";
  import {Link} from "react-router-dom"

  const MessageCard = props => {
    
    return (
        <>
            <div className="chatCard">
                <div className="chatCard__left">
                <div className="chat__userImage">
                    <img src={`./userIcon-black.png`} alt="userIcon" />
                </div>
            </div>
            <div className="chatCard__middle">
                <div className="chatAbove__userName">
                    <h4>{props.message.user.username}</h4>
                    {/* added add friend button if not the current user */}
                    {props.message.userId === 1 ? null : 
                    <Link to="/messages/addFriend">
                        <button
                        className="chat__addFriendBtn"
                        type="button"
                        id="addFriendBtn"
                        // onClick={props.history.push("/messages/addFriend")} 
                        >
                            <img src="./addFriend-black.png" className="addFriendIcon" alt="addFriend" />
                        </button>
                       
                        </Link> }
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
                        <p className="chatDate__text">{props.message.date}</p>
                    </div>
                </div>
                <div className="chat__buttonContainer">
                <div className="chatEditButton">
            {/* shows edit button only for current user */}
             {props.message.userId !== 1 ? null : 
            <Link to={`/messages/${props.message.id}/edit`}>
            <button 
                className="chat__editBtn" 
                type="button"
                // onClick={() => props.history.push(`/messages/${props.message.id}/edit`)}
                >
                Edit
            </button>
            </Link>}
                    </div>
                </div>  
            </div>
        </div>
        </>
)};

export default MessageCard