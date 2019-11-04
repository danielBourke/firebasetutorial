import React, { Component } from 'react'

 class AddPostForm extends Component {
     state= {
         title: "",
         body: ""
     }
     onTitleChange = (e) => {
         const title = e.target.value;
         this.setState(()=>({title}))
     }
     onBodyChange = (e) => {
        const body = e.target.value;
        this.setState(()=>({body}))
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            title: this.state.title,
            body: this.state.body
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input

                    type="text"
                    placeholder= "title"
                    autoFocus
                    value={this.state.title}
                    onChange={this.onTitleChange}
                    />
                       <input

type="text"
placeholder= "body"
autoFocus
value={this.state.body}
onChange={this.onBodyChange}
/>

<button>submit</button>
                </form>
                
            </div>
        )
    }
}
export default AddPostForm