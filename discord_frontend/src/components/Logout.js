import React from 'react'
import { connect } from 'react-redux'
import { thunks } from '../store/auth'

function Logout(props){
  return (
    <div>
      <button onClick={props.logout}>Log out</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(thunks.logout())
  }
}

export default connect(null, mapDispatchToProps)(Logout)
