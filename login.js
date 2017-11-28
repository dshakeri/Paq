import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions
} from 'react-native';

export default class Login extends Component<{}> {
  constructor(props) {
      super(props);
      this.state = { text: 'Useless Placeholder' };
    }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo}
        source={require('./img/githubLogo.png')} />
        <TextInput style={styles.input}
          placeholder= "Username" />
        <TextInput secureTextEntry={true} style={styles.input}
          placeholder= "Password" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 120,
    alignItems: 'center',
    padding: 30
  },
  logo: {
    alignItems: 'center',
    width: 130,
    height: 52
  },
  input: {
    height: 50,
    marginTop: 10,
    fontSize: 18,
    padding: 4,
    borderWidth: 1,
    borderColor: 'grey',
    width: Dimensions.get('window').width - 70
  }
});
