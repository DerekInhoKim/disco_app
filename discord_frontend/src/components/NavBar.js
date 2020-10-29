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
        <h1>SimpCord</h1>
      </AppBar>
    )
  } else {
    return (
      <AppBar position="static" className={classes.navbar}>
        <h1>SimpCord</h1>
        <Logout />
      </AppBar>
    )
  }

}

export default NavBar
