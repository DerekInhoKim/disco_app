import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addJoinedChannel } from '../store/actions/channels'
import {addMessage} from '../store/actions/messages'
import { setUpUser } from '../store/actions/users'
import MessageList from './MessageList'
import ChannelButtons from './ChannelButtons'
import SendMessageForm from './SendMessageForm'
import Server from './Server'
// import '../homepage.css'
import {getServers, setCurrentServer } from '../store/actions/server'

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
  const userId = window.localStorage.getItem("USER_ID")
  // const userName = currentUser.userName

  //Whenever a currentChannel is changes in the store, send a join message to the server to join the new server.
  useEffect(() => {
    if(!currentUser){
      // debugger
      dispatch(setUpUser(userId))
    }
  }, [])

  // useEffect(() => {
  //   //Dispatches a request to recieve all the servers for the current user using their id.
  //   dispatch(getServers(userId))
  //   //Only runs once, when the Server is called is called
  // }, [])

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
    console.log("currentChannel", currentChannel)
    // debugger
    socket.on(currentChannel, ( message ) => {
      // debugger;
      //Recieved a newMessage = {}
      // console.log(`Recieved new message ${message} `)
      dispatch(addMessage(message))
    })
    dispatch(addJoinedChannel(currentChannel))
  }, [currentChannel, joinedChannels, socket])

  useEffect(() => {
    console.log(currentChannel, joinedChannels, socket)
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
        <div className="message_view_container">
          <div className="message_view">
            <MessageList />
          </div>
          <div className="input_view">
            <SendMessageForm onSend={onSend} />
          </div>
        </div>
      );
    } else {
      return <h1>Select a Server and Channel to Disco!</h1>;
    }
  };

  return (
    <div className="sidebar">
      <div className="button-container">
        <div className="server-container">
          <Server />
        </div>
        <div className="channel-container">
          <ChannelButtons/>
        </div>
      </div>
      <div className="messages_container">
        {renderMessageView()}
      </div>
    </div>
  )
}

export default HomePage
