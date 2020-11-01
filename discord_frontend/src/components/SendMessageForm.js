import React, { useState } from 'react'

const SendMessageForm = ({onSend}) => {

  const [message, setMessage] = useState("");

  //When someone clicks the send,
  //Prevent Default form submission
  //Call onsend so that the parent knows that it was pushed.
  //Reset the message state locally

  const onSubmit = async (e) => {
    e.preventDefault();
    // debugger;
    onSend(message);
    setMessage("")
  }

  const onChange = e => {
    setMessage(e.target.value)
  }

  return(
    <div className="chat__input">
      <form onSubmit={onSubmit}>
        <input className="message_input" onChange={onChange} type="text" value={message}></input>
        <div className="chat__inputButton" type="submit">Send</div>
      </form>
    </div>
  )
}

export default SendMessageForm
