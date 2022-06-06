import React from 'react';
import LikeButton from './LikeButton';
import BookmarkButton from './BookmarkButton';
import Comment from './Comment';
import CommentButton from './CommentButton';
import AddComment from './AddComment';
import {getHeaders} from './utils';

class Post extends React.Component {
  
    constructor(props) {
        super(props);
        // initialization code here
        this.state = {
            post: props.model
        }
        this.refreshPostDataFromServer = this.refreshPostDataFromServer.bind(this);
    }

    componentDidMount() {
        // fetch posts and then set the state...
    }
    
    refreshPostDataFromServer() {
        // refetch the post
        const url = 'api/posts/' + this.state.post.id;
        fetch(url, {
            headers: getHeaders()
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                post: data
            })
        })
    }

    render () {
        const post = this.state.post;

        return (
            <div className="card">
                <img src={post.image_url} />
                <LikeButton likeId={post.current_user_like_id}
                            postId={post.id}
                            refreshPost={this.refreshPostDataFromServer}/>
                <BookmarkButton bookmarkId={post.current_user_bookmark_id}
                                postId={post.id}
                                refreshPost={this.refreshPostDataFromServer}/>
                <span><p><b>{post.user.username}</b> {post.caption}</p></span>
                <CommentButton length={post.comments.length}/>
                <Comment comments={post.comments}/>
                <AddComment refreshPost={this.refreshPostDataFromServer} postId={post.id}/>
            </div>
                )
            }
        }

export default Post;