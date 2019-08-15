import React from 'react'

export default class PostForm extends React.Component {
    constructor () {
        super()
        this.state = {
            title: '',
            body: ''
        }
    }

    onChange (e) {
        this.setState({[e.target.name]: e.target.value}, () => {console.log(this.state)})
    }

    async onSubmit (e) {
        e.preventDefault()
        const postData = {
            title: this.state.title,
            body: this.state.body,
        }
        let result = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData),
        })
        result = await result.json()
        console.log(result)
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
