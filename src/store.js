import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers' // This is importing reducers/index.js

const initialState = {}
const middleware = [thunk]

// This is how you create a store
// The second parameter of compose() is to enable the Dev Redux chrome plugin to analyze the store easily
const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
export default store
