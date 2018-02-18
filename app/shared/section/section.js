import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export class Section extends Component {
  renderTitle() {
    const { title } = this.props;

    if (!title) return null;

    return (
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }


  render() {
    const componentStyles = Object.assign({}, styles.container, this.props.style || {});

    return (
      <View style={componentStyles}>
        { this.renderTitle() }
        <View>
          {this.props.children}
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    padding: 20
  },
  titleWrapper: {
    marginBottom: 20
  },
  title: {
    fontSize: 30,
    textAlign: 'center'
  }
};
