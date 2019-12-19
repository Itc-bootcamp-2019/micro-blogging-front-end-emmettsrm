import React from 'react';

class TweetList extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            username: "becca",
            id: '1',
        }
    }
    

    render() {
        let {tweets} = this.props;
        let {username} = this.state;
        return (
            <div className="container">
                {tweets.map(tweet => {
                    console.log(tweet);
                    return (
                        <div className="tweet">
                            <h6>{username}</h6><h6></h6>
                           <p> {tweet} </p>
                        </div>
                    );
                })}
            </div>
        )
    }

}
export default TweetList