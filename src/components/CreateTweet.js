import React from 'react';
import { createTweet } from '../lib/api';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";



class CreateTweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "content": '',
            "userName": '',
            "date": '',
            "loading": false
        }

    }
    onTweetChange(event) {
        this.setState({ 'content': event.target.value });
        
    }

    onSendTweet() {
        this.setState({ 'userName': localStorage.getItem('username') })
        this.setState({'date': new Date().toISOString()})
        this.setState({'loading': true})
        const { onTweetCreated }= this.props;
        const  date  = this.state.date;
        const  userName  = this.state.userName;
        const  content  = this.state.content;
        createTweet({tweet: {content:content, userName:userName, date:date}}).then((response) => {
            this.setState({'loading': false});
            onTweetCreated();
        }).catch((error) => {
            this.setState({'loading': false});
            alert("Error. Please try again later.")})     
    }



    render() {
        let loading = this.state.loading;
        const sendEnabled = this.state.content && this.state.content.length < 141;
        return (
            <div className="createTweet">
                {!loading && <textarea className="writeTweet" onChange={(event) => this.onTweetChange(event)} type="text" placeholder="What you have in mind..." ></textarea>}
                {loading && <Loader type="Oval" height={60} width={60} color="gray" className="loading"/>}
                <button disabled={!sendEnabled} onClick={() => this.onSendTweet()}>Tweet</button>
            </div>
        )
    }

}
export default CreateTweet;