import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Logout from './Logout'

function Navigation() {
  const token = localStorage.getItem('USER_TOKEN')
  if (!token) {
    return (
      <div/>
    )
  }

  return (
    <BrowserRouter>
      <Logout />
    </BrowserRouter>
  )
}

export default Navigation
