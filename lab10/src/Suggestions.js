import React from 'react';
import Suggestion from './Suggestion';
import {getHeaders} from './utils';

class Suggestions extends React.Component {
  
    constructor(props) {
        super(props);
        // initialization code here

        this.state = {
            suggestions:[]
        }
        this.getSuggestionsFromServer()
    }

    componentDidMount() {
        // fetch posts and then set the state...
    }

    getSuggestionsFromServer () {
        fetch('/api/suggestions', {
            headers: getHeaders()
        }).then(response => response.json())
        .then(data => {
            console.log("Suggestions: ",data);
            this.setState({
                suggestions: data
            })
        })
    }

    render () {
        return (<div className="suggestions">
                    <p className="suggestion-text">Suggestions for you</p>
                    {this.state.suggestions.map(suggestion => {
                        return (
                            <Suggestion key={'suggestion-' + suggestion.id} model={suggestion} followId={suggestion.id} />
                        )
                    })
                    }
                </div>
        )
    }
}

export default Suggestions;