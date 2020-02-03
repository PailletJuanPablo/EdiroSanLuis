import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from './index.style';

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.28;
const slideWidth = wp(85);
const itemHorizontalMargin = wp(1);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

export default StyleSheet.create({
    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 5,
    },
    shadow: {
        position: 'absolute',
        top: 0,
        left: itemHorizontalMargin,
        right: itemHorizontalMargin,
        bottom: 5,
        shadowColor: colors.black,
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        borderRadius: 8,
        position: 'absolute',
        top: 0,
        bottom: 5,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        borderRadius: 8
    },
    imageContainer: {
        flex: 1,
        marginBottom: -1, // Prevent a random Android rendering issue
        backgroundColor: 'transparent',
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius 
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        borderRadius: IS_IOS ? entryBorderRadius : 0,
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
    titleContainer: {
      //  fontSize: 13,
        padding: 10,
        backgroundColor: '#78388c7a',
        width: '100%',
    },
    titleText: {
        color: 'white',
        letterSpacing: 0.5,
        fontFamily: 'Lato-Bold',
    },
    subTitleText: {
        color: 'white',
        letterSpacing: 0.5,
        fontFamily: 'Lato-Bold',
        fontSize: 8,
    },
    subtitle: {
        marginTop: 6,
        color: colors.gray,
        fontSize: 12,
        fontStyle: 'italic'
    },
    slideImageContainer: {
        borderRadius: entryBorderRadius,
        overflow: 'hidden'
    }
});