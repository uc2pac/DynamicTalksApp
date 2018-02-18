import React, { Component } from 'react';
import {
  Text
} from 'react-native';

import { config, variables, mixins } from '../../config';
import { Section } from '../../shared/section';

export class Footer extends Component {
  render() {
    return (
      <Section style={styles.container}>
        <Text>Copyright</Text>
      </Section>
    );
  }
}

const styles = {
  container: {
    backgroundColor: variables.$grey
  }
};
