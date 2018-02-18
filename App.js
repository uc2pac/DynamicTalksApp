import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import { Header } from './app/sections/header';
import { Schedule } from './app/sections/schedule';
import { Comunity } from './app/sections/comunity';
import { Materials } from './app/sections/materials';
import { Feedback } from './app/sections/feedback';
import { Footer } from './app/sections/footer';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      isEventStarted: false
    };

    this.onEventStart = this.onEventStart.bind(this);
  }

  onEventStart() {
    this.setState({
      isEventStarted: true
    });
  }

  render() {
    const { isEventStarted } = this.state;

    return (
      <ScrollView>
        <Header
          isEventStarted={isEventStarted}
          onEventStart={this.onEventStart}
        />
        <Schedule isEventStarted={isEventStarted} />
        <Comunity />
        <Materials />
        <Feedback />
        <Footer />
      </ScrollView>
    );
  }
}
