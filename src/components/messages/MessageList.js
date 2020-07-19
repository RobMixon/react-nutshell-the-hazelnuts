import React, { useEffect, useState } from "react";
import MessageManager from "../modules/MessageManager";
import MessageCard from "./MessageCard";
import MessageForm from "./MessageForm";
import FriendList from "../friends/FriendList"


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

    const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

    const clearUser = () => {
        sessionStorage.clear()
        setHasUser(isAuthenticated())
    }

    const [hasUser, setHasUser] = useState(isAuthenticated());

        useEffect(() => {
            getMessages();
        }, []);

    return (
        <>
            <section className="chatContainer">
                <MessageForm {...props} />
                <br />
                <br />
                <h3>Messages</h3>
                <div className="chatLog__container">
                    <div className="chatLog">
                        {messages.map(message => 
                            <MessageCard 
                                key={message.id}
                                message={message}
                                {...props} 
                            /> )} 
                    </div>
                </div>
            </section>
        </>
    );
};

export default MessageList










// search message function?

// add message function

// edit message button



// return : open form button + MessageCard function