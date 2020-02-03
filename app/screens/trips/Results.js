import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Picker } from 'react-native';
import SubStackHeader from '../../components/SubStackHeader';
import { DataTable } from 'react-native-paper';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
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

export default class Results extends Component {
  constructor(props) {
    super(props);
  }

  showResults() {
    const { navigation } = this.props;
    const results = navigation.getParam('results');
    return (
      <ScrollView>
        {results.map((result, index) => {
          return (
            <DataTable.Row key={index}>
              <DataTable.Cell>{result.company.name}</DataTable.Cell>
              <DataTable.Cell numeric> {result.origin_time} </DataTable.Cell>
              <DataTable.Cell numeric> {result.destiny_time} </DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </ScrollView>
    );
  }

  showCardsResults() {
    const { navigation } = this.props;
    const results = navigation.getParam('results');
    return (
      <ScrollView>
        {results.map((result, index) => {
          return (
            <Card key={index} style={{ margin: 4 }}>
              <Card.Title title={result.company.name} subtitle={'Serv. a bordo: ' + result.serv_bordo + ' - Serv. Suite: ' + result.serv_suite} />
              <Card.Content>
                <Paragraph>
                  Salida: {result.origin_time} - Llegada: {result.destiny_time}
                </Paragraph>
              </Card.Content>
            </Card>
          );
        })}
      </ScrollView>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <SubStackHeader title="Resultados" backgroundColor="#9b265e" backAction={this.props.navigation.goBack} />
        <ScrollView>{this.showCardsResults()}</ScrollView>
      </View>
    );
  }
}
