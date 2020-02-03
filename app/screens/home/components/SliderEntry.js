import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../styles/SliderEntry.style';

export default class SliderEntry extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    even: PropTypes.bool,
    parallax: PropTypes.bool,
    parallaxProps: PropTypes.object
  };

  get image() {
    const {
      data: { illustration, title, subtitle },
      parallax,
      parallaxProps,
      even
    } = this.props;

    return !parallax ? (
      <ParallaxImage
        source={illustration}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0.35}
        showSpinner={true}
        spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
        {...parallaxProps}
      />
    ) : (
      <View style={styles.slideImageContainer}>
        <ImageBackground source={illustration} style={{ width: '100%', height: '100%' }}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.subTitleText}>{subtitle}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }

  render() {
    const {
      data: { title },
      even
    } = this.props;

    return (
      <View activeOpacity={1} style={styles.slideInnerContainer}>
        <View style={styles.shadow} />
        <View style={[styles.imageContainer]}>{this.image}</View>
      </View>
    );
  }
}
