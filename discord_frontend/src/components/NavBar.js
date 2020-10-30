import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { AppBar } from "@material-ui/core"
import Logout from './Logout'


const useStyles = makeStyles((theme) => ({
  navbar: {
    fontFamily: theme.fontFamily,
    background: theme.gradientBackground
  },
  title: {
    fontSize: '14pt'
  }
}))

const NavBar = (props) => {
  const token = localStorage.getItem('USER_TOKEN')
  const classes = useStyles()
  if(!token){
    return (
      <AppBar position="static" className={classes.navbar}>
        <div className="navbar-header-container">
          <h1>DomerCord</h1>
        </div>
      </AppBar>
    )
  } else {
    return (
      <AppBar position="static" className={classes.navbar}>
        <div className="navbar-header-container">
          <h1>Disco</h1>
        </div>
        <Logout />
      </AppBar>
    )
  }

}

export default NavBar
