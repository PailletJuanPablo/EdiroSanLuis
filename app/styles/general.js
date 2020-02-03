import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    alignItems: 'stretch'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Lato-Regular'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontFamily: 'Lato-Regular'
  },
  mainFont: {
    fontFamily: 'Lato-Regular'
  },
  cardsContainter: {
    flex: 1
  },
  cardsContent: {
    padding: 4
  },
  cardsItem: {
    margin: 4
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
    fontFamily: 'Lato-Regular'
  },
  webContainer: {
    minHeight: 210,
    flex: 1,
  }
});

export default styles;
