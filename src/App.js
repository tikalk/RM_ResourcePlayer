import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MdPlayer from './components/mdIframe/mdPlayerComponent';

class App extends Component {

  render() {
      const input = '# Liron! This is a header\n\nAnd this is a paragraph';

      return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <MdPlayer input={input}></MdPlayer>
      </div>
    );
  }
}

export default App;
