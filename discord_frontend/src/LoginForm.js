import React from 'react';
import { connect } from 'react-redux'
import { actions, thunks } from './store/auth'

const LoginForm = props =>
  <form>
    <div>
      <input onChange={props.updateEmailValue} value={props.email} type="email" placeholder="Email" required />
    </div>
    <div>
      <input onChange={props.updatePasswordValue} value={props.password} type="password" placeholder="Password" required />
    </div>
    <div>
      <button onClick={props.tryLogin}>Log in</button>
    </div>
  </form>
;

const mapStatetoProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    updateEmailValue: event => dispatch(actions.updateEmailValue(event.target.value)),
    updatePasswordValue: event => dispatch(actions.updatePasswordValue(event.target.value)),
    tryLogin: () => dispatch(thunks.tryLogin()),
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(LoginForm);
