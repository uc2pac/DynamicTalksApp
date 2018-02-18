import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { variables, mixins } from '../../../config';

export class Counter extends Component {
  constructor() {
    super();

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0
    }
  }


  componentWillMount() {
    const timeoutId = setInterval(() => {
      this.count();
    }, 60000);

    this.count();

    this.setState({timeoutId});
  }


  componentWillUnmount() {
    clearInterval(this.state.timeoutId);
  }


  count() {
    const { eventDate, onCounterEnd } = this.props;

    const time = Date.parse(eventDate) - Date.parse(new Date());

    if (time >= 0) {
      const minutes = Math.floor((time/1000/60) % 60);
      const hours = Math.floor(time/(1000*60*60) % 24);
      const days = Math.floor(time/(1000*60*60*24));
      this.setState({days, hours, minutes});
    } else {
      onCounterEnd && onCounterEnd();
      clearInterval(this.state.timeoutId);
    }
  }


  render() {
    const { days, hours, minutes } = this.state;

    return (
      <View style={styles.container}>
        <View style={{...mixins.center()}}>
          <View style={styles.integerBlock}>
            <Text style={styles.integerBlockText}>{days}</Text>
          </View>
          <Text style={styles.integerLabel}>ДНІВ</Text>
        </View>
        <View style={{...mixins.center()}}>
          <View style={styles.integerBlock}>
            <Text style={styles.integerBlockText}>{hours}</Text>
          </View>
          <Text style={styles.integerLabel}>ГОДИН</Text>
        </View>
        <View style={{...mixins.center()}}>
          <View style={styles.integerBlock}>
            <Text style={styles.integerBlockText}>{minutes}</Text>
          </View>
          <Text style={styles.integerLabel}>ХВИЛИН</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  integerBlock: {
    ...mixins.center(),
    backgroundColor: variables.$orange,
    width: 58,
    height: 58,
    borderRadius: 6,
    marginRight: 3,
    marginLeft: 3
  },
  integerBlockText: {
    fontSize: 40,
    color: variables.$purple
  },
  integerLabel: {
    fontSize: 13,
    color: variables.$orange
  }
});
