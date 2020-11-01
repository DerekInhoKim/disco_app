import { Avatar, StylesProvider, Tooltip } from '@material-ui/core';
import React, {useEffect} from 'react';
import { useDispatch, userDispatch, useSelector } from 'react-redux'
import {getServers, setCurrentServer } from '../store/actions/server'
import discoball from '../images/discoreal.png'

const Server = () => {
  // const currentUser = useSelector(state => state.users.user)
  const currentUser = window.localStorage.getItem("USER_ID")
  const servers = useSelector(state => state.servers.servers)
  // const currentChannel = useSelector(state => state.channels.currentChannel)
  const dispatch = useDispatch()

  //Fetch list of channels for a server
  useEffect(() => {
    //Dispatches a request to recieve all the servers for the current user using their id.
    dispatch(getServers(currentUser))
    //Only runs once, when the Server is called is called
  }, [])

  // debugger;
  const joinServer = (serverId) => {
    dispatch(setCurrentServer(serverId))
  }

  // console.log(channels)
  return servers.map((server) => {
    // debugger
    return (
      <Tooltip
      key={server.Server.serverName}
      placement="bottom"
      title={server.Server.serverName}>
        <Avatar
        // variant="rounded"
        src={discoball}
        alt="Discoball"
        className="avatar_button"
        // alt={server.Server.serverName}
        key={server.Server.id}
        onClick={() => joinServer(server.Server.id)}
        >
          {/* {`Server: ${server.Server.serverName}`} */}
        </Avatar>
      </Tooltip>
    )
  })
}

export default Server
