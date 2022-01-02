import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import PanRespond from './src/PanRespond';
// import Fadeinout from './src/Fadeinout';
// import Ball2 from './src/Ball2';
// import Ball from './src/Ball';
import Deck from './src/Deck';

const App = () => {
  return (
    <View style={styles.container}>
      <Deck />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
