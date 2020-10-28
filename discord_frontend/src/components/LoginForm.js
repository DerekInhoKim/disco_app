import React, {useState} from 'react';
import {getToken} from '../store/auth'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions, thunks } from '../store/auth'

// const LoginPanel = ({token, setToken}) => {
//   console.log(token)
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const token = await getToken(email, password);
//     setToken(token);
//   }

//   const updateEmail = (e) => {
//     setEmail(e.target.value)
//   }

//   const updatePassword = (e) => {
//     setPassword(e.target.value)
//   }

//   if (token) {
//     return <Redirect to="/"/>;
//   }
//   return (
//     <main>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Email"
//           value={email}
//           onChange={updateEmail}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={updatePassword}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </main>
//   )
// }

// export default LoginPanel

const LoginForm = (props) => {
  const token = localStorage.getItem('USER_TOKEN')
  if (token) {
    return <Redirect to="/" />;
  }
  return(
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
