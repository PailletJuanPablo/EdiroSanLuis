import React, { Component } from 'react';
import { View, ScrollView, Text, StatusBar, SafeAreaView, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './styles/SliderEntry.style';
import styles, { colors } from './styles/index.style';
import SliderEntry from './components/SliderEntry';
import { slides } from './components/slides';



const SLIDER_1_FIRST_ITEM = 0;

export default class TopSlides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    };
  }

  _renderItemWithParallax({ item, index }, parallaxProps) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} parallax={true} parallaxProps={parallaxProps} />;
  }

  mainExample() {
    const { slider1ActiveSlide } = this.state;
    return (
      <View style={styles.exampleContainer}>
        <Carousel
          ref={c => (this._slider1Ref = c)}
          data={slides}
          renderItem={this._renderItemWithParallax}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={true}
          loopClonesPerSide={2}
          autoplay={true}
          autoplayDelay={500}
          autoplayInterval={3000}
          onSnapToItem={index => this.setState({ slider1ActiveSlide: index })}
        />
      </View>
    );
  }

  get gradient() {
    return <LinearGradient colors={['#78388c', '#e92b6e']} startPoint={{ x: 1, y: 0 }} endPoint={{ x: 0, y: 1 }} style={styles.gradient} />;
  }

  render() {
    const example1 = this.mainExample(1);

    return (
      <ScrollView style={styles.container}>
        <View style={styles.scrollview} scrollEventThrottle={200} directionalLockEnabled={true}>
          {example1}
        </View>
       

      </ScrollView>
    );
  }
}
