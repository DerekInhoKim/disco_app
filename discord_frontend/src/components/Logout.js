import React from 'react'
import { useDispatch } from "react-redux";
import { logout } from '../store/actions/auth'



const Logout = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(logout())

  }


  return (
    <div id="logout-button-container">
      <button onClick={handleClick}>Log out</button>
    </div>
  )
}

export default Logout
