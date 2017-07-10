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
        } else if (Consts.YOUTUBE_URL.test(src) || src.startsWith(Consts.VIMEO)){
            Tag = VideoIframe;
        }
        return Tag;
    }

    render() {
        if(this.props.src) {
            const Tag = this.parseUrl(this.props.src);
            if(!Tag){
                return (
                    <div className="invalid">
                        Invalid Url
                    </div>
                );
            }
            return (
                <div className="player">
                    <Tag src={this.props.src}/>
                </div>
            );
        }
        else {
            return (<div></div>);
        }
    }
}

export default Player;
