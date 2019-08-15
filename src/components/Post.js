import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'

class Post extends React.Component {
    componentDidMount() {
        this.props.fetchPosts()
    }
    render () {
        const postHtml = this.props.myPosts.map(post => (
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

// This is being called in the combineReducers() from reducers/index.js
const mapStateToProps = state => ({
    myPosts: state.myPosts.items
})

// The first parameter of connect is the state that you want to pass to the importing component of this component
export default connect(mapStateToProps, { fetchPosts })(Post)
