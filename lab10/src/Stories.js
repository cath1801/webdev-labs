import React from 'react';
import {getHeaders} from './utils';

class Stories extends React.Component {
  
    constructor(props) {
        super(props);
        // initialization code here
        this.state = {
            stories:[]
        }
        this.getStoriesFromServer()
    }

    componentDidMount() {
        // fetch posts and then set the state...
    }

    getStoriesFromServer () {
        fetch('/api/stories', {
            headers: getHeaders()
        }).then(response => response.json())
        .then(data => {
            console.log("Stories: ",data);
            this.setState({
                stories: data
            })
        })
    }


    render () { 
        return (
            <header className="stories"> 
                {this.state.stories.map(story => {
                    return (
                        <div key={'story-' + story.id}>
                            <img src={story.user.thumb_url} className="pic" alt="profile pic"/>
                            <p>{story.user.username}</p>
                        </div>
                    )
                }
                )}
            </header>
        )
    }
}

export default Stories;