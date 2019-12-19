import React from 'react';
import './App.css';
import CreateTweet from './components/CreateTweet'
import TweetList from './components/TweetList'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    }
  } 
  componentDidMount() {
    this.setState(
      {tweets: JSON.parse(localStorage.getItem('tweets')) || []}
    )
  }
  loadTweets() {
    this.setState(
      {tweets: JSON.parse(localStorage.getItem('tweets')) || []}
    )
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
