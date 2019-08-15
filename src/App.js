import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
    constructor() { super() }
    render() {
        return (
            <div>Sup</div>
        )
    }
}

render(<App />, document.querySelector("#root"));
