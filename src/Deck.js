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
import { Card, Button, Image } from 'react-native-elements';

import { data } from './data';

const Deck = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        debugger;
        console.log(gesture);
      },
      onPanResponderRelease: () => {},
    })
  ).current;

  return (
    <SafeAreaView>
      <Animated.View {...panResponder.panHandlers}>
        {
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <Card>
                  <Card.Image source={{ uri: item.uri }}></Card.Image>
                  <Card.Title>{item.text}</Card.Title>
                  <Text style={{ marginBottom: 10 }}>This is customizable</Text>
                  <Button icon={{ name: 'code' }} title="View Now" />
                </Card>
              );
            }}
          />
        }
      </Animated.View>
    </SafeAreaView>
  );
};

export default Deck;

const styles = StyleSheet.create({});
