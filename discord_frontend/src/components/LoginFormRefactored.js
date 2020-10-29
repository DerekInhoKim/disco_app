import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom'
// import { connect } from 'react-redux'
import { getToken } from '../store/auth'
import UserContext from '../UserContext';


const LoginFormRefactored = (props) => {
  const [email, setEmail] = useState('')
  // console.log(email)
  const [password, setpassword] = useState('')
  const {token, setToken} = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await getToken(email, password);
    setToken(token)
  }

  const updateEmail = (e) => {
    setEmail(e.target.value)
  }

  const updatePassword = (e) => {
    setpassword(e.target.value)
  }

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

export default LoginFormRefactored
