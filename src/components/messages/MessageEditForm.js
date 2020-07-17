import React, { useState, useEffect } from "react";
import MessageManager from "../modules/MessageManager";

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

    const editedMessage = {
        id: props.match.params.messageId,
        //add session storage value here!
        userId: 1,
        content: message.content,
        date: new Date()
    }

        //MessageManager update (PUT) function
        MessageManager.updateMessage(editedMessage)
        .then(() => {
            //get messages again??
        })

    }

    useEffect(() => {
        MessageManager.getMessage(props.match.params.messageId)
        .then((message) => {
            setMessage(message)
            setIsLoading(false)
        })
    }, [props.match.params.messageId]);

   return (
    <>
    <form>
        <fieldset>
            <label htmlFor="content">Start A Chat</label>
            <input name="content"  
                type="text"
                required
                onChange={handleFieldChange}
                id="content"
                autoFocus
                spellCheck={true}
                >
            </input>
            <button
                type="button"
                disabled={isLoading}
                onClick={updateExistingMessage}>
                    Enter
            </button> 
                    
        </fieldset>
    </form>
   
    </>
   )

}

export default MessageEditForm;