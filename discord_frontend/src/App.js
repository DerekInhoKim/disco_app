import React from 'react';
import { Route, Switch } from 'react-router'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import HomePage from './components/HomePage'
import LoginForm from './components/LoginForm'
// import Navigation from './components/Navigation'
import Theme from './theme/Theme'
import NavBar from './components/NavBar'
import ProtectedRoute from './ProtectedRoute'
import SignUpForm from './components/SignupForm';

function App(props) {
  return (
    <BrowserRouter >
      {/* <Navigation /> */}
      <Theme>
        <NavBar />
      </Theme>
      <Switch>
        <ProtectedRoute isLoggedIn={props.token} path="/" exact={true} component={HomePage} />
        <Route path="/signup" exact={true} component={SignUpForm}/>
        <Route path="/login" exact={true} component={LoginForm} />
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
  }
}

export default connect(mapStateToProps)(App);
