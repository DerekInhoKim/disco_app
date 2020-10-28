import React from 'react';
import { Route, Switch } from 'react-router'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import HomePage from './HomePage'
import LoginForm from './LoginForm'
import ProtectedRoute from './ProtectedRoute'

function App(props) {
  // debugger;
  return (
    <BrowserRouter >
      {/* <Navigation /> */}
      <Switch>
        <ProtectedRoute isLoggedIn={props.token} path="/" exact={true} component={HomePage} />
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
