//import liraries
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

// create a component
const ViewIcon = (props) => {
  return (
    <Icon
      name={props.iconDetail.name}
      size={props.iconDetail.size}
      color={props.iconDetail.color}
    />
  );
};

//make this component available to the app
export default ViewIcon;
