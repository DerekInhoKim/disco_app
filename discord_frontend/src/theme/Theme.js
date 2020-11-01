import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme( {
  gradientBackground: 'linear-gradient(45deg, #192841 30%, #23395d 90%)',
  fontFamily: "",
  stickyPosition: "fixed",
  marginTop : 0,
  navHeight: "100px"
});

const Theme = (props) => {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}

export default Theme;
