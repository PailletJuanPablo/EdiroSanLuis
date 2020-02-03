import React, { Component } from 'react';
import { View, Image, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { Header } from 'react-navigation';
import TopSlides from './TopSlides';
import styles from './styles/home.style';
import { Surface, Text, TouchableRipple, IconButton } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

export default class Home extends Component {

  get gradient() {
    return <LinearGradient colors={['#78388c', '#e92b6e']} startPoint={{ x: 1, y: 0 }} endPoint={{ x: 0, y: 1 }} style={styles.gradient} />;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
      <LinearGradient colors={['#78388c', '#e92b6e']} startPoint={{ x: 1, y: 0 }} endPoint={{ x: 0, y: 1 }} style={styles.gradient} />
        <StatusBar backgroundColor="transparent" barStyle="light-content" translucent={true} />
        <View style={{ paddingTop: 25, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image source={require('../../assets/images/logo.png')} style={{ width: 100, height: 63, resizeMode: 'contain', left: 15 }} />
          <Image source={require('../../assets/images/logo_gob.png')} style={{ width: 125, height: 63, resizeMode: 'contain', right: 15 }} />
        </View>
        <ScrollView>
          <TopSlides />
          <View style={[styles.actionButtons, {marginTop: 15}]}>
            <TouchableRipple onPress={() => this.props.navigation.push('Salidas')} style={{ width: '45%' }}>
              <Surface style={styles.surface}>
                <IconButton icon="directions-transit" color="#78388c" size={30} />
                <Text style={styles.customFont}>Salidas</Text>
              </Surface>
            </TouchableRipple>
            <TouchableRipple onPress={() => this.props.navigation.push('Servicios')} style={{ width: '45%' }}>
              <Surface style={styles.surface}>
                <IconButton icon="local-cafe" color="#78388c" size={30} />
                <Text style={styles.customFont}>Servicios</Text>
              </Surface>
            </TouchableRipple>
          </View>
          <View style={styles.actionButtons}>
          <TouchableRipple onPress={() => this.props.navigation.push('Contact')} style={{ width: '45%' }}>
            <Surface style={styles.surface}>
              <IconButton icon="email" color="#78388c" size={30} />
              <Text style={styles.customFont}>Contacto</Text>
            </Surface>
          </TouchableRipple>
          <TouchableRipple onPress={() => this.props.navigation.push('Company')} style={{ width: '45%' }}>
            <Surface style={styles.surface}>
              <IconButton icon="info" color="#78388c" size={30} />
              <Text style={styles.customFont}>Institucional</Text>
            </Surface>
          </TouchableRipple>
        </View>

        </ScrollView>
      </View>
    );
  }
}
