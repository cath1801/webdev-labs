import React from 'react';
import {getHeaders} from './utils';

class Suggestion extends React.Component {
  
    constructor(props) {
        super(props);

        this.toggleFollow = this.toggleFollow.bind(this);
        this.createFollow = this.createFollow.bind(this);
        this.removeFollow = this.removeFollow.bind(this);

        // initialization code here
        this.state = {
            suggestion: props.model,
            followed: "follow", 
            request_id: 0
        }
    }

    componentDidMount() {
        // fetch posts and then set the state...
    }

    toggleFollow () {
        if (this.state.followed === "unfollow") {
            this.removeFollow();
            // console.log("remove follower")
        } else {
            this.createFollow();
        }
    }

    createFollow () {
        //fetch POST request: /api/posts/likes
        const url = 'api/following';
        const postData = {
            user_id: this.state.suggestion.id
        }
        // console.log(postData)
        console.log('create follower', url);
        fetch(url, {
            headers: getHeaders(),
            method: 'POST',
            body: JSON.stringify(postData)
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                followed: "unfollow",
                request_id: data.id
            })
        })
    }

    removeFollow () {
        const url = 'api/following/' + this.state.request_id;
        console.log('remove follower', url);
        fetch(url, {
            headers: getHeaders(),
            method: 'DELETE'
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                followed: "follow"
            })
        })
    }
    
    render () {
        const suggestion = this.state.suggestion;
        const followed = this.state.followed;
        return (
            <section className="suggestion">
                <img src={suggestion.thumb_url} alt="profile-pic"/>
                <div>
                    <p className="username">{suggestion.username}</p>
                    <p className="suggestion-text">suggested for you</p>
                </div>
                <div>
                    <button 
                        className="follow"
                        onClick={this.toggleFollow}>{followed}</button>
                </div>
            </section>
                )
            }
        }

export default Suggestion;