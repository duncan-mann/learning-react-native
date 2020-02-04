import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [text, changeText] = useState('Open up App.js to start working on your app!');
  const [backgroundColor, changeBackgroundColor] = useState('#fff');

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
      <Button title="Change Background" onPress={ () => changeBackgroundColor('blue')} />
    </View>
  );
}


