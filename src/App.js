import React, { Component } from 'react';
import logo from './logo.svg';
import Menu from './Menu/Menu.js';
import './App.css';
import * as json from './mockData/json.json'
import VideoIframe from './components/VideoIframe';
import MdPlayer from './components/mdIframe/mdPlayerComponent';
import Player from './components/resourcesPlayer/playerComponent';

class App extends Component {
  constructor(props) {
    super(props);
      this.menuItemSelected = this.menuItemSelected.bind(this);

    this.state = {
      resource: {}
    }
  }

  menuItemSelected(itemIndex, resourceIndex, resource) {
    console.log(resource);
    
    this.setState({
      resource
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-xs-3">
              <Menu onSelect={this.menuItemSelected} items={json.stages} />
            </div>
            <div className="col-xs-9">
              <Player src={this.state.resource.url} > </Player>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
