import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

const AddItem = (props) => {
  const [text, setItem] = useState();
  return (
    <View style={styles.addItemField}>
      <TextInput
        style={styles.input}
        onChangeText={(item) => {
          setItem(
            JSON.stringify({
              item: item,
              key: Date.now(),
              styles: itemStyle.itemBox,
            }),
          );
        }}
        onSubmitEditing={() => props.handleItem(text)}
        placeholder="Enter Item"
      />

      <TouchableOpacity
        onPress={() => props.handleItem(text)}
        style={styles.btn}>
        <Text style={styles.btnText}>Add +</Text>
      </TouchableOpacity>
      <Text></Text>
    </View>
  );
};

let itemStyle = StyleSheet.create({
  itemBox: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 5,
    backgroundColor: 'black',
  },
});

const styles = StyleSheet.create({
  btn: {
    width: 100,
    paddingTop: 7,
    paddingBottom: 7,
    backgroundColor: 'green',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20,
    color: 'white',
  },
  input: {
    fontSize: 20,
    flex: 1,
    borderBottomWidth: 0.2,
  },
  addItemField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 7,
    backgroundColor: '#eee',
  },
});

export default AddItem;
