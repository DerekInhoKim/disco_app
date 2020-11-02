import React from 'react'
import {useSelector} from 'react-redux'
import { makeStyles } from "@material-ui/core/styles"
// import { AppBar } from "@material-ui/core"
import Logout from './Logout'
import disco from '../images/favicon-32x32.png'

const user = window.localStorage.getItem('USER_ID')

const redirectUser = e => {
  // console.log("imhere")
  window.location.href = "/"
}

const NavBar = (props) => {
  const token = localStorage.getItem('USER_TOKEN')
  // const classes = useStyles()


  if(!token){
    return (
      <div className="navbar_container">
        <div className="navbar">
          <div className="navbar-header-container" onClick={redirectUser}>
            <img src={disco} className="disco-ball"></img>
            <div className ="logo" href="/">Disco</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="navbar_container">
        <div className="navbar">
          <div className="navbar-header-container" onClick={redirectUser}>
            <img src={disco} className="disco-ball"></img>
            <div className ="logo">Disco</div>
          </div>
          <p className="welcome">{`Welcome to the Disco User #${user}`}</p>
          <Logout/>
        </div>
      </div>
    )
  }

}

export default NavBar
