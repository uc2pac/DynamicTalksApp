import React, { Component } from 'react';
import {
  Linking,
  TouchableOpacity
} from 'react-native';

export class Anchor extends Component {
  register() {
    const { src } = this.props;

    Linking.canOpenURL(src).then(supported => {
      if (supported) {
        Linking.openURL(src);
      } else {
        console.log('Don\'t know how to open URI: ' + src);
      }
    });
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.register.bind(this)}
        style={this.props.style}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}
