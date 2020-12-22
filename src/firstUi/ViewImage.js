//import liraries
import React from 'react';
import {StyleSheet, Image} from 'react-native';

// create a component
const ViewImage = (props) => {
  return <Image source={{uri: props.link}} style={styles.userImage} />;
};

// define your styles
const styles = StyleSheet.create({
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 17,
  },
});

//make this component available to the app
export default ViewImage;
