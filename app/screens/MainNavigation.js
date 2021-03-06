import Home from './home/Home';
import Contact from './contact/Contact';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as React from 'react';
import Trips from './trips/Trips';
import ServiceNavigator from './services/ServicesNavigation';
import TripsNavigator from './trips/TripsNavigation';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Company from './company/Company';

const GeneralNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Inicio',
        tabBarColor: '#7a388c',
        tabBarIcon: ({ tintColor }) => <Icon style={[{ color: tintColor }]} name="home" size={25} />
      }
    },
    Salidas: {
      screen: TripsNavigator,
      navigationOptions: {
        title: 'Salidas',
        tabBarColor: '#a33381',
        tabBarIcon: ({ tintColor }) => <Icon style={[{ color: tintColor }]} name="directions-transit" size={25} />
      }
    },
    Servicios: {
      screen: ServiceNavigator,
      navigationOptions: {
        title: 'Servicios',
        tabBarColor: '#c72e77',
        tabBarIcon: ({ tintColor }) => <Icon style={[{ color: tintColor }]} name="group" size={25} />
      }
    },
    Contact: {
      screen: Contact,
      navigationOptions: {
        title: 'Contacto',
        tabBarColor: '#e82b6f',
        tabBarIcon: ({ tintColor }) => <Icon style={[{ color: tintColor }]} name="info" size={25} />
      }
    },
    Company: {
      screen: Company,
      navigationOptions: {
        title: 'Company',
        tabBarColor: '#e82b6f',
        tabBarIcon: ({ tintColor }) => <Icon style={[{ color: tintColor }]} name="info" size={25} />
      }
    }
  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    shifting: true,
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

export default GeneralNavigator;
