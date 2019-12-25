import React from 'react';
import MyContext from '../lib/MyContext';

class TweetList extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            id: '1',
        }
    }
    

    render() {
        return (
            <MyContext.Consumer>
                {({ tweets }) => (
                <div className="container">
                    {tweets.map(tweet => {
                        return (
                            <div className="tweet">
                            <h6>{tweet.userName}</h6>
                            <h6 className="date">{tweet.date}</h6>
                            <p> {tweet.content} </p>
                            </div>
                        );
                    })}
                </div>
                )}
            </MyContext.Consumer>
        )
    }

}
export default TweetList