import React from 'react';

class TweetList extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            id: '1',
        }
    }
    

    render() {
        let {tweets} = this.props;
        return (
            <ul>
                {tweets.map(tweet => {
                    let {printedTweet} = tweet;
                    return (
                        <li>
                            <div className="tweet">{printedTweet}</div>
                        </li>
                    );
                })}
            </ul>
        )
    }

}
export default TweetList