import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Item = (props) => {
    return (
        <View style={styles.toDoItem}>
            <Text>{props.title}</Text>
      </View>
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
      }
})

export default Item
