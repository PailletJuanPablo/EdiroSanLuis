/**
 * @format
 */
import * as React from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider as PaperProvider } from 'react-native-paper';

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}
AppRegistry.registerComponent(appName, () => Main);

//AppRegistry.registerComponent(appName, () => App);
