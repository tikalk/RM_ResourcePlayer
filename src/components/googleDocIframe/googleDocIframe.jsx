import React, { Component } from 'react';

const isValidUrl = url => /^https\:\/\/docs.google.com$/.test(url);

class GoogleDocsIframe extends Component {
  constructor(props) {
    super(props);
    this.urlIsValid = isValidUrl(this.props.src);
  }

  render() {
    return (
      <iframe title="" src={this.props.src}></iframe>
    )
  }
}

export default GoogleDocsIframe;
