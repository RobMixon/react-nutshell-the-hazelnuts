import React from "react"

const AddFriendFromMessage = (props) => {

    const handleConfirmFriend = () => {

    }
    const handleCancelFriend = () => {

    }

    return (
        <>

        <div className="container">
            <h1>Add Friend?</h1>

      <div className="clearfix">
        <button 
        type="button"
        onClick={handleConfirmFriend} 
        className="confirmbtn">
        Confirm
        </button>
        <button 
        type="button" 
        onClick={handleCancelFriend}
        class="cancelbtn">
        Just Kidding
        </button>
      </div>
      </div>

    </>

    )
}

export default AddFriendFromMessage