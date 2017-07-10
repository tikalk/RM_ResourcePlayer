import React, { Component } from 'react';
import logo from './logo.svg';
import Menu from './Menu/Menu.js';
import './App.css';
import * as json from './mockData/json.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Menu items={json.stages} />
      </div>
    );
  }
}

export default App;
