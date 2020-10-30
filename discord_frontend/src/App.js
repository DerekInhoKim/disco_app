import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import HomePage from './components/HomePage'
import LoginForm from './components/LoginForm'
// import Navigation from './components/Navigation'
import Theme from './theme/Theme'
import NavBar from './components/NavBar'
import { PrivateRoute } from './ProtectedRoute'
import SignUpForm from './components/SignupForm';
import { loadToken } from './store/actions/auth'
import { useDispatch, useSelector } from 'react-redux';

const App = ({needLogin, loadToken}) => {
  const [loaded, setLoaded] = useState(false)


  useEffect(() => {
    setLoaded(true);
    loadToken();
  }, [loadToken]);


  if(!loaded) {
    return null;
  }

  // debugger
  return (
    <BrowserRouter >
      <Theme>
        <NavBar />
      </Theme>
      <Switch>
        <PrivateRoute needLogin={needLogin} path="/" exact={true} component={HomePage} />
        <Route path="/login" exact={true} component={LoginForm} />
        <Route path="/signup" exact={true} component={SignUpForm}/>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

const AppContainer = () => {
  const needLogin = useSelector((state) => !state.auth.token);
  const dispatch = useDispatch();
  return <App needLogin={needLogin} loadToken={() => dispatch(loadToken())} />;
};

export default AppContainer;
