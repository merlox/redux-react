import React, { Component } from 'react'
import { render } from 'react-dom'
import Post from './components/Post'
import PostForm from './components/PostForm'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

// This is how you create a store
const store = createStore(() => [], {}, applyMiddleware())

class App extends Component {
    constructor() { super() }
    render() {
        return (
            <Provider store={store}>
                <div>
                    <h1>Welcome to the Redux React project</h1>
                    <PostForm />
                    <hr />
                    <Post />
                </div>
            </Provider>
        )
    }
}

render(<App />, document.querySelector("#root"));
