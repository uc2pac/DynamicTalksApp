import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

import { config, variables } from '../../../config';

export class ScheduleList extends Component {
  prepareSchedule() {
    return Object.entries(config.schedule).map(([key, value]) => {
      return {
        key,
        time: key,
        description: value
      };
    });
  }

  renderScheduleItem({item}) {
    return (
      <View style={styles.scheduleItem}
        key={item.key}
      >
        <Text style={styles.scheduleTime}>{item.time}</Text>
        <Text style={styles.scheduleText}>{item.description}</Text>
        <View style={styles.seperator} />
      </View>
    );
  }

  render() {
    const scheduleData = this.prepareSchedule();

    return (
      <View style={styles.container}>
        <FlatList
          data={scheduleData}
          renderItem={this.renderScheduleItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: variables.$grey,
    padding: 20,
    display: 'flex'
  },
  scheduleItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  scheduleTime: {
    fontWeight: 'bold',
    fontSize: 24
  },
  scheduleText: {
    fontSize: 20
  },
  seperator: {
    width: 150,
    height: 4,
    borderBottomWidth: 2,
    borderBottomColor: variables.$orange,
    marginBottom: 20,
    marginTop: 20
  }
});
