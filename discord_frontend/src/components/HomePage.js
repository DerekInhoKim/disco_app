import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addJoinedChannel } from '../store/actions/channels'
import {addMessage} from '../store/actions/messages'
import { setUpUser } from '../store/actions/users'
import MessageList from './MessageList'
import ChannelButtons from './ChannelButtons'
import SendMessageForm from './SendMessageForm'

//How to pass in the socket from private route?
function HomePage({socket}){
  // const socker = socket
  // console.log("socket", socket)
  //Use the User slice of state to grab the userName from the store

  const currentUser = useSelector(state => state.users.user)
  // debuggers
  // const userName = "test"
  //currentChannel will be the id of a current channel which gets set into the state, when someone selects a new channel
  const currentChannel = useSelector(state => state.channels.currentChannel)
  const joinedChannels = useSelector(state => state.channels.joinedChannels)
  const dispatch = useDispatch()
  // const userName = currentUser.userName

  //Whenever a currentChannel is changes in the store, send a join message to the server to join the new server.
  useEffect(() => {
    if(!currentUser){
      const userId = window.localStorage.getItem("USER_ID")
      // debugger
      dispatch(setUpUser(userId))
    }
  }, [])

  useEffect(() => {
    if(currentChannel) {
      socket.emit('join', currentChannel)
    }
  }, [currentChannel, socket])

  //Set up listeners for a new socket connection
  useEffect(() => {
    //If there is no channel currently selected, immediately return from the function
    if(!currentChannel) {
      return;
    }
    //If a new channel is already joined to the channel, this will prevent us from adding additional listeners to the joinned channels.
    //This prevents multiple firings of the same event.
    if(joinedChannels.includes(currentChannel)) {
      return;
    }
    socket.on(currentChannel, ( message ) => {
      debugger;
      //Recieved a newMessage = {}
      // console.log(`Recieved new message ${message} `)
      dispatch(addMessage(message))
    })
    dispatch(addJoinedChannel(currentChannel))
  }, [currentChannel, joinedChannels, socket])

  // When the send button is clicked
  // emit a message acorss the socket
  // for the currentChannel
  const onSend = message => {
    // console.log(`Sending message ${message} for ${nickName} to ${currentChannel}`);
    const userName = currentUser.userName
    socket.emit(currentChannel, {
      message,
      userName
    });
    // debugger;
  }

  // A helper to render the message view or a 'choose a channel' message
  // if the user hasn't choosen one yet
  const renderMessageView = () => {
    if (currentChannel) {
      return (
        <div className="message-view">
          <MessageList />
          <SendMessageForm onSend={onSend} />
        </div>
      );
    } else {
      return <h1>Select a channel to Disco!</h1>;
    }
  };

  return (
    <main>
    <div className="sidebar">
      <ChannelButtons/>
    </div>
    {renderMessageView()}
  </main>
  )
}

export default HomePage
