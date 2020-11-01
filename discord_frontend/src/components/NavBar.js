import React from 'react'
import {useSelector} from 'react-redux'
import { makeStyles } from "@material-ui/core/styles"
import { AppBar } from "@material-ui/core"
import Logout from './Logout'


const useStyles = makeStyles((theme) => ({
  navbar: {
    fontFamily: theme.fontFamily,
    background: theme.gradientBackground,
    position: theme.stickyPosition,
    // margin: theme.marginTop,
    height: theme.navHeight,
    'margin-left': '50px'

  }
}))

const NavBar = (props) => {
  const token = localStorage.getItem('USER_TOKEN')
  const classes = useStyles()

  if(!token){
    return (
      <AppBar className={"navbar-container"}>
        <div className="navbar-header-container">
          <h1>Disco</h1>
        </div>
      </AppBar>
    )
  } else {
    return (
      <AppBar className={"navbar-container"}>
        <div className="navbar-header-container">
          <h1>Disco</h1>
        </div>
        <Logout/>
      </AppBar>
    )
  }

}

export default NavBar
