import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [text, changeText] = useState('Open up App.js to start working on your app!');

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button title="Change Text" onPress={() => changeText('New Text!') }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
