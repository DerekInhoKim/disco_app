import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = props => {
  const { isLoggedIn } = props
  if(!isLoggedIn){
    // debugger
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
