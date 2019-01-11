import React, { Component, Fragment } from 'react';
import GithubProfile from './components/GitHubProfile'
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GithubProfile/>
      </Fragment>
    );
  }
}

export default App;
