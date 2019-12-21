import React from 'react';
import './App.css';
import CreateTweet from './components/CreateTweet'
import TweetList from './components/TweetList'
import { getTweets } from './lib/api'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      loading: false
    }
  } 
  componentDidMount() {
    this.loadTweets();
  }

  loadTweets() {
    getTweets().then(response => {
      this.setState({ tweets: response.data.tweets.sort()})
    })
  }
  
  render() {
    return (
      <div className="App">
        <CreateTweet onTweetCreated={() => this.loadTweets()} />
        <TweetList tweets={this.state.tweets}></TweetList>
      </div>
    );
  }
}

export default App;


//////background color from figma???
