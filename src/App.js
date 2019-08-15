import React, { Component } from 'react'
import { render } from 'react-dom'
import Post from './components/Post'
import PostForm from './components/PostForm'
import { Provider } from 'react-redux'
import store from './store'

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
