import React from 'react';
import './App.css';
import CreateTweet from './components/CreateTweet';
import TweetList from './components/TweetList';
import { getTweets } from './lib/api';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link 
} from 'react-router-dom';
import Profile from './components/Profile'


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
      <Router>
      <nav className="navbar">
        <ul>
        <li>
          <Link to="/" style={{ textDecoration: 'none' }}><h5>Home</h5></Link>
          </li>
          <li>
            <Link to="/profile" style={{ textDecoration: 'none' }}><h5>Profile</h5></Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <CreateTweet onTweetCreated={() => this.loadTweets()} />
            <TweetList tweets={this.state.tweets}></TweetList>
          </div>
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
  }
}

export default App;


//////background color from figma???
