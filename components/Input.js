import React from 'react'
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native'

const Input = (props) => {
    return (
      <Modal visible={props.modalVis} animated="slide">
        <View style={styles.inputView}>
        <TextInput placeholder="Enter a Goal" style={styles.textInput} onChangeText={props.setGoal} value={props.toDo} />
        <View style={styles.buttonContainer}>
          <Button title="Cancel" onPress={props.cancel} color='red'/>
          <Button title="Add" onPress={props.addGoal} />
        </View>
      </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    inputView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textInput: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      width: '80%',
      color: 'black'
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  });

export default Input
