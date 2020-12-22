//import liraries
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

// create a component
const AppUI = (props) => {
  return (
    <View style={screen.screen}>
      <Header />
      <Body />
      <Footer />
    </View>
  );
};

// define your styles
const screen = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ebeff9',
  },
});

//make this component available to the app
export default AppUI;
