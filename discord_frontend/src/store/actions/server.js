import {apiUrl} from '../config'

export const getServers = async (token) => {
  const userId = localStorage.getItem("USER_ID")
  const response = await fetch(`${apiUrl}/users/${userId}/servers`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if(response.ok) {
    return await response.json()
  } else {
    return []
  }
}
