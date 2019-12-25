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
import MyContext from './lib/MyContext';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      loading: false,
      onTweetCreated: this.loadTweets,
    }
  } 
  componentDidMount() {
    this.loadTweets();
    this.interval = setInterval(this.loadTweets ,10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  loadTweets = () => {
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
          <MyContext.Provider value={this.state}>
            <div className="App">
              <CreateTweet />
              <TweetList />
            </div>
          </MyContext.Provider>
          
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
