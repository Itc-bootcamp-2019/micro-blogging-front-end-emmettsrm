import React from 'react';
import './App.css';
import CreateTweet from './components/CreateTweet'
import TweetList from './components/TweetList'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: JSON.parse(localStorage.getItem('tweets')) || [],
    }
  } 
  render() {
    return (
      <div className="App">
        <CreateTweet />
        <TweetList tweets={JSON.parse(localStorage.getItem('tweets')) || []}></TweetList>
      </div>
    );
  }
}

export default App;


//////background color from figma???
