import React, { useEffect, useState } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Fadeinout = () => {
  const opacity = useState(new Animated.Value(0))[0];

  const fadeInBall = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOutBall = () => {
    Animated.timing(opacity, {
      toValue: 0,
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
            opacity,
          },
        ]}
      >
        <View style={styles.ball} />
      </Animated.View>

      <TouchableOpacity onPress={() => fadeInBall()}>
        <Text>Fade In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => fadeOutBall()}>
        <Text>Fade Out</Text>
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

export default Fadeinout;
