/**
 * Created by liron on 10/07/2017.
 */
import React, { Component } from 'react';
import '../../App.css';
import  ReactMarkdown  from 'react-markdown';

class MdPlayer extends Component {

    render() {
        return (
            <ReactMarkdown source={this.props.src} />
        );
    }
}

export default MdPlayer;
