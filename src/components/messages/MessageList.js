import React, { useEffect, useState } from "react";
import MessageManager from "../modules/MessageManager";
import MessageCard from "./MessageCard";
import MessageForm from "./MessageForm";
import UserCard from "../auth/UserCard";
import FriendList from "../friends/FriendList";



const MessageList = (props) => {
    
    //declaring initial state as empty array
    const [messages, setMessages] = useState([])
    

    // get all messages from database
    const getMessages = () => {
        return MessageManager.getWithUser().then(messagesFromAPI => {
            const messagesByDate = messagesFromAPI.sort((date1, date2) => new Date(date1.date) - new Date(date2.date))
            //update state of messages array with all the messages retrieved from API after sorting
            setMessages(messagesByDate)
        })
    };

        useEffect(() => {
            getMessages();
        }, []);


    return (
        <>
            <main className="mainFlex">
                <section className="mainFlex__userCard">
                    <UserCard />
                </section>

                <section className="mainFlex__subpage">
                    <MessageForm {...props} />
                    <br />
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
                
                <section className="mainFlex__friendList">
                    <FriendList {...props} />
                </section>
            </main>
        </>
    );
};

export default MessageList










