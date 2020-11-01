import React from 'react'
import { useDispatch } from "react-redux";
import { logout } from '../store/actions/auth'

const Logout = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(logout())
  }

  return (
      <div onClick={handleClick} className="logout-button-container">Log out</div>
  )
}

export default Logout
