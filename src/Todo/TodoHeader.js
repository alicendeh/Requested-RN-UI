import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const TodoHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.HeaderText}>List items</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#196e99',
  },
  HeaderText: {
    fontSize: 25,
    color: 'white',
  },
});

export default TodoHeader;
