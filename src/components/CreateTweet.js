import React from 'react';


class CreateTweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'becca',
            tweet: '',
            id: '1',
        }
    }
    onTweetChange(event) {
        this.setState({ tweet: event.target.value});
    }
    
    onSendTweet() {
        let tweetsArray = JSON.parse(localStorage.getItem('tweets')) || [];
        console.log(tweetsArray);
        let {tweet} = this.state;
        tweetsArray.push(tweet);
        localStorage.setItem('tweets', JSON.stringify(tweetsArray));
        console.log(localStorage);
        
    }
    
    
    render(){
        const {tweet} = this.state;
        const sendEnabled = tweet && tweet.length <141;
        return (
            <div className="createTweet">
                <textarea className="writeTweet" onChange={(event)=>this.onTweetChange(event)}type="text" placeholder="What you have in mind..." ></textarea>
                <button disabled={!sendEnabled} onClick={() => this.onSendTweet()}>Tweet</button>
            </div>
        )}

}
export default CreateTweet;