import React, { Component } from 'react';
import {  View, ScrollView } from 'react-native';
import OnlyTitleHeader from '../../components/OnlyTitleHeader';
import {getRequest} from '../../helpers/api';
import styles from '../../styles/general';
import { WebView } from 'react-native-webview';
import { Title } from 'react-native-paper';

export default class ServiceDetail extends Component {


  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const paramsService = navigation.getParam('service', 'Servicios');

    this.state = {
      service: paramsService,
      serviceItems: []
    };

  }

  componentDidMount = async () => {
    const data = await getRequest('http://www.edirosanluis.gob.ar/index.php?option=com_jbackend&view=request&action=get&module=content&resource=articles&catid=' + this.state.service.id);
    const articles = data.articles.map((article) => {
      console.log(article.content.replace('width: 160px;', 'display:none'));
      article.content = article.content.replace('width: 160px;', 'display:none');
      return article;
    })
    this.setState({ serviceItems: articles });
    console.log(this.state.serviceItems);
  };

  showServices() {
    let serviceItems = this.state.serviceItems;
    return (
      <ScrollView style={[styles.cardsContainter]}>
        {serviceItems.map((serviceItem, index) => {
          return (
            <View key={index} style={{margin: 10}}>
              <Title> {serviceItem.title} </Title>
              <WebView
                style={styles.webContainer}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                textZoom={200}
                
                source={{ html: serviceItem.content  }}
                />
            </View>
           
          );
        })}
      </ScrollView>
    );
  }



  render() {
    return (
      <View style={{flex: 1}}>
        <OnlyTitleHeader title={this.state.service.title} backgroundColor="#9b265e" backAction={this.props.navigation.goBack} />
        
        {this.showServices()}

      </View>
    );
  }
}
