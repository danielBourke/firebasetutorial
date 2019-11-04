import React, { Component } from 'react'
import { connect } from 'react-redux';
import AddPostForm from "./AddPostForm"
import { startAddPost } from '../actions'
 class AddPost extends Component {
     onSubmit = (post) => {
         this.props.startAddPost(post)
         console.log("post added")
     }
    render() {
        return (
            <div>
                <h1>Add post</h1>
                <AddPostForm
                    onSubmit = {this.onSubmit}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddPost: (post) => dispatch(startAddPost(post))
})

export default  connect(null, mapDispatchToProps)(AddPost)