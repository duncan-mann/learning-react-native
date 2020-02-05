import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import Item from './components/Item';
export default function App() {

  const [backgroundColor, changeBackgroundColor] = useState('#fff');
  const [colourText, changeColourText] = useState('Enter a Colour');
  const [toDo, setToDo] = useState('');
  const [toDoList, setToDoList] = useState([]);

  const setGoal = (text) => {
    setToDo(text);
  }

  const addGoal = () => {
    setToDoList(currentList => [...currentList, {key: currentList.length.toString(), val: toDo}]);
    setToDo('');
    console.log(toDo);
    console.log('list', toDoList)
  }

  return (
    <View style={styles.main}>
      <View style={styles.inputView}>
        <TextInput placeholder="Enter a Goal" style={styles.textInput} onChangeText={setGoal} value={toDo} />
        <Button title="Add" onPress={addGoal} />
      </View>
      <FlatList 
        data={toDoList} 
        renderItem={itemData => {
          return (
        <Item title={itemData.item.val} />
      )}}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 50
  },
  inputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '80%'
  }
});


