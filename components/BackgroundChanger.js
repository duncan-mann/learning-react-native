import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function BackgroundChanger(props) {

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: props.backgroundColor.toLowerCase(),
          alignItems: 'center',
          justifyContent: 'center',
        },
      });

    return (
        <View style={styles.container}>
        <Text>Pick a background color!</Text>
        <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => props.changeColourText(props.text)}
        value={props.colourText}
        />
        <Button title="Change Background" onPress={ () => props.changeBackgroundColor(props.colourText)} />
        </View>
    )
}