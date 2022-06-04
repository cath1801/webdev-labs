import React from 'react';

class Profile extends React.Component {
  
    constructor(props) {
        super(props);
        console.log('Profile props: ', props)
        // initialization code here
    }

    componentDidMount() {
        // fetch posts and then set the state...
    }

    render () {
        return (<header>
                    <div>
                        <img src={this.props.user.thumb_url} className="pic" alt="profile pic" />
                        <h2>{this.props.user.username}</h2>
                    </div>
                </header>
        )
    }
}

export default Profile;