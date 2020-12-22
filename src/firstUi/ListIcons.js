//import liraries
import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import IconImageView from './IconImageView';
import IconDescribed from './IconDescribed';
import ViewIcon from './ViewIcon';

// create a component
const LisIcons = (props) => {
  return (
    <FlatList
      keyExtractor={(item) => item.description}
      contentContainerStyle={styles.list}
      horizontal
      data={props.data}
      renderItem={({item}) => (
        <View style={styles.listDiscribed}>
          <IconImageView bg = {item.bg}
            value={<ViewIcon iconDetail={item} />}
          />
          {item.description &&
            (item.description === 'nothing' ? (
              <IconDescribed
                description={item.description}
                style={item.Textcolor}
                opacity={0}
              />
            ) : (
              <IconDescribed
                description={item.description}
                style={item.Textcolor}
              />
            ))}
        </View>
      )}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  listDiscribed: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    justifyContent: 'space-between',
    width: '100%',
  },
});

//make this component available to the app
export default LisIcons;
