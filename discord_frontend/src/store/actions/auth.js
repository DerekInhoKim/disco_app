import { apiUrl } from '../../config'

export const TOKEN_KEY = "USER_TOKEN"
export const SET_TOKEN = "discord/authentication/SET_TOKEN";
export const REMOVE_TOKEN = "discord/authentication/REMOVE_TOKEN";

export const removeToken = (token) => ({ type: REMOVE_TOKEN });
export const setToken = (token) => ({ type: SET_TOKEN, token });

export const login = (email, password) => async (dispatch) => {
  const response = await fetch(`${apiUrl}/session`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const { token, user: { id } } = await response.json();
    window.localStorage.setItem(TOKEN_KEY, token);
    window.localStorage.setItem("USER_ID", id)
    // debugger
    dispatch(setToken(token));
  }
};

export const loadToken = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN_KEY);
  if (token) {
    dispatch(setToken(token));
  }
};

export const logout = () => async (dispatch, getState) => {
  const {
    auth: { token },
  } = getState();
  const response = await fetch(`${apiUrl}/session`, {
    method: "delete",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (response.ok) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.removeItem("USER_ID");
    dispatch(removeToken());
  }
};
