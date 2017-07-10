import React, { Component } from 'react';
import logo from './logo.svg';
import Menu from './Menu/Menu.js';
import './App.css';
import * as json from './mockData/json.json'
import VideoIframe from './components/VideoIframe';
import MdPlayer from './components/mdIframe/mdPlayerComponent';

class App extends Component {
  render() {
    const input = '# Liron! This is a header\n\nAnd this is a paragraph';

    return (
      <div className="App">
        <div className="col-xs-3">
          <Menu items={json.stages} />
        </div>
        <div className="col-xs-9">
          <VideoIframe url={"https://www.youtube.com/embed/k3fz6CC45ok"} width={"100%"} height={"100%"} />
          <VideoIframe url={"https://player.vimeo.com/video/224808179"} width={"100%"} height={"100%"} />
          <MdPlayer input={input}></MdPlayer>
        </div>

      </div>
    );
  }
}

export default App;
