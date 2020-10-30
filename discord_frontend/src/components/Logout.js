import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import UserContext from '../UserContext'


const Logout = () => {
  const { token, setToken } = useContext(UserContext)

  const handleClick = () => {
    window.localStorage.setItem("USER_TOKEN", "")
    window.localStorage.setItem("USER_ID", "")
    setToken('');
  }

  if(!token){
    return <Redirect to="/login"/>
  }

  return (
    <div id="logout-button-container">
      <button onClick={handleClick}>Log out</button>
    </div>
  )
}

export default Logout
