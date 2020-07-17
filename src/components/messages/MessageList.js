import React, { useEffect, useState } from "react";
import MessageManager from "../modules/MessageManager";
import MessageCard from "./MessageCard";
import MessageForm from "./MessageForm";
import MessageEditForm from "./MessageEditForm";


const MessageList = (props) => {
    //declaring initial state as empty array
    const [messages, setMessages] = useState([])

    // get all messages from database
    const getMessages = () => {
        return MessageManager.getWithUser().then (messagesFromAPI => {
            const messagesByDate = messagesFromAPI.sort((date1, date2) => new Date(date1.date) - new Date(date2.date))
            //update state of messages array with all the messages retrieved from API
            console.log(messagesByDate)
            setMessages(messagesByDate)
        })
    };

    useEffect(() => {
        getMessages();
    }, []);

    //trying code to edit --delete below if not working
    const updateExistingMessage = () => {
        return (
            <MessageForm />
        )
    }
    //end delete

    return (
        <>
        <div>
        <MessageForm {...props} editForm={updateExistingMessage} />
        </div>
        <div className="container-cards">
            {messages.map(message => <MessageCard key={message.id}
                                                  message={message}
                                                  editForm={updateExistingMessage}
                                                  {...props} 
                                                  />  )} 
        </div>
        </>
    );
};

export default MessageList










// search message function?

// add message function

// edit message button



// return : open form button + MessageCard function