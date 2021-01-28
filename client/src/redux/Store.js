import {createStore,applyMiddleware,compose} from 'redux'
import {userReducer} from './Reducers/userReducer'
import thunk from 'redux-thunk'

const middleware=[thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
