import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles/general';
import { Appbar } from 'react-native-paper';

export default class ServiceDetail extends Component {
  _goBack = () => console.log('Went back');

  _onSearch = () => console.log('Searching');

  _onMore = () => console.log('Shown more');

  render() {
    return (
      <View>
        <Appbar.Header>
          <Appbar.Content style={styles.mainFont} title="Title" subtitle="Subtitle" />
          <Appbar.Action icon="search" onPress={this._onSearch} />
          <Appbar.Action icon="more-vert" onPress={this._onMore} />
        </Appbar.Header>
        <Text style={styles.welcome}>Service Detail screen</Text>
      </View>
    );
  }
}
