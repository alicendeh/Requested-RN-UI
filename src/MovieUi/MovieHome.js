//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import MultipurposeView from './MultiPurposeView';

// create a component
const MovieHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{color: 'navy', fontSize: 34, fontWeight: 'bold'}}>
          P<Text style={{color: 'orange'}}>o</Text>dcast
        </Text>
        <Image
          style={{borderRadius: 150, width: 50, height: 50}}
          source={require('./images.jpeg')}
        />
      </View>
      <MultipurposeView
        bg={'grey'}
        value={
          <MultipurposeView pd={20}>
            <TextInput placeholder="Podcast" />
          </MultipurposeView>
        }></MultipurposeView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 3,
  },
});

//make this component available to the app
export default MovieHome;
