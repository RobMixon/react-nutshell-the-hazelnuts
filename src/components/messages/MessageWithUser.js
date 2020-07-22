import React, { useState, useEffect } from "react";
import MessageManager from "../modules/MessageManager";
import { currentDateTime } from "../modules/helperFunctions";


const MessageWithUser = props => {

    const [message, setMessage] = useState([]);

    useEffect(() => {
        MessageManager.getMessageWithId(props.match.params.messageId, message.userId)
            .then(APIResult => {
                setMessage(APIResult)
               
            })
    }, [props.match.params.messageId, message.userId]);


    return (
        <>
        <div className="messageEditing">
            <h3>You are editing the following message:</h3>
            <h4>{currentDateTime(message.date)}</h4>
            <p> {message.content}</p>
        <button 
        type="button"
        onClick={() => props.history.push("/messages")}>
            Cancel
        </button>
        </div>
        </>
    );
};

export default MessageWithUser