import React, {Component, PropTypes} from 'react';
import qs from 'query-string';
import  Consts from '../../consts';

export default class VideoIframe extends Component {

  static propTypes = {
    src: PropTypes.string.isRequired
  };

  static urlMap = new Map([
    ['youtube', Consts.YOUTUBE],
    ['vimeo', Consts.VIMEO]
  ]);

  getServiceUrlFromVideoString (url) {
    if( url.indexOf('youtube') !== -1 ) {
      return VideoIframe.urlMap.get('youtube');
    }
    else if( url.indexOf('vimeo') !== -1 ) {
      return VideoIframe.urlMap.get('vimeo');
    }
  }

  getIdFromVideoString (url) {
    const urlArr = url.split('/');
    const idString = urlArr[urlArr.length - 1];
    const queryParams = qs.extract(url);

    return (queryParams && qs.parse(queryParams).v) || idString || '';
  }

  render() {
    const {src, ...htmlTags} = this.props;
    const _src = `${this.getServiceUrlFromVideoString(src)}${this.getIdFromVideoString(src)}`;

    return (
      <iframe
        src={_src}
        frameBorder='0'
        allowFullScreen
        {...htmlTags}
      />
    );
  }
}