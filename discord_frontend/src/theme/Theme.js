import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme( {
  gradientBackground: 'linear-gradient(45deg, #3c1361 50%, #192841 70%)',
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  fontFamily: "Uni Sans",
});

const Theme = (props) => {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}

export default Theme;
