import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWithContext from './AppWithContext';
// import { Provider } from 'react-redux'
// import configureStore from './store/configureStore'
// import auth from './store/auth'

// let token = window.localStorage.getItem('USER_TOKEN')

// if(!token) {
//   token = ""
// }

// const store = configureStore({auth: { token }})

ReactDOM.render(
  <React.StrictMode>
    <AppWithContext />
  </React.StrictMode>,
  document.getElementById('root')
);
