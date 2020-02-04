import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [backgroundColor, changeBackgroundColor] = useState('#fff');
  const [colourText, changeColourText] = useState('Enter a Colour');
  const [toDo, setToDo] = useState('');
  const [toDoList, setToDoList] = useState([]);

  const setGoal = (text) => {
    setToDo(text);
  }

  const addGoal = () => {
    setToDoList(currentList => [...currentList, toDo]);
    console.log(toDo);
  }

  return (
    <View style={styles.main}>
      <View style={styles.inputView}>
        <TextInput placeholder="Enter a Goal" style={styles.textInput} onChangeText={setGoal} value={toDo} />
        <Button title="Add" onPress={addGoal} />
      </View>
      <View>
        {toDoList.map((goal) => {
          return (
              <View style={styles.toDoItem}>
                <Text>{goal}</Text>
              </View>
            )

        })}
      </View>
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
  },
  toDoItem: {
    padding: 10,
    margin: 5,
    backgroundColor: '#ccc',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1
  }
});


