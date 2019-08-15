import React from 'react'

export default class Post extends React.Component {
    constructor () {
        super()
        this.state = {
            posts: []
        }
    }
    async componentDidMount () {
        let result = await fetch('https://jsonplaceholder.typicode.com/posts')
        result = await result.json()
        this.setState({posts: result}, () => console.log(this.state))
    }
    render () {
        const postHtml = this.state.posts.map(post => (
            <div style={{width: '50%', margin: 'auto'}} key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h2>The post component</h2>
                <div>
                    {postHtml}
                </div>
            </div>
        )
    }
}
