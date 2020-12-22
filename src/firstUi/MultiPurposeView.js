//import liraries
import React from 'react';
import {View, StyleSheet} from 'react-native';

// create a component
const MultipurposeView = (props) => {
  const styles = StyleSheet.create({
    container: {
      width: props.width,
      backgroundColor: props.bg ? props.bg : 'white',
      padding: props.pd ? props.pd : '2%',
      borderRadius: props.border ? props.border : 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: props.mgtop ? props.mgtop : 10,
      marginLeft: props.mgleft ? props.mgleft : 0,
    },
  });
  return <View style={styles.container}>{props.value}</View>;
};

// define your styles

//make this component available to the app
export default MultipurposeView;
