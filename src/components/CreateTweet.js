import React from 'react';
// import { PostTweet } from './api';

class CreateTweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'becca',
            tweet: '',
        }
    }
    onTweetChange(event) {
        this.setState({ tweet: event.target.value});
    }
    
    onSendTweet() {
        const {tweet} = this.state;
        const { onTweetPosted } = this.props
        console.log(tweet)
    }
    
    
    render(){
        return (
            <div className="createTweet">
                <textarea className="writeTweet" onChange={(event)=>this.onTweetChange(event)}type="text" placeholder="What you have in mind..." ></textarea>
                <button onClick={() => this.onSendTweet()}>Tweet</button>
            </div>
        )}

}
export default CreateTweet;