import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'

class Posts extends React.Component {
    componentDidMount () {
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

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    myPosts: PropTypes.array.isRequired,
    newPost: PropTypes.object,
}

// This is being called in the combineReducers() from reducers/index.js
const mapStateToProps = state => ({
    myPosts: state.myPosts.items,
    newPost: state.myPosts.item,
})

// The first parameter of connect is the state that you want to pass to the importing component of this component
export default connect(mapStateToProps, { fetchPosts })(Posts)
