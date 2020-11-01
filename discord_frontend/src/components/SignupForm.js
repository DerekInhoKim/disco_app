import React from 'react'

const SignUpForm = () => {
  return (
    <div className="signupform-container">
      <h1>Want to Disco?</h1>
      <h2>Enter your DiscoInfo below!</h2>
      <form className="signup-form">
        <div className="signup-input">
          <label for='firstName'>First Name</label>
        </div>
        <div className="signup-input">
          <input className="form_input" type='text' placeholder='Enter First Name' name='firstName' required/>
        </div>
        <div className="signup-input">
          <label for='lastName'>Last Name</label>
        </div>
        <div className="signup-input">
          <input className="form_input" type='text' placeholder='Enter Last Name' name='lastName' required/>
        </div>
        <div className="signup-input">
          <label for='email'>Email</label>
        </div>
        <div className="signup-input">
          <input className="form_input" type='email' placeholder='Enter Email Address' name='email' required/>
        </div>
        <div className="signup-input">
          <label for='userName'>Username</label>
        </div>
        <div className="signup-input">
          <input className="form_input" type='text' placeholder='Enter A Groovy Username' name='userName' required/>
        </div>
        <div className="signup-input">
          <label for='password'>Password</label>
        </div >
        <div className="signup-input">
          <input className="form_input" type='text' placeholder='Password' name='password' required/>
        </div>
        <div className="signup-input">
          <label for='confirmPassword'>Confirm Password</label>
        </div>
        <div className="signup-input">
          <input className="form_input" type='text' placeholder='Confirm Password' name='confirmPassword' required/>
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
