import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const Item = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.9} onPress={props.onDelete}>
            <LinearGradient colors={['#9cecfb', '#65c7f7', '#0052d4']} 
            style={styles.toDoItem} 
            start={[0.0, 0.5]} 
            end={[1.0, 0.5]}>
                <Text>{props.title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    toDoItem: {
        padding: 10,
        margin: 5,
        backgroundColor: '#ccc',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center'
      },

})

export default Item
