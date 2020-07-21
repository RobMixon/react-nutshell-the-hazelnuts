  import React from "react";
  import {Link} from "react-router-dom"

  const MessageCard = props => {
      let currentUser = JSON.parse(sessionStorage.getItem("user",))
    
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
                        <div className="postDetails">
                            <h4>{props.message.user.username}</h4>
                            <div className="chat__date">
                                <div className="chatDate__container">
                                    <p className="chatDate__text">{props.message.date}</p>
                                </div>
                            </div>
                        </div>                  
                    </div>
                    <div className="chatBelow__message">
                        <p className="chat__text">
                            {props.message.content}
                        </p>
                    </div>
                </div>
                <div className="chatCard__right">
                
                <div className="chat__buttonContainer">
                    <div className="chatEditButton">
                        {props.message.userId !== currentUser.id ? null : 
                        <Link to={`/messages/${props.message.id}/edit`}>
                            <button 
                                className="chat__editBtn" 
                                id="darkBtn"
                                type="button"
                                >
                                Edit
                            </button>
                        </Link>}
                    </div>
                    <div className="chatAddFriendButton">
                        {props.message.userId === currentUser.id ? null : 
                        <Link to="/messages/addFriend">
                            <button
                            className="chat__addFriendBtn"
                            type="button"
                            id="addFriendBtn"
                            >
                                <img src="./addFriend-black.png" className="addFriendIcon" alt="addFriend" />
                            </button>
                        </Link> }
                    </div>  
                </div>
            </div>
        </div>
        </>
)};

export default MessageCard