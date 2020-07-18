import React, { useState, useEffect } from "react";
import MessageManager from "../modules/MessageManager";

const MessageForm = props => { 
    //need to add userId: sessionStorage.getItem("credentials", parseInt(....))
    //date will be converted in MessageCard
    const [message, setMessage] = useState({id: "", userId: 1, date: new Date() , content:"", editing: false});

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
            MessageManager.postMessage(message)
            // window.location.reload(true)
            .then(() => props.history.push("/messages"))
           }   
        }
            
 
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
                    onClick={postNewMessage}>
                        Enter
                </button> 
                        
            </fieldset>
        </form>
       
        </>
    )

}

export default MessageForm

