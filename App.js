import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [text, changeText] = useState('Open up App.js to start working on your app!');
  const [backgroundColor, changeBackgroundColor] = useState('#fff');
  const [colourText, changeColourText] = useState('Enter a Colour');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button title="Change Text" onPress={() => changeText('New Text!') }/>
      <Button title="Change Background" onPress={ () => changeBackgroundColor(colourText)} />
      <TextInput
      style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => changeColourText(text.toLowerCase())}
      value={colourText}
      />
    </View>
  );
}


