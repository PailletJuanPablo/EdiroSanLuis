import React, { Component } from 'react';
import { Text, View, StatusBar, StyleSheet, ScrollView } from 'react-native';
import OnlyTitleHeader from '../../components/OnlyTitleHeader';
import GradientHeader from 'react-native-gradient-header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  welcome: {
    margin: 16,
    fontSize: 20,
    textAlign: 'center'
  }
});

export default class Trips extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <GradientHeader subtitle="Have a nice day Kuray" gradientColors={['#7F7FD5', '#86A8E7', '#91EAE4']} />
        <ScrollView>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.welcome}>Welcome to React Native!</Text>

          <Text style={styles.welcome}>Welcome to React Native!</Text>

          <Text style={styles.welcome}>Welcome to React Native!</Text>

          <Text style={styles.welcome}>Welcome to React Native!</Text>

          <Text style={styles.welcome}>Welcome to React Native!</Text>

          <Text style={styles.welcome}>Welcome to React Native!</Text>

          <Text style={styles.welcome}>Welcome to React Native!</Text>

          <Text style={styles.welcome}>Welcome to React Native!</Text>

          <Text style={styles.welcome}>Welcome to React Native!</Text>

          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.welcome}>Welcome to React Native!</Text>

          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.welcome}>Welcome to React Native!</Text>

          <Text style={styles.welcome}>Welcome to React Native!</Text>

          <Text style={styles.welcome}>Welcome to React Native!</Text>

          <Text style={styles.welcome}>Welcome to React Native!</Text>
        </ScrollView>
      </View>
    );
  }
}
