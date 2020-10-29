import React from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions, thunks } from '../store/auth'


const LoginForm = (props) => {
  const token = localStorage.getItem('USER_TOKEN')
  if (token) {
    return <Redirect to="/" />;
  }
  return(
    <form className="login_form">
      <div>
        <input onChange={props.updateEmailValue} value={props.email} type="email" placeholder="Email" required />
      </div>
      <div>
        <input onChange={props.updatePasswordValue} value={props.password} type="password" placeholder="Password" required />
      </div>
      <div>
        <button onClick={props.tryLogin}>Log in</button>
      </div>
      <div>
        <p>Don't have an account? </p><a href="/signup">Sign up</a>
      </div>
    </form>
  )
}

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
