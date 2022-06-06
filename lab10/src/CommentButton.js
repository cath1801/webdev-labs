import React from 'react';

class CommentButton extends React.Component {

    componentDidMount() {

    }

    render () {
        const length = this.props.length;
        return ( 
                <div className="comment-link">
                    {
                        length 
                        ? 
                        <button className="link">View all {length} comments</button>
                        :
                        ""
                    }
                </div>
        )
            }
        }

export default CommentButton;