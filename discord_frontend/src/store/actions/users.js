import {apiUrl} from '../../config'

export const SET_USER = 'SET_USER';
export const REMOVE_USER= 'REMOVE_USER'

export const setUser = (user) => {
    return ({
        type: SET_USER,
        user
    });
}

export const removeUser = () => {
    return ({
        type: REMOVE_USER,
    });
}

export const setUpUser = (userId) => async(dispatch, getState) => {
  const {
    auth: {token}
  } = getState()
  const response = await fetch(`${apiUrl}/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  const user = await response.json()
  dispatch(setUser(user))
  // console.log(user)
  // debugger
}

export const getUser = (userId) => async(dispatch, getState) => {
  const {
    auth: {token}
  } = getState()
  const response = await fetch(`${apiUrl}/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  const user = await response.json()
  return user
}
