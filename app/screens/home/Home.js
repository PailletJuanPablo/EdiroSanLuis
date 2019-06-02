import React, { Component } from 'react';
import { Text, View, Image, ScrollView, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { Header } from 'react-navigation';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import * as Animatable from 'react-native-animatable';
import TopSlides from './TopSlides';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles/home.style';
const MIN_HEIGHT = Header.HEIGHT + 30;
const MAX_HEIGHT = 200;

export default class Home extends Component {
  _goBack = () => console.log('Went back');

  _onSearch = () => console.log('Searching');

  _onMore = () => console.log('Shown more');

  get gradient() {
    return <LinearGradient colors={['#78388c', '#e92b6e']} startPoint={{ x: 1, y: 0 }} endPoint={{ x: 0, y: 1 }} style={styles.gradient} />;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {this.gradient}
          <Image source={require('../../assets/images/logo.png')} style={styles.imageTop} />
          <ScrollView>
            <TopSlides />
          </ScrollView>
        </View> 
        <ScrollView>
          <Text style={styles.welcome}>Welcome tsso React Native!</Text>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
        </ScrollView>
      </View>
    );
  }
}
