import React from 'react';
import {getHeaders} from './utils';

class AddComment extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            postId: this.props.postId
        }
        this.commentInputRef = React.createRef();
        this.requeryPost = this.props.refreshPost.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.sendComment = this.sendComment.bind(this);
        // this.submitOnEnter = this.submitOnEnter.bind(this);
    }

    handleChange(ev) {
        this.setState({value: ev.target.value});
    }

    submitOnEnter(ev) {
        if (ev.key === 'Enter') {
            console.log('do validate');
          }
    }
    
    sendComment(ev) {
        ev.preventDefault();
        const postData = {
            "post_id": this.state.postId,
            "text": ev.target.value
        };
        
        fetch('/api/comments', {
                method: "POST",
                headers: getHeaders(),
                body: JSON.stringify(postData)
            })
            .then(response => response.json())
            .then(data => {
                this.requeryPost();
                this.setState({value: ''});
                this.commentInputRef.current.focus();
            });
    }
    render () {
        return (
            <form onSubmit={this.handleSubmit} className="add-comment">
                <div className="input-holder">
                    <input className="comment-textbox" 
                        aria-label="Add a comment" 
                        placeholder="Add a comment..."
                        ref={this.commentInputRef} 
                        value={this.state.value} 
                        onChange={this.handleChange}
                        onKeyDown={this.submitOnEnter} />
                </div>
                <button className="link">Post</button>
            </form>
        )
    }
}

export default AddComment;