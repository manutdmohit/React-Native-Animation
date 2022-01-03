import React, { useRef } from 'react';
import {
  StyleSheet,
  FlatList,
  PanResponder,
  Animated,
  Dimensions,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import CardMain from './CardMain';

import { data } from './data';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;

const Deck = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        pan.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          console.log('swipe right!');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          console.log('swipe left!');
        } else {
          resetPosition();
        }
      },
    })
  ).current;

  function resetPosition() {
    Animated.spring(pan, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  }

  const getCardStyle = () => {
    const rotate = pan.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.75, 0, SCREEN_WIDTH * 1.75],
      outputRange: ['-120deg', '0deg', '120deg'],
    });

    return {
      ...pan.getLayout(),
      transform: [{ rotate }],
    };
  };

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          if (index === 0) {
            return (
              <Animated.View
                style={getCardStyle()}
                {...panResponder.panHandlers}
              >
                <CardMain url={item.uri} text={item.text} />
              </Animated.View>
            );
          }
          return <CardMain url={item.uri} text={item.text} />;
        }}
      />
    </SafeAreaView>
  );
};

export default Deck;

const styles = StyleSheet.create({});
