import React, { useState } from 'react';
import { StyleSheet, View, Button} from 'react-native';
import ItemList from './components/ItemList';
import Input from './components/Input'

export default function App() {

  const [backgroundColor, changeBackgroundColor] = useState('#fff');
  const [colourText, changeColourText] = useState('Enter a Colour');
  const [toDo, setToDo] = useState('');
  const [toDoList, setToDoList] = useState([]);
  const [modalVis, setModalVis] = useState(false);

  const setGoal = (text) => {
    setToDo(text);
  }

  const addGoal = () => {
    if (toDo !== '' ) {
      setToDoList(currentList => [...currentList, { key: (currentList.length + 1).toString(), val: toDo }]);
      setToDo('');
    } else {
      console.log('empty string, enter an item');
    }
    console.log(toDoList)
    setModalVis(false);
  }

  const removeGoal = goalId => {
    setToDoList(currentList => {
      return currentList.filter(each => each.key !== goalId)
    })
  }

  const toggleModal = (val) => {
    setModalVis(val);
  }

  return (
    <View style={styles.main}>
      <Button title="+" onPress={() => toggleModal(true)}></Button>
      <Input setGoal={setGoal} addGoal={addGoal} toDo={toDo} modalVis={modalVis} />
      <ItemList toDoList={toDoList} onRemove={removeGoal}/>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 50
  }
});


