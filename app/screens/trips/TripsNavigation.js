import Results from './Results';
import Trips from './Trips';
import * as React from 'react';

import { createStackNavigator } from 'react-navigation';

const TripsNavigator = createStackNavigator({
    Trips: {
    screen: Trips
  },
  Results: {
    screen: Results
  }
},{
    headerMode: 'none'
});

export default TripsNavigator;
