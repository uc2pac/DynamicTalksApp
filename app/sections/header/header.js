import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { config, variables, mixins } from '../../config';
import { Counter } from './counter';
import { RegistrationButton } from '../../shared/registration-button';
import { Anchor } from '../../shared/anchor';

const logoGD = require('../../assets/images/logo-gd.png');
const rhinoImage = require('../../assets/images/rhino.png');
const introTextImg = require('../../assets/images/intro-text.png');

export class Header extends Component {
  render() {
    const { isEventStarted } = this.props;

    return (
      <View style={styles.container}>
        <Anchor
          style={styles.gdLogo}
          src={config.gdSiteUri}
        >
          <Image
            source={logoGD}
          />
        </Anchor>

        { !isEventStarted && [
          <RegistrationButton key="registration-button" />,
          <Image
            key="rhino-image"
            source={rhinoImage}
            style={styles.rhinoImage}
          />
        ]}

        <Image
          source={introTextImg}
          style={styles.introText}
          resizeMode="contain"
        />

        { !isEventStarted &&
          <View style={{...mixins.center('row')}}>
            <Counter
              eventDate={config.eventStartDate}
              onCounterEnd={this.props.onEventStart}
            />

            <View>
              <Text style={styles.counterLabel}>до</Text>
              <Text style={styles.counterLabel}>початку</Text>
            </View>
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: variables.$purple,
    padding: 20,
    display: 'flex',
    alignItems: 'center'
  },
  gdLogo: {
    marginBottom: 20,
    paddingRight: 6,
    ...mixins.center()
  },
  rhinoImage: {
    zIndex: 2
  },
  introText: {
    width: '100%',
    zIndex: 1,
    marginTop: -180
  },
  counterLabel: {
    fontSize: 30,
    color: variables.$orange,
    lineHeight: 26,
    marginLeft: 8
  }
});
