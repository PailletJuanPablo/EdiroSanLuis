import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Linking } from 'react-native';
import OnlyTitleHeader from '../../components/OnlyTitleHeader';
import MapView, { Marker } from 'react-native-maps';
import { Button, ActivityIndicator, Card, TextInput, List, Colors } from 'react-native-paper';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: -33.295083,
        longitude: -66.297007,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      contact: {
        name: '',
        phone: '',
        email: '',
        message: ''
      },
      disableInputs: false
    };
  }

  popPage = () => {
    this.props.navigation.popToTop();
  };

  sendContact = () => {
    this.setState({ disableInputs: true });
    const contact = this.state.contact;
    console.log(contact);
    setTimeout(() => {
      this.setState({ disableInputs: false });
      this.setState({
        contact: {
          name: '',
          phone: '',
          email: '',
          message: ''
        },
      })
    }, 4000);
  }



  render() {
    return (
      <View style={styles.container}>
        <OnlyTitleHeader title="Contacto" backgroundColor="#9b265e" backAction={this.popPage} />
        <ScrollView>
          <List.Item
            onPress={() => Linking.openURL('mailto:info@edirosanluis.gob.ar')}
            title="info@edirosanluis.gob.ar"
            left={props => <List.Icon {...props} icon="email" />}
          />
          <List.Item
            onPress={() => Linking.openURL('tel:+5493514932441')}
            title="0351 4932441"
            left={props => <List.Icon {...props} icon="phone" />}
          />
          <List.Item
            onPress={() => Linking.openURL('tel:+5493513460589')} 
            title="3513460589"
            left={props => <List.Icon {...props} icon="smartphone" />}
          />

          <MapView style={styles.map} initialRegion={this.state.region}>
            <Marker onCalloutPress={() => alert('hi')} coordinate={this.state.region} title="Ediro San Luis" image={require('../../assets/images/marker.png')} description="Av. del Fundador y Calle Pública" />
          </MapView>

          
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignItems: 'stretch'
  },
  map: {
    height: 310,
    top: 0,
    width: '100%',
    left: 0
  },
  contactCard: {
    width: '100%',
    alignSelf: 'center',
    marginBottom: 10
  },
  sendButton: {
    width: '100%',
    padding: 4
  }
});


/*

<Card style={styles.contactCard}>
            <Card.Title title="Comuníquese con nuestro equipo" />
            <Card.Content>
              <TextInput value={this.state.contact.name}
                disabled={this.state.disableInputs}
                label="Nombre" name="name" mode="outlined"
                onChangeText={text => {
                  const contact = this.state.contact;
                  contact.name = text;
                  this.setState({ contact: contact })
                }}
              />
              <TextInput disabled={this.state.disableInputs} value={this.state.contact.email} label="Email" name="email" mode="outlined"
                onChangeText={text => {
                  console.log(text);
                  const contact = this.state.contact;
                  contact.email = text;
                  this.setState({ contact: contact })
                }}
              />
              <TextInput disabled={this.state.disableInputs} value={this.state.contact.phone} placeholder="Nro. de Contacto" name="phone"
                onChangeText={text => {
                  const contact = this.state.contact;
                  contact.phone = text;
                  this.setState({ contact: contact })
                }}

                mode="outlined" autoCompleteType="tel" dataDetectorTypes="phoneNumber" keyboardType={'phone-pad'} />
              <TextInput disabled={this.state.disableInputs} multiline={true} value={this.state.contact.message} label="Mensaje" mode="outlined" name="message"
                onChangeText={text => {
                  const contact = this.state.contact;
                  contact.message = text;
                  this.setState({ contact: contact })
                }}

                numberOfLines={4} />
            </Card.Content>
            <ActivityIndicator animating={this.state.disableInputs} color={Colors.red800} hidesWhenStopped={true} />
            <Card.Actions>


              <Button icon="send"
                onPress={() => this.sendContact()}
                style={styles.sendButton} color="#78388c" mode="contained">
                Enviar
              </Button>


            </Card.Actions>
          </Card>

*/