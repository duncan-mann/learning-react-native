import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import ItemList from './components/ItemList';
import Input from './components/Input'

export default function App() {

  const [backgroundColor, changeBackgroundColor] = useState('#fff');
  const [colourText, changeColourText] = useState('Enter a Colour');
  const [toDo, setToDo] = useState('');
  const [toDoList, setToDoList] = useState([]);

  const setGoal = (text) => {
    setToDo(text);
  }

  const addGoal = () => {
    if (toDo !== '') {
      setToDoList(currentList => [...currentList, { key: currentList.length.toString(), val: toDo }]);
      setToDo('');
    } else {
      console.log('empty string, enter an item');
    }
  }

  return (
    <View style={styles.main}>
      <Input setGoal={setGoal} addGoal={addGoal} toDo={toDo} />
      <ItemList toDoList={toDoList} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 50
  }
});


