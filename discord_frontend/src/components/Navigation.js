import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Logout from './Logout'

function Navigation() {
  return (
    <BrowserRouter>
      <Logout />
    </BrowserRouter>
  )
}

export default Navigation
