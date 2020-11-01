import React from 'react'

const SignUpForm = () => {
  return (
    <>
      <h1>Want to Disco?</h1>
      <h2>Enter your DiscoInfo below!</h2>
    <form className="signup-form">
      <div>
        <label for='firstName'>First Name</label>
      </div>
      <div>
        <input type='text' placeholder='Enter First Name' name='firstName' required/>
      </div>
      <div>
        <label for='lastName'>Last Name</label>
      </div>
      <div>
        <input type='text' placeholder='Enter Last Name' name='lastName' required/>
      </div>
      <div>
        <label for='email'>Email</label>
      </div>
      <div>
        <input type='email' placeholder='Enter Email Address' name='email' required/>
      </div>
      <div>
        <label for='userName'>Username</label>
      </div>
      <div>
        <input type='text' placeholder='Enter A Groovy Username' name='userName' required/>
      </div>
      <div>
        <label for='password'>Password</label>
      </div>
      <div>
        <input type='text' placeholder='Password' name='password' required/>
      </div>
      <div>
        <label for='confirmPassword'>Confirm Password</label>
      </div>
      <div>
        <input type='text' placeholder='Confirm Password' name='confirmPassword' required/>
      </div>
      <button type="submit">Sign Up</button>
    </form>
    <div>
        <p>Already have an account? </p><a href="/login">Log In</a>
      </div>
    </>
  )
}

export default SignUpForm
