import React from 'react'
import { FlatList } from 'react-native'
import Item from './Item'

const ItemList = (props) => {

  const removeItem = () => {
    props.onRemove(itemData.item.key);
  }

    return (
        <FlatList 
        data={props.toDoList} 
        renderItem={itemData => {
          return (
        <Item title={itemData.item.val} onDelete={removeItem} />
      )}}>
      </FlatList>
    )
}

export default ItemList
