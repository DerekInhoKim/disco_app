import {createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import auth from './reducers/auth'
import channels from './reducers/channels'
import messages from './reducers/messages'
import users from './reducers/users'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  auth,
  channels,
  messages,
  users
})

const configureStore = (initialState) => {
  return createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  )
}

export default configureStore
