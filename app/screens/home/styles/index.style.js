import { StyleSheet } from 'react-native';

export const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: '#78388c',
    background2: '#e92b6e'
};

export default StyleSheet.create({
    container: {
        flex: 2,
     //   backgroundColor: colors.background1,
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1
    },
    exampleContainer: {
        paddingVertical: -5,
        alignContent: 'center',
        alignItems: 'center',
    },
    slider: {
        overflow: 'visible'
    },
    welcome: {
        fontSize: 25
    }
  
});