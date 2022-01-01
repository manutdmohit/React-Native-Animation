import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ball2 from './src/Ball2';
// import Ball from './src/Ball';

export default function App() {
  return (
    <View style={styles.container}>
      <Ball2 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
