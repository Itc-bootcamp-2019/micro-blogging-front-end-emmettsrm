import React from 'react';
import { createTweet } from '../lib/api'
import axios from 'axios'

class CreateTweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "content": 'wqwq',
            "userName": '1234',
            "date": new Date().toISOString()
        }

    }
    onTweetChange(event) {
        this.setState({ 'content': event.target.value });
        
    }

    onSendTweet() {
        const { onTweetCreated }= this.props;
        const  date  = this.state.date;
        const  userName  = this.state.userName;
        const  content  = this.state.content;
        const {tweet} = {userName, content, date};
        createTweet({"tweet": {content:content, userName:userName, date:date}}).then(() => {
            console.log("tweet was posted!");
            onTweetCreated();
        }).catch(alert("Sorry, try again later."))     
    }



    render() {
        // const { content } = this.state.content;
        const sendEnabled = this.state.content && this.state.content.length < 141;
        return (
            <div className="createTweet">
                <textarea className="writeTweet" onChange={(event) => this.onTweetChange(event)} type="text" placeholder="What you have in mind..." ></textarea>
                <button disabled={!sendEnabled} onClick={() => this.onSendTweet()}>Tweet</button>
            </div>
        )
    }

}
export default CreateTweet;