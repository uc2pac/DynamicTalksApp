import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  WebView
} from 'react-native';

import { Anchor } from '../../shared/anchor';
import { Video } from '../../shared/video';

import { config, mixins } from '../../config';

const facebook = require('../../assets/images/facebook-logo.png');
const slack = require('../../assets/images/slack-logo.png');
const youtube = require('../../assets/images/youtube-logo.png');

export class Comunity extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={mixins.text(null, 30)}>Приєднуйтесь до нас:</Text>

        <View style={styles.comunityLinksContainer}>
          <Anchor src={config.socials.facebook}>
            <Image
              source={facebook}
              style={styles.comunityLink}
            />
          </Anchor>
          <Anchor src={config.socials.slack}>
            <Image
              source={slack}
              style={styles.comunityLink}
            />
          </Anchor>
          <Anchor src={config.socials.youtube}>
            <Image
              source={youtube}
              style={styles.comunityLink}
            />
          </Anchor>
        </View>

        <Video src={`${config.promoVideoUri}?rel=0&amp;controls=0&amp;showinfo=0&amp;start=1`} />
      </View>
    );
  }
}

const styles = {
  container: {
    padding: 20,
  },
  comunityLinksContainer: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  comunityLink: {
    width: 40,
    height: 40,
    borderRadius: 4
  }
}
