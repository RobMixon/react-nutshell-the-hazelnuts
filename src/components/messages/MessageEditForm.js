import React, { useState, useEffect } from "react";
import MessageManager from "../modules/MessageManager";
import MessageWithUser from "./MessageWithUser";
import { currentDateTime } from "../modules/helperFunctions";

const MessageEditForm = (props) => {
    
    //change userId value to session storage (see MessageForm)
    const [message, setMessage] = useState({userId: 1, date: new Date() , content:""});
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = event => {
        const stateToChange = {...message};
        stateToChange[event.target.id] = event.target.value
        setMessage(stateToChange)
    };

    const updateExistingMessage = event => {
        event.preventDefault();
        setIsLoading(true)
    
    const timestamp = Date.now()

    const editedMessage = {
        id: props.match.params.messageId,
       //
        userId: 1,
        content: message.content,
        date: currentDateTime(timestamp),
    }

        //MessageManager update (PUT) function
        MessageManager.updateMessage(editedMessage)
        .then(() => {
           props.history.push("/messages")
        })

    }

    useEffect(() => {
        MessageManager.getMessage(props.match.params.messageId)
        .then( () => {
            setMessage(message)
            setIsLoading(false)
        } )
            
        
    }, []);

    
   return (
     <> 
        <main className="messageEditForm">
            <form className="messageEditForm__form">
                <fieldset className="messageEditForm__fieldset">
                    <label htmlFor="content">Edit Your Message</label>
                    <input name="content"  
                        type="textarea"
                        required
                        onChange={handleFieldChange}
                        id="content"
                        autoFocus
                        value={message.content}
                        spellCheck={true}
                        >
                    </input> 
                    <button
                        type="button"
                        className="wideBlueBtn"
                        id="submitBtn"
                        disabled={isLoading}
                        onClick={updateExistingMessage}>
                            Enter
                    </button>  
                </fieldset>
            </form>
            
            <section classname="messageToBeEdited">
                <MessageWithUser {...props} /> 
            </section> 
        </main>
    </>  
 
   )

}

export default MessageEditForm;
