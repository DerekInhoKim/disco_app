import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
// import { getToken } from '../store/actions/auth'
import { login } from '../store/actions/auth';
import { useDispatch } from "react-redux";

const LoginForm = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
  // const {token, setToken} = useContext(UserContext)

  const handleSubmit = async (e) => {
    // debugger
    e.preventDefault();
    // console.log("here")
    dispatch(login(email, password))
  }

  const updateEmail = (e) => {
    setEmail(e.target.value)
  }

  const updatePassword = (e) => {
    setPassword(e.target.value)
  }

  const token = window.localStorage.getItem("USER_TOKEN")

  if(token){
    return <Redirect to="/"/>
  }

  return (
  <div className="login_form_container">
    <form className="login_form" onSubmit={handleSubmit}>
      <h3>Log in to Disco</h3>
      <input className="form_input" onChange={updateEmail} value={email} type="email" placeholder="Email" required />
      <input className="form_input" onChange={updatePassword} value={password} type="password" placeholder="Password" required />
      <button className="form_button" type="submit">Log in</button>
      <p>Don't have an account? </p><a href="/signup">Sign up</a>
    </form>
  </div>
  )
}

export default LoginForm
