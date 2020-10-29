import React, { useState, useEffect } from 'react';
import App from './App';

const AppWithContext = (props) => {
  const [token, setToken] = useState('')

  useEffect(() => {
    (async () => {
      const userToken = window.localStorage.getItem('USER_TOKEN');
      if(token) {
        setToken(userToken);
      }
    })()
  }, [])

  const value = {
    token,
    setToken
  }

  return (
    // <UserContext.Provider value={value}>
      <App />
    // {/* </UserContext.Provider> */}
  )
}

export default AppWithContext
