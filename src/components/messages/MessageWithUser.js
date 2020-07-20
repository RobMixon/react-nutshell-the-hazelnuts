import React, { useState, useEffect } from "react";
import MessageManager from "../modules/MessageManager";
import { currentDateTime } from "../modules/helperFunctions";

//component to display single user and include <MessageCard /> for each user
//when editing message

const MessageWithUser = props => {
    //one 
    const [message, setMessage] = useState([]);

    useEffect(() => {
        //make call to get employees with animal from EmployeeManager
        MessageManager.getMessageWithId(props.match.params.messageId, message.userId)
            .then(APIResult => {
                console.log(APIResult)
                //set empty employee array with object of api result (gets one employee by id with the animals they are responsible for)
                setMessage(APIResult)
                //setting animals empty array with the result of animal objects (APIResult.animals because now nested as child of employee) from api call
            })
    }, []);


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