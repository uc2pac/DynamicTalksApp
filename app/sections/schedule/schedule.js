import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { config, variables, mixins } from '../../config';
import { ScheduleList } from './schedule-list';
import { Section } from '../../shared/section';
import { RegistrationButton } from '../../shared/registration-button';

export class Schedule extends Component {
  render() {
    return (
      <Section title="Meetup">
        <View style={styles.block}>
          <Text style={mixins.text(variables.$purple, 24, 'bold')}>{config.eventStartDate}</Text>
        </View>
        <RegistrationButton />
        <View style={styles.block}>
          <Text style={mixins.text(variables.$purple, 18)}>{config.eventLocation.spaceName}</Text>
          <Text style={mixins.text(variables.$purple, 18, 'bold')}>{config.eventLocation.address}</Text>
        </View>
        <ScheduleList />
      </Section>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    marginBottom: 30
  }
});
