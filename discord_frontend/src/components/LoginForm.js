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
    <form className="login_form" onSubmit={handleSubmit}>
    <div>
      <input onChange={updateEmail} value={email} type="email" placeholder="Email" required />
    </div>
    <div>
      <input onChange={updatePassword} value={password} type="password" placeholder="Password" required />
    </div>
    <div>
      <button type="submit">Log in</button>
    </div>
    <div>
      <p>Don't have an account? </p><a href="/signup">Sign up</a>
    </div>
  </form>
  )
}

export default LoginForm
