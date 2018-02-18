import React, { Component } from 'react';
import {
  WebView,
  Dimensions
} from 'react-native';

export class Video extends Component {
  render() {
    // youtube video aspect ratio
    const aspectRatio = 0.56;
    // padding of the page 20 * 2 (left/right)
    const pagePadding = 40;

    const dimensions = Dimensions.get('window');
    const width = dimensions.width - pagePadding;
    const height = Math.round(width * aspectRatio);

    return (
      <WebView
        style={{width, height}}
        javaScriptEnabled={true}
        source={{uri: this.props.src}}
      />
    );
  }
}
