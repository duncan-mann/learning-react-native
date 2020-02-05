import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const Item = (props) => {
    return (
        <LinearGradient colors={['#9cecfb', '#65c7f7', '#0052d4']} style={styles.toDoItem}>
            <Text>{props.title}</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    toDoItem: {
        padding: 10,
        margin: 5,
        backgroundColor: '#ccc',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center'
      },

})

export default Item
