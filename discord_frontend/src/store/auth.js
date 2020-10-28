const UPDATE_EMAIL_VALUE = 'discord/auth/UPDATE_EMAIL_VALUE'
const UPDATE_PASSWORD_VALUE = 'discord/auth/UPDATE_PASSWORD_VALUE'
const UPDATE_TOKEN_VALUE = 'discord/auth/UPDATE_TOKEN_VALUE'

const updateEmailValue = value => ({type: UPDATE_EMAIL_VALUE, value})
const updatePasswordValue = value => ({type: UPDATE_PASSWORD_VALUE, value})
const updateTokenValue = value => ({type: UPDATE_TOKEN_VALUE, value})

export const actions = {
  updateEmailValue,
  updatePasswordValue,
  updateTokenValue
}
//Thunk to make a fetch call to see if our user exists.
const tryLogin = () => {
  return async (dispatch, getState) => {
    const { auth: {email, password} } = getState();
    const response = await fetch('http://localhost:8000/api/session', {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    });
    try {
      if(response.status >= 200 && response.status < 400) {
        const data = await response.json();
        console.log("dataToken", data.token)
        dispatch(updateTokenValue(data.token))
        window.localStorage.setItem('USER_TOKEN', data.token)
      } else {
        console.error('Bad response')
      }
    } catch (e) {
      console.error(e)
    }
  }
}

export const thunks = {
  tryLogin
}

const initialState = {
  token: "",
};

function reducer(state = initialState, action) {
  switch(action.type){
    case UPDATE_EMAIL_VALUE: {
      return {
        ...state,
        email: action.value
      }
    }
    case UPDATE_PASSWORD_VALUE: {
      return {
        ...state,
        password: action.value
      }
    }
    case UPDATE_TOKEN_VALUE: {
      return {
        ...state,
        token: action.value
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;
