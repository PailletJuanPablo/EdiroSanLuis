import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
  customFont:{
    fontFamily: 'Lato-Bold'
  },
  navTitleView: {
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
  },
  welcome: {
    fontSize: 60
  },
  gradient: {
    height: 400,
    ...StyleSheet.absoluteFillObject
  },
  imageTop: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  surface: {
    padding: 8,
    height: 140,
    //  width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    elevation: 4,
    margin: 8,
    borderRadius: 10,
  },
  actionButtons: { flex: 1, flexDirection: 'row', alignContent: 'center', alignSelf: 'center' }
});
