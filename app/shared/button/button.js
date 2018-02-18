import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  Linking
} from 'react-native';

import { variables, mixins } from '../../config';

export class Button extends Component {
  onPress(event) {
    const { onPress, src } = this.props;

    // Button
    if (onPress) {
      onPress(event);
      return;
    }

    if (src) {
      this.redirect();
    }
  }


  redirect() {
    const { src } = this.props;

    Linking.canOpenURL(src).then(supported => {
      if (supported) {
        Linking.openURL(src);
      } else {
        console.log('Don\'t know how to open URI: ' + src);
      }
    });
  }


  createStyleList() {
    const { style } = this.props;

    return Object.assign({}, defaultStyles, style || {});
  }


  render() {
    return (
      <TouchableOpacity
        onPress={this.onPress.bind(this)}
        style={this.createStyleList()}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

const defaultStyles = {
  backgroundColor: variables.$orange,
  width: 140,
  height: 36,
  borderRadius: 18,
  marginBottom: 20,
  ...mixins.center('row'),
  alignSelf: 'center'
};
