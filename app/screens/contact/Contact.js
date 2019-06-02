import React, {Component} from 'react';
import {Text, View, StatusBar} from 'react-native';
import styles from '../../styles/general';
import OnlyTitleHeader from '../../components/OnlyTitleHeader';

export default class Contact extends Component {
  componentDidUpdate = async() => {
    StatusBar.setTranslucent(true);
  }

  como

  render() {
    return (
      <View style={styles.container}>
      <OnlyTitleHeader title="Contacto" subtitle="Conozca Ediro San Luis" backgroundColor="#e82b6f" />
        <Text style={styles.welcome}>Contact screen</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
      </View>
    );
  }
}
