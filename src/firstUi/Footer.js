//import liraries
import React from 'react';
import {View, StyleSheet} from 'react-native';
import LisIcons from './ListIcons';

const iconList = [
  {
    name: 'home',
    size: 35,
    color: '#4c6ccd',
    description: 'Home',
    Textcolor: '#4c6ccd',
    bg: '#ebeff9',
  },
  {
    name: 'history',
    size: 35,
    color: '#4c6ccd',
    description: 'history',
    Textcolor: '#4c6ccd',
    bg: '#ebeff9',
  },
  {
    name: 'plus',
    size: 35,
    color: '#4c6ccd',
    description: 'nothing',
    Textcolor: '#4c6ccd',
    bg: '#ebeff9',
  },
  {
    name: 'money',
    size: 35,
    color: '#4c6ccd',
    description: 'Money',
    Textcolor: '#4c6ccd',
    bg: '#ebeff9',
  },
  {
    name: 'road',
    size: 35,
    color: '#4c6ccd',
    description: 'Road',
    Textcolor: '#4c6ccd',
    bg: '#ebeff9',
  },
];
// create a component
const Footer = () => {
  return (
    <View style={footer.container}>
      <LisIcons data={iconList} />
    </View>
  );
};

// define your styles
const footer = StyleSheet.create({
  container: {
    paddingLeft: '5%',
    paddingRight: '5%',
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#ccc',
  },
});

//make this component available to the app
export default Footer;
