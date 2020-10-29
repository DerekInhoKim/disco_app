import React, { useEffect, useContext } from 'react';
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import HomePage from './components/HomePage'
import LoginFormRefactored from './components/LoginFormRefactored'
// import Navigation from './components/Navigation'
import Theme from './theme/Theme'
import NavBar from './components/NavBar'
import ProtectedRoute from './ProtectedRoute'
import SignUpForm from './components/SignupForm';
import UserContext from './UserContext';

const AppRefactored = () => {
  const {token, setToken} = useContext(UserContext)

  useEffect(() => {
    (async() => {
      const userToken = window.localStorage.getItem("USER_TOKEN")
      if(userToken){
        setToken(userToken)
      }
    })()
  }, [setToken])

  const needLogin = !token

  // debugger
  return (
    <BrowserRouter >
      <Theme>
        <NavBar />
      </Theme>
      <Switch>
        <ProtectedRoute needLogin={needLogin} path="/" exact={true}><HomePage /></ProtectedRoute>
        <Route path="/signup" exact={true} component={SignUpForm}/>
        <Route path="/login" exact={true} component={LoginFormRefactored} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRefactored;
