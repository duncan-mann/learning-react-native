import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [backgroundColor, changeBackgroundColor] = useState('#fff');
  const [colourText, changeColourText] = useState('Enter a Colour');

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


  return (
    <View style={styles.main}>
      <View style={styles.inputView}>
        <TextInput placeholder="Enter a Goal" style={styles.textInput} />
        <Button title="Add" />
      </View>
      <View>

      </View>
    </View>
  );
}


