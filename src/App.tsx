import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Text} from 'react-native';

const App = function () {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text style={styles.text}>Hello React Native</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 24, fontWeight: '500'},
});

export default App;
