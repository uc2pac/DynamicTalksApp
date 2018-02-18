import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

import { config, variables, mixins } from '../../config';
import { Section } from '../../shared/section';
import { Anchor } from '../../shared/anchor';
import { Button } from '../../shared/button';

const driveIcon = require('../../assets/images/google-drive-icon.png');

export class Materials extends Component {
  render() {
    return (
      <Section title="Матеріали події">
        <Button
          src={config.materialsUri}
          style={styles.button}
        >
          <Image
            source={driveIcon}
            style={styles.driveIcon}
          />
          <Text style={styles.buttonText}>УСІ МАТЕРІАЛИ</Text>
        </Button>
      </Section>
    );
  }
}

const styles = {
  button: {
    width: 190,
    height: 40,
    backgroundColor: variables.$purple
  },
  buttonText: {
    fontSize: 18,
    color: variables.$white
  },
  driveIcon: {
    width: 30,
    height: 30,
    marginRight: 3,
    marginLeft: 3
  }
};
