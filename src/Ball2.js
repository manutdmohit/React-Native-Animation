import React, { useEffect, useState } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Ball2 = () => {
  const leftValue = useState(new Animated.Value(0))[0];

  const moveBall = () => {
    Animated.timing(leftValue, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Animated.View
        style={[
          {
            transform: [{ translateX: leftValue }],
          },
        ]}
      >
        <View style={styles.ball} />
      </Animated.View>
      <TouchableOpacity onPress={moveBall}>
        <Text>Press Me</Text>
      </TouchableOpacity>
    </View>
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

export default Ball2;
