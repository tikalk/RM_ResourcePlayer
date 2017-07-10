import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './components/resourcesPlayer/playerComponent';

class App extends Component {

  render() {
      const input = '# Liron! This is a header\n\nAnd this is a paragraph';

      return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>

        </div>
          <Player src={input} > </Player>
      </div>
    );
  }
}

export default App;
