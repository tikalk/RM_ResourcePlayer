import React, { Component } from 'react';
import './player.css';
import MdPlayer from '../mdIframe/mdPlayerComponent';
import GoogleDocsIframe from '../googleDocIframe/googleDocIframe';
import VideoIframe from '../VideoIframe';
import  Consts from '../../consts';

class Player extends Component {

    parseUrl(src) {
        let Tag;
        if(src.startsWith(Consts.GOOGLE_DOCS)){
            Tag = GoogleDocsIframe;
        } else if (src.endsWith('.md')) {
            Tag = MdPlayer;
        } else if (src.startsWith(Consts.YOUTUBE) || src.startsWith(Consts.VIMEO)){
            Tag = VideoIframe;
        }
        return Tag;
    }

    render() {
        const src = 'liron.md';
        const Tag = this.parseUrl(src);
        return (
            <div className="player">
                <Tag src={this.props.src}/>
            </div>
        );
    }
}

export default Player;
