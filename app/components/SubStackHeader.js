import React, { Component } from 'react';
import {  View, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

export default class SubStackHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={{ paddingTop: 25, justifyContent: 'space-between' }}>
          <LinearGradient colors={['#78388c', '#e92b6e',]} startPoint={{ x: 1, y: 0 }} endPoint={{ x: 0, y: 1 }} style={{ ...StyleSheet.absoluteFillObject }} />
          <Appbar.Header style={{backgroundColor: 'transparent', color: 'white'}}>
          <Appbar.BackAction color="white" onPress={() => {this.props.backAction()}} />
            <Appbar.Content color="white" title={this.props.title} subtitle={this.props.subtitle} style={{ color: 'white' }} />
          </Appbar.Header>
        </View>
    );
  }
}
