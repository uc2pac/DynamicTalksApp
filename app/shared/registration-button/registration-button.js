import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Linking,
  TouchableOpacity
} from 'react-native';

import { config, variables } from '../../config';
import { Button } from '../button';

export class RegistrationButton extends Component {
  render() {
    return (
      <Button src={config.registerFormUrl}>
        <Text style={{fontSize: 18}}>РЕЄСТРАЦІЯ</Text>
      </Button>
    );
  }
}
