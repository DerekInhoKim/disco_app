import React, { useEffect, useRef } from 'react'
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux'
import {getMessages, setMessages} from '../store/actions/messages'

const MessageList = () => {
  const currentChannel = useSelector(state => state.channels.currentChannel)
  const messages = useSelector(state => state.messages[currentChannel])
  const dispatch = useDispatch()
  const messageElement = useRef(null);

  // useEffect(() => {
  //     if (messageElement.current) {
  //         messageElement.current.scrollIntoView();
  //     }
  // });

  useEffect(() => {
    if(!currentChannel) {
      return;
    }

    dispatch(getMessages(currentChannel))
  }, [currentChannel, dispatch])

  if(!currentChannel) {
    return null;
  }


  const renderMessages = messages => {
    if (!messages) {
      return null;
    }
    return messages.map((message) => {
      // console.log(message)
      // format the date with moment.js
      const date = moment(message.createdAt).format('hh:mm:ss');

        // Render a single message
        return (
          <ul ref={messageElement}  key={message.id}>
            <h4 className="message_header">
              User #{message.userId} @ {date}:
            </h4>
            <div className="message_content">
              {message.message}
            </div>
          </ul>
        );
    })
  };
  // Render the component
  return (
    <ul>
        {renderMessages(messages)}
    </ul>
  );
}

export default MessageList;
