import React, { useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

const Ball = () => {
  const [position] = useState(new Animated.ValueXY(0, 0));

  React.useEffect(() => {
    Animated.spring(position, {
      toValue: { x: 200, y: 500 },
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <Animated.View style={position.getLayout()}>
      <View style={styles.ball} />
    </Animated.View>
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
