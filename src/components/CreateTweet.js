import React from 'react';
import { createTweet } from '../lib/api';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import MyContext from '../lib/MyContext';



class CreateTweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "content": '',
            // "userName": '',
            // "date": '',
            "loading": false
        }
    }
    onTweetChange(event) {
        this.setState({ 'content': event.target.value });

    }

    onSendTweet(callback) {
        this.setState({ 'loading': true })
        const date = new Date().toISOString()
        const userName = localStorage.getItem('username');
        const content = this.state.content;
        createTweet({ tweet: { content: content, userName: userName, date: date } }).then((response) => {
            this.setState({ 'loading': false });
            callback();
        }).catch((error) => {
            this.setState({ 'loading': false });
            alert("Error. Please try again later.")
        })
    }

    render() {
        let loading = this.state.loading;
        const sendEnabled = this.state.content && this.state.content.length < 141;
        return (
            <MyContext.Consumer>
                {({onTweetCreated}) => (
                    <div className="createTweet">
                        {!loading && <textarea className="writeTweet" onChange={(event) => this.onTweetChange(event)} type="text" placeholder="What you have in mind..." ></textarea>}
                        {loading && <Loader type="Oval" height={60} width={60} color="gray" className="loading" />}
                        <button disabled={!sendEnabled} onClick={() => this.onSendTweet(onTweetCreated)}>Tweet</button>
                    </div>
                )}
            </MyContext.Consumer>
        )
    }

}
export default CreateTweet;