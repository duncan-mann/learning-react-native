import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [backgroundColor, changeBackgroundColor] = useState('#fff');
  const [colourText, changeColourText] = useState('Enter a Colour');

  const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


  return (
    <View style={styles.main}>
      <Text>React Native To Do List</Text>
    </View>
  );
}


