import {apiUrl} from '../../config'
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SET_MESSAGES = 'SET_MESSAGES';

export const addMessage = (message) => {
    return ({
        type: ADD_MESSAGE,
        message
    });
}

export const setMessages = (messages, channel) => {
    return ({
        type: SET_MESSAGES,
        messages,
        channel
    });
}

export const getMessages = (channelId) => async (dispatch, getState) => {
  const {
    auth: { token },
  } = getState();
  const response = await fetch(`${apiUrl}/channels/${channelId}/messages`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
  })
  if(!response.ok) {
    throw new Error ("Messages were not recieved")
  }
  const channel = await response.json()
  dispatch(setMessages(channel.Messages, channel))

}
