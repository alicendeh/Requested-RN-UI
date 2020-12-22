//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from '../ColorTheme';
import Overlapimgs from './OverlapImgs';

const ImageComp = () => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={{uri: 'https://cutt.ly/ghMlyS4'}}
          style={styles.img}
          resizeMode="cover"
        />
      </View>
      <View style={styles.iconImage}>
        <Icon name="arrow-left" size={20} color="white" />
      </View>
      <View style={styles.bottomText}>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
            marginBottom: 9,
          }}>
          $995
        </Text>
        <Text style={{fontSize: 27, color: 'white'}}>Get our into new</Text>
        <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>
          Sea Heaven in Bali
        </Text>
        <View style={styles.sidedContainer}>
          <Overlapimgs />
          <Text
            style={{
              color: 'white',
              marginHorizontal: 12,
              paddingTop: 26,
              fontSize: 15,
            }}>
            Sofie,Lauren + 13 more
          </Text>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  iconImage: {
    width: 40,
    height: 40,
    borderRadius: 90,
    backgroundColor: 'black',
    opacity: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    position: 'absolute',
    top: 20,
  },
  img: {
    width: '97%',
    height: '97%',
    borderRadius: 35,
    marginVertical: 7,
  },
  bottomText: {
    position: 'absolute',
    top: 240,
    left: 10,
    paddingHorizontal: 25,
  },
  sidedContainer: {
    flexDirection: 'row',
  },
  container: {
    // backgroundColor: 'teal',
    height: '60%',
  },
});

//make this component available to the app
export default ImageComp;
