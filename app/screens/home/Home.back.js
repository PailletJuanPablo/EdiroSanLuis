import React, { Component } from 'react';
import { Text, View, Image, ScrollView, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { Header } from 'react-navigation';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import * as Animatable from 'react-native-animatable';

const MIN_HEIGHT = Header.HEIGHT + 30;
const MAX_HEIGHT = 200;

const styles = StyleSheet.create({
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover'
  },
  logo: {
    resizeMode: 'cover'
  },
  title: {
    fontSize: 20
  },
  name: {
    fontWeight: 'bold'
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify'
  },
  keywords: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  keywordContainer: {
    backgroundColor: '#999999',
    borderRadius: 10,
    margin: 10,
    padding: 10
  },
  keyword: {
    fontSize: 16,
    color: 'white'
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Lato-Regular'
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
    fontFamily: 'Lato-Regular'
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0,
    opacity: 0
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
    fontFamily: 'Lato-Regular'
  },
  sectionLarge: {
    height: 600
  }
});

export default class Home extends Component {
  _goBack = () => console.log('Went back');

  _onSearch = () => console.log('Searching');

  _onMore = () => console.log('Shown more');

  render() {
    return (
      <View style={{ flex: 1 }}>
        <HeaderImageScrollView
          maxHeight={MAX_HEIGHT}
          minHeight={MIN_HEIGHT}
          maxOverlayOpacity={0.6}
          minOverlayOpacity={0.3}
          fadeOutForeground
          renderHeader={() => <Image source={require('../../assets/images/terminal.png')} style={styles.image} />}
          renderFixedForeground={() => (
            <Animatable.View
              style={styles.navTitleView}
              ref={navTitleView => {
                this.navTitleView = navTitleView;
              }}>
              
              <Text style={styles.navTitle}>Testt 11</Text>
            </Animatable.View>
          )}
          renderForeground={() => (
            <View style={styles.titleContainer}>
            <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
         {/*     <Text style={styles.imageTitle}>Testt</Text> */}
            </View>
          )}
        >
          <TriggeringView style={styles.section} onHide={() => this.navTitleView.fadeInUp(200)} onDisplay={() => this.navTitleView.fadeOut(100)} />
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Overview</Text>
            <Text style={styles.sectionContent}>Hiii</Text>
          </View>
          <View style={[styles.section, styles.sectionLarge]}>
            <Text style={styles.sectionTitle}>Keywords</Text>
            <View style={styles.keywords} />
          </View>
        </HeaderImageScrollView>
      </View>
    );
  }
}
