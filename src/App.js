import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import VideoIframe from './components/VideoIframe';
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

        <VideoIframe url={"https://www.youtube.com/embed/k3fz6CC45ok"} width={"100%"} height={"100%"} />
        <VideoIframe url={"https://player.vimeo.com/video/224808179"} width={"100%"} height={"100%"} />

        <MdPlayer input={input}></MdPlayer>

      </div>
    );
  }
}

export default App;
