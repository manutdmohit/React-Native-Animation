import React, { useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  PanResponder,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardMain from './CardMain';

import { data } from './data';

const Deck = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {},
    })
  ).current;

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          if (index === 0) {
            return (
              <Animated.View
                style={pan.getLayout()}
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
