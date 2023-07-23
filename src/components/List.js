import React, { useState } from 'react'
// import React from 'react'
import ListItem from './ListItem'


const List = ({tasks, onImportant, onDone, onDelete}) => {
  

  const styles = {
    color: "black",
    fontWeight: "normal"
  }

  const items = tasks.map((item) => (
    <ListItem
      key={item.id}
      item={item}
      onDone={(id) => onDone(id)}
      onImportant={(id) => onImportant(id)}
      onDelete={(id) => onDelete(id)}
    />
  ))
  return (
    <ul className="list-group todo-list">
      {items}
    </ul>
  )
}

export default List