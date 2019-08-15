import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers' // This is importing reducers/index.js

const initialState = {}
const middleware = [thunk]

// This is how you create a store
const store = createStore(rootReducer, initialState, applyMiddleware(...middleware))
export default store
