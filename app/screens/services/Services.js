import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, StatusBar, Button } from 'react-native';
import styles from '../../styles/general';
import getRequest from '../../helpers/api';
import { Card, Title, Paragraph } from 'react-native-paper';
import OnlyTitleHeader from '../../components/OnlyTitleHeader';

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: []
    };
  }

  componentDidMount = async () => {
    const data = await getRequest('https://jsonplaceholder.typicode.com/albums/2/photos');
    this.setState({ services: data.slice(0, 20) });
    console.log(this.state.services);
  };

  showServices() {
    let services = this.state.services;
    return (
      <ScrollView style={[styles.cardsContainter]} contentContainerStyle={styles.cardsContent}>
        {services.map((service, index) => {
          return (
            <Card key={index} style={styles.cardsItem}>
              <Card.Cover source={{ uri: service.thumbnailUrl }} />
              <Card.Content>
                <Title>{service.title}</Title>
                <Paragraph>{service.title}</Paragraph>
              </Card.Content>
              <Button title="Go to Details" onPress={() => this.props.navigation.navigate('ServiceDetail')} />
            </Card>
          );
        })}
      </ScrollView>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <OnlyTitleHeader title="Servicios" subtitle="Conozca Ediro San Luis" backgroundColor="#9b265e" />
        {this.showServices()}
      </View>
    );
  }
}
