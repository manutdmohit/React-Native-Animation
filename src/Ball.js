import React, { useState } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Ball = () => {
  const position = useState(new Animated.ValueXY(0, 0))[0];

  const moveBall = () => {
    Animated.spring(position, {
      toValue: { x: 250, y: 500 },

      useNativeDriver: false,
    }).start();
  };

  return (
    <>
      <Animated.View style={position.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>
      <TouchableOpacity onPress={moveBall}>
        <Text>Press Me</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'black',
  },
});

export default Ball;
