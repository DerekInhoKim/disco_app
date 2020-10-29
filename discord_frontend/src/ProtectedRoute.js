import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = (props) => {
  return (<Route render={() => {
    // debugger
    return (
      props.needLogin === true
      ? <Redirect to='/login' />
      : props.children
    )
  }}/>)
}

export default ProtectedRoute
