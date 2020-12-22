//import liraries
import React from 'react';
import {View, StyleSheet} from 'react-native';

// create a component
const IconImageView = (props) => {
  // define your styles
  const styles = StyleSheet.create({
    container: {
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: `${props.bg ? props.bg : 'white'}`,
      borderRadius: 17,
    },
  });
  return <View style={styles.container}>{props.value}</View>;
};

//make this component available to the app
export default IconImageView;
