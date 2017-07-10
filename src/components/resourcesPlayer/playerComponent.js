import React, { Component } from 'react';
import './player.css';
import MdPlayer from '../mdIframe/mdPlayerComponent';

class Player extends Component {

    parseUrl(src){
        let component;
        if(src.startsWith('https://docs.google.com')){
            component = 'docs'; //get the source from conf/consts
        } else if (src.endsWith('.md')) {
            component = MdPlayer;
        }
        return component;
    }

    render() {
        return (
            <div className="player">
                <MdPlayer src={this.props.src}/>
            </div>
    );
  }
}

export default Player;
