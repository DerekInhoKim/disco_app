import {apiUrl} from '../config'

export const LOAD_SERVER = "discord/servers/LOAD";
export const REMOVE_SERVER = "discord/servers/REMOVE"
export const ADD_SERVER = "discord/servers/ADD"
export const SET_CURRENT_SERVER = "discord/servers/SET_CURRENT"

//loadServer must be passed in an array of servers
export const loadServer = (list) => ({ type: LOAD_SERVER, list });
//addServer must be passed in a server
export const addServer = (server) => ({type: ADD_SERVER, server});
//removeServer must be passed in a serverId
export const removeServer = (serverId) => ({type: REMOVE_SERVER, serverId});
//setCurrentServer must be passed in a serverId
export const setCurrentServer = (serverId) => ({type: SET_CURRENT_SERVER, serverId});

export const createServer = (data) => async (dispatch, getState) => {
  const {
    auth: { token },
  } = getState();
  const response = await fetch(`${apiUrl}/servers`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  if(response.ok){
    const server = await response.json()
    const userId = server.userId
    const serverId = server.serverId
    const connectionResponse = await fetch(`${apiUrl}/serverUsers`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({serverId, userId})
    })
    if(connectionResponse.ok){
      dispatch(setCurrentServer(serverId))
      dispatch(getServers())

    }
    return server
  }
}

export const deleteServer = (serverId) => async (dispatch, getState) => {
  const {
    auth: {token},
  } = getState();
  const response = await fetch(`${apiUrl}/servers/${serverId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  if (response.ok) {
    dispatch(removeServer(serverId))
  }
}

export const getServers = () => async(dispatch, getState) => {
  const {
    auth: { token }
  } = getState()
  const userId = localStorage.getItem("USER_ID")
  const response = await fetch(`${apiUrl}/users/${userId}/servers`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if(response.ok) {
    const list = await response.json()
    dispatch(loadServer(list))
  }
}
