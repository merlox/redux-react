import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { createPost } from '../actions/postActions'

class PostForm extends React.Component {
    constructor () {
        super()
        this.state = {
            title: '',
            body: ''
        }
    }

    onChange (e) {
        this.setState({[e.target.name]: e.target.value})
    }

    async onSubmit (e) {
        e.preventDefault()
        const postData = {
            title: this.state.title,
            body: this.state.body,
        }
        this.props.createPost(postData)
    }

    render () {
        return (
            <div>
                <h2>Add a new post</h2>
                <form onSubmit={e => this.onSubmit(e)}>
                    <div>
                        <p>Title:</p>
                        <input type="text" name="title" onChange={e => this.onChange(e)}/>
                    </div>
                    <div>
                        <p>Body:</p>
                        <textarea cols="30" rows="10" name="body" onChange={e => this.onChange(e)}></textarea>
                    </div>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired,
}

export default connect(null, { createPost })(PostForm)
