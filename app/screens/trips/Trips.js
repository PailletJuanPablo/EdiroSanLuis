import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Picker } from 'react-native';
import OnlyTitleHeader from '../../components/OnlyTitleHeader';
import Selector from './components/Selector';
import { ActivityIndicator, Colors, Button } from 'react-native-paper';
import { getMetadata, getTrips } from './services/getTrips';
import LinearGradient from 'react-native-linear-gradient';
import { Appbar } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    margin: 16,
    fontSize: 20,
    textAlign: 'center'
  }
});

export default class Trips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: null,
      destination: null,
      loading: true,
      locations: []
    };
  }

  componentDidMount = async () => {
    const data = await getMetadata();
    this.setState({ locations: data, loading: false });
    console.log(this.state.locations);
  };

  setOrigin = val => {
    this.setState({ origin: val });
    console.log(this.state.origin);
  };

  setDestination = val => {
    this.setState({ destination: val });
  };

  shoudDisable = () => {
    const { destination, origin } = this.state;
    if (!destination || !origin) {
      return true;
    }
    return false;
  };

  popPage = () => {
    this.props.navigation.popToTop();
  };

  getResults = async () => {
    this.setState({ loading: true });
    const data = await getTrips(this.state.origin, this.state.destination);
    this.setState({ loading: false });
    this.props.navigation.navigate('Results', { results: data.results });
  };

  render() {
    return (
      <View style={styles.container}>
      <OnlyTitleHeader title="Salidas" backgroundColor="#9b265e" backAction={this.popPage} />

        {this.state.loading ? (
          <ActivityIndicator style={{ marginTop: 25 }} animating={true} color={Colors.red800} />
        ) : (
          <View style={{ margin: 25 }}>
            <Selector items={this.state.locations.origins} sendData={this.setOrigin} placeholder="Ingrese Origen" />
            <Selector items={this.state.locations.destinations} sendData={this.setDestination} placeholder="Ingrese Destino" />
            <Button disabled={this.shoudDisable()} icon="send" color="#78388c" mode="contained" onPress={() => this.getResults()} style={{ marginTop: 10 }}>
              Buscar
            </Button>
          </View>
        )}
      </View>
    );
  }
}
