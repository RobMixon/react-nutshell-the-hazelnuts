import React, { useState, useEffect } from "react";
import MessageManager from "../modules/MessageManager";



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

    useEffect(() => {
       MessageManager.getWithUser()
    }, []);

    const postNewMessage = event => {
        event.preventDefault();
        if (message.content === "") {
            window.alert("Write something first")
        } else {
           
            //this will be in process of submitting new message so do not want user to keep clicking submit button
            setIsLoading(true);
            MessageManager.postMessage(message)
            .then(() => {
                MessageManager.getWithUser()
                setMessage(message)
            })
            //to get sent to same page in message list?
            // window.location.reload(true)
        }
    };

    return(
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

// Message is only visible fom field
// save button to print to API