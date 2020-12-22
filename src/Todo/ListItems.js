import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
const ListItems = (props) => {
  const styles = StyleSheet.create({
    // itemBox: {
    //   padding: 20,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   margin: 10,
    //   borderRadius: 5,
    // },
    itemText: {
      fontSize: 22,
      // color: '#153545',
      color: 'white',
    },
  });
  return (
    <FlatList
      data={props.list}
      renderItem={({item}) => (
        <View key={item.key} style={item.styles}>
          <Text style={styles.itemText}>{item.item}</Text>
        </View>
      )}
    />
  );
};

export default ListItems;
