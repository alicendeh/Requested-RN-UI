//import liraries
import React from 'react';
import {Text, StyleSheet} from 'react-native';

// create a component
const IconDescribed = (props) => {

    const styles = StyleSheet.create({
        container: {
          justifyContent: 'center',
          alignItems: 'center',
          color: `${props.style}`,
          opacity: props.opacity,
          marginTop:10,
          fontSize: 14 
        },
      });
  return <Text style = {styles.container}>{props.description}</Text>;
};

// define your styles


//make this component available to the app
export default IconDescribed;
