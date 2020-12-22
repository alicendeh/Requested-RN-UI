import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Alert,
  FlatList,
} from 'react-native';
import AddItem from './AddItem';
import TodoHeader from './TodoHeader';
import ListItems from './ListItems';

let color;
setInterval(() => {
  color = `rgba(${Math.ceil(Math.random() * 255)},${Math.ceil(
    Math.random() * 255,
  )},${Math.ceil(Math.random() * 255)},0.5)`;
}, 1);

const TodoList = () => {
  const [list, addItem] = useState([
    {
      item: 'Win Elections',
      key: Date.now(),
      styles: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(205,220,218,1)',
      },
    },
  ]);

  const handleItem = (item) => {
    if (!JSON.parse(item).item) {
      Alert.alert('Eroor');
    } else {
      let Item = JSON.parse(item);
      Item.styles.backgroundColor = color;

      let temp = [...list];
      temp = [Item, ...temp];
      addItem(temp);
    }
  };

  return (
    <ScrollView>
      <View style={styles.todoHeader}>
        <TodoHeader></TodoHeader>
      </View>
      <View>
        <AddItem handleItem={handleItem}></AddItem>
      </View>
      <View style={styles.listContainer}>
        <ListItems list={list} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  todoHeader: {
    paddingTop: 25,
  },
  listContainer: {
    paddingTop: 20,
  },
});

export default TodoList;
