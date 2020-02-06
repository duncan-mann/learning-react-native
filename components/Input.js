import React from 'react'
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native'

const Input = (props) => {
    return (
      <Modal>
    <View style={styles.inputView}>
        <TextInput placeholder="Enter a Goal" style={styles.textInput} onChangeText={props.setGoal} value={props.toDo} />
        <Button title="Add" onPress={props.addGoal} />
      </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
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

export default Input
