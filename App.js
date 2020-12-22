//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import UIApp from './src/BEACH-UI/UIApp';
import MainApp from './src/BEACH-UI/NEXTUI/MainApp';
// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <MainApp />
      {/* <UIApp /> */}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
