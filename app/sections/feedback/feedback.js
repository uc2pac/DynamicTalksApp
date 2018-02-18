import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  WebView
} from 'react-native';

import { Section } from '../../shared/section';
import { Button } from '../../shared/button';
import { config } from '../../config/config';

export class Feedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      comment: ''
    };
  }

  onSubmit() {
    alert(`name: ${this.state.name}, comment: ${this.state.comment}`);
  }


  render() {
    return (
      <Section
        title="Зворотній зв'язок"
      >
        <WebView
          style={{width: '100%', height: 500}}
          source={{uri: config.feedbackFormUri}}
        />
      </Section>
    );
  }

  // render() {
  //   return (
  //     <Section
  //       style={{height: 500}}
  //       title="Зворотній зв'язок"
  //     >
  //       <Text>Your name</Text>
  //       <TextInput
  //         onChangeText={(name) => this.setState({name})}
  //         value={this.state.name}
  //         style={styles.input}
  //       />
  //       <Text>Your comment</Text>
  //       <TextInput
  //         onChangeText={(comment) => this.setState({comment})}
  //         value={this.state.comment}
  //         multiline={true}
  //         numberOfLines={4}
  //         style={styles.input}
  //       />
  //       <Button onPress={this.onSubmit.bind(this)}>
  //         <Text>Відправити</Text>
  //       </Button>
  //     </Section>
  //   );
  // }
}

const styles = {
  input: {
    borderColor: 'gray',
    borderWidth: 1
  }
}
