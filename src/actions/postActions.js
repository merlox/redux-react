import { FETCH_POSTS, NEW_POST } from './types'

// This is calling a function and another function with the parameter disatch inside
export const fetchPosts = () => async dispatch => {
    let result = await fetch('https://jsonplaceholder.typicode.com/posts')
    let payload = await result.json()
    // Instead of this.setState() we use dispatch()
    dispatch({
        type: FETCH_POSTS,
        payload
    })
}

export const createPost = (postData) => async dispatch => {
    let result = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData),
    })
    let payload = await result.json()

    dispatch({
        type: NEW_POST,
        payload
    })
}
