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
        )
    }

}
export default TweetList