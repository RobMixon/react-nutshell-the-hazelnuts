import React, { useState } from "react";
import MessageManager from "../modules/MessageManager";
<<<<<<< HEAD
=======
import { currentDateTime } from "../modules/helperFunctions";

>>>>>>> master

const MessageForm = props => { 
    //need to add userId: sessionStorage.getItem("credentials", parseInt(....))
    //date will be converted in MessageCard
    const [message, setMessage] = useState({userId: 1, date: new Date() , content:""});

    //initally button will not be disabled because nothing will be loading
    const [isLoading, setIsLoading] = useState(false)
    
    const handleFieldChange = event => {
        const stateToChange = {...message}
        stateToChange[event.target.id] = event.target.value
        setMessage(stateToChange)
    }

    
    const postNewMessage = event => {
        event.preventDefault();
        if (message.content === "") {
            window.alert("Write something first")
        } else {
            setIsLoading(true);
            const timestamp = Date.now()
            message.date = currentDateTime(timestamp);
            MessageManager.postMessage(message)
            .then(() => props.history.push("/messages"))
            window.location.reload(true)
           }   
        }
<<<<<<< HEAD
            
=======
    };

>>>>>>> master
    return (
        <>
            <div className="messageForm">
                <div className="messageForm__title">
                    <h3>Write A Message</h3>
                </div>
                <div className="messageForm__container">
                    <div className="messageForm__profilePicture">
                        <img className="messageForm__userImage" src="./userIcon-black.png" alt="userIcon" />
                    </div>
                    <div className="messageInput__compose">
                        <form className="messageForm__form">
                            <fieldset className="messageForm__fieldset">
                                <input
                                    className="messageForm__content" 
                                    name="content"  
                                    type="textarea"
                                    required
                                    onChange={handleFieldChange}
                                    id="content"
                                    placeholder="Get to gettin' and write something..."
                                    autoFocus
                                    spellCheck={true}
                                    >
                                </input>
                            </fieldset>
                        </form>
                    </div>
                    <div className="messageForm__button">
                        <button
                            className="messageForm__submit"
                            type="button"
                            id="blueBtn"
                            disabled={isLoading}
                            onClick={postNewMessage}>
                            Post
                        </button>                       
                    </div>    
                </div>
            </div>
        </>
    )

}

<<<<<<< HEAD
export default MessageForm

=======
export default MessageForm
>>>>>>> master
