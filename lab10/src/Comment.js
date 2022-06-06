import React from 'react';

class Comment extends React.Component {
  

    componentDidMount() {
    }

    render () {
        const comments_length = this.props.comments.length;
        let last_comment = "";
        let comments = 0;
        if (comments_length !== 0) {
            last_comment = this.props.comments[comments_length - 1];
            comments = 1;
        }

        return (
            <div className="comments">
                {comments
                ?
                <p> <b>{last_comment.user.username}</b> {last_comment.text}</p>
                :
                ""}
            </div>
        )

            }
        }

export default Comment;