import React, { Component, Fragment } from 'react';
import GithubProfile from './components/GitHubProfile'
import './App.scss';

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