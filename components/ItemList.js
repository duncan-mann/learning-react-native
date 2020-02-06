import React from 'react'
import { FlatList } from 'react-native'
import Item from './Item'

const ItemList = (props) => {
    return (
        <FlatList 
        data={props.toDoList} 
        renderItem={itemData => {
          return (
        <Item title={itemData.item.val} onDelete={() => props.onRemove(itemData.item.key)} />
      )}}>
      </FlatList>
    )
}

export default ItemList
