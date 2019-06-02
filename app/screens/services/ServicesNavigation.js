import * as React from 'react';
import ServiceDetail from './ServiceDetail';
import Services from './Services';
import { createStackNavigator } from 'react-navigation';

const ServiceNavigator = createStackNavigator({
  Services: {
    screen: Services
  },
  ServiceDetail: {
    screen: ServiceDetail
  }
},{
    headerMode: 'none'
});

export default ServiceNavigator;
