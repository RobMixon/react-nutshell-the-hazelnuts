import React, { useEffect, useState } from "react";
import MessageManager from "../modules/MessageManager";
import MessageCard from "./MessageCard";
import MessageForm from "./MessageForm";
import UserCard from "../auth/UserCard"


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

    return (
        <>
            <main className="chatContainer"> 
                <section className="chatContainer__left">
                    <UserCard />
                </section>
                <section className="chatContainer__middle">
                        <MessageForm {...props} />
                    <div className="chatLog__container">
                        <h3>Messages</h3>
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
                <section className="chatContainer__right">
                    <div className="friendsContainer">
                        <div className="friendsContainer__header">
                            <div className="friendsHeader__title">
                                <h2>FRIENDS</h2>
                            </div>

                            
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default MessageList










// search message function?

// add message function

// edit message button



// return : open form button + MessageCard function