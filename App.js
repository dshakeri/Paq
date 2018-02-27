/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import RNAccountKit from 'react-native-facebook-account-kit';

type Props = {};
export default class App extends Component<Props> {
  _loginWithPhone() {
    RNAccountKit.loginWithPhone().then((token) => {
      if (!token) {
        console.log('Login cancelled')
      } else {
        console.log(`Logged with phone. Token: ${token}`)
      }
    })
  }

  _loginWithEmail() {
    RNAccountKit.loginWithEmail().then((token) => {
      if (!token) {
        console.log('Login cancelled')
      } else {
        console.log(`Logged with email. Token: ${token}`)
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          PAQ!
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => this._loginWithPhone()}>
          <Text style={styles.buttonText}>Phone</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this._loginWithEmail()}>
          <Text style={styles.buttonText}>Email</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    height: 50,
    width: 300,
    backgroundColor: 'aqua',
    marginBottom: 10
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
