import { apiUrl } from '../config'

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
export const tryLogin = () => {
  return async (dispatch, getState) => {
    const { auth: {email, password} } = getState();
    // debugger;
    const response = await fetch(`${apiUrl}/session`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    });
      //debugger won't be hit
      debugger;
      if(response.ok) {
        const data = await response.json();
        dispatch(updateTokenValue(data.token))
        window.localStorage.setItem('USER_TOKEN', data.token)
      } else {
        console.error('Bad response')
      }
  }
}

// export const getToken = async (email, password) => {
//   const response = await fetch('http://localhost:8000/session', {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ email, password }),
//   });

//   if (response.ok) {
//     const { token } = await response.json();
//     window.localStorage.setItem("token", token);
//     return token;
//   }
// };


export const logout = () => {
  return async (dispatch, getState) => {
    const { auth: { token } } = getState();
    const response = await fetch(`${apiUrl}/session`, {
      method: 'delete',
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status >= 200 && response.status < 400) {
      window.localStorage.removeItem('USER_TOKEN');
      dispatch(updateTokenValue(null));
    }
  }

}

export const thunks = {
  tryLogin,
  logout
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
