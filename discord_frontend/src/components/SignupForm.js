import React, {useState} from 'react'
import {apiUrl} from '../config'

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");

  const updateProperty = (callback) => (e) => {
    callback(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    // console.log(JSON.stringify({firstName, lastName, email, password, confirmPassword, userName}))
    const res = await fetch(`${apiUrl}/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({firstName, lastName, email, password, confirmPassword, userName})
    })
    if(res.ok){
      alert("Your account has been succesfully created!")
      window.location.href = "/"
    } else {
      alert("you suck")
    }
  }


  return (
    <div className="signupform-container">
      <h1>Want to Disco?</h1>
      <h2>Enter your DiscoInfo below!</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="signup-input">
          <label htmlFor='firstName'>First Name</label>
        </div>
        <div className="signup-input">
          <input className="form_input" value={firstName} onChange={updateProperty(setFirstName)} type='text' placeholder='Enter First Name' name='firstName' required/>
        </div>
        <div className="signup-input">
          <label htmlFor='lastName'>Last Name</label>
        </div>
        <div className="signup-input">
          <input className="form_input" value={lastName} onChange={updateProperty(setLastName)} type='text' placeholder='Enter Last Name' name='lastName' required/>
        </div>
        <div className="signup-input">
          <label htmlFor='email'>Email</label>
        </div>
        <div className="signup-input">
          <input className="form_input" value={email} onChange={updateProperty(setEmail)} type='email' placeholder='Enter Email Address' name='email' required/>
        </div>
        <div className="signup-input">
          <label htmlFor='userName'>Username</label>
        </div>
        <div className="signup-input">
          <input className="form_input" value={userName} onChange={updateProperty(setUserName)} type='text' placeholder='Enter A Groovy Username' name='userName' required/>
        </div>
        <div className="signup-input">
          <label htmlFor='password'>Password</label>
        </div >
        <div className="signup-input">
          <input className="form_input" value={password} onChange={updateProperty(setPassword)} type='text' placeholder='Password' name='password' required/>
        </div>
        <div className="signup-input">
          <label htmlFor='confirmPassword'>Confirm Password</label>
        </div>
        <div className="signup-input">
          <input className="form_input" value={confirmPassword} onChange={updateProperty(setConfirmPassword)} type='text' placeholder='Confirm Password' name='confirmPassword' required/>
        </div>
        <div className="signupbutton-container">
          <button className="signupbutton" type="submit">Sign Up</button>
        </div>
        <p>Already have an account? </p><a href="/login">Log In</a>
      </form>
    </div>
  )
}

export default SignUpForm
