import React, { useState } from 'react'
import style from '../ListItem.module.css'

const ListItem = ({ item, onDelete, onDone, onImportant}) => {
  return (
    <li className="list-group-item">
      <span className={style.headerText}>
        chpok
      </span>
      <span className={`todo-list-item ${item.done ? 'done' : ''} ${item.important ? 'important' : ''}`}>
        <span onClick={() => onDone(item.id)} className="todo-list-item-label">{item.title}</span>
        <button onClick={() => onImportant(item.id)} type="button" className="btn btn-outline-success btn-sm float-end">
          <i className="fa fa-exclamation"></i>
        </button>
        <button onClick={() => onDelete(item.id)} type="button"
          className="btn btn-outline-danger btn-sm float-end">
          <i className="fa fa-trash"></i>
        </button>
      </span>
    </li>
  )
}

export default ListItem