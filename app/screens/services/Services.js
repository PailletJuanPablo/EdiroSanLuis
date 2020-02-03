import React, { Component } from 'react';
import {  View, ScrollView} from 'react-native';
import styles from '../../styles/general';
import {getRequest} from '../../helpers/api';
import { List } from 'react-native-paper';
import OnlyTitleHeader from '../../components/OnlyTitleHeader';

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: []
    };
  }

  componentDidMount = async () => {
    try {
      const data = await getRequest('http://www.edirosanluis.gob.ar/index.php?option=com_jbackend&view=request&action=get&module=content&resource=categories&rootid=18');
      this.setState({ services: data.categories });
      console.log(this.state.services);
    } catch (error) {
      console.log('error from api', error)
    }
  
  };

  showServices() {
    let services = this.state.services;
    return (
      <ScrollView style={[styles.cardsContainter]} contentContainerStyle={styles.cardsContent}>
        {services.map((service, index) => {
          return (
            <List.Item key={index} 
            title={service.title}
            onPress={() => this.props.navigation.navigate('ServiceDetail', {service})}
            right={props => <List.Icon {...props} icon="keyboard-arrow-right" />}
          />
          );
        })}
      </ScrollView>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <OnlyTitleHeader title="Servicios" subtitle="Conozca Ediro San Luis" backgroundColor="#9b265e" backAction={this.props.navigation.popToTop} />
        {this.showServices()}
      </View>
    );
  }
}
