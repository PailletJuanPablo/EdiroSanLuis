import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';

export default class OnlyTitleHeader extends Component {
 
  render() {
    return (
      <View>
        <Appbar.Header style={{backgroundColor: this.props.backgroundColor, color: 'white'}}>
          <Appbar.Content title={this.props.title} subtitle={this.props.subtitle} style={{color: 'white'}}  />
        </Appbar.Header>
      </View>
    );
  }
}
