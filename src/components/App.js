import React, { useState } from 'react'

// import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './Header';
import Search from './Search'
import Filter from './Filter';

import List from './List'
import AddItem from './AddItem'



const App = () => {

    const initialData = [
        { id: 1, title: 'To drink coffee', done: true, important: true },
        { id: 2, title: 'To wash car', done: true, important: false },
        { id: 3, title: 'To do app', done: true, important: false },
    ]
    const [tasks, setTasks] = useState(initialData);
    const [filter, setFilter] = useState(0);
    const [value, setValue] = useState('');

    const ImportantHandler = (id) => {
        const ind = tasks.findIndex(item => {
            return item.id == id;
        })
    
        let newTasks = [...tasks];
        newTasks[ind].important = !newTasks[ind].important;
        setTasks(newTasks)
    }

    const doneHandler = (id) => {
            const ind = tasks.findIndex(item => {
                return item.id == id;
            });
    
            let newTasks = [...tasks];
            newTasks[ind].done = !newTasks[ind].done;
        setTasks(newTasks);
        }

    const deleteItemHandler = (id) => {
            const ind = tasks.findIndex(item => {
                return item.id == id;
            });
        
            let newTasks = [...tasks];
            newTasks.splice(ind, 1);
            setTasks(newTasks);
        }

    const done = tasks.reduce((count, item) => {
            if (item.done == true) {
                return count + 1
            } else {
                return count
            }
        }, 0)

    const todo = tasks.length - done;

    const addItemHandler = (title) => {
        const id = tasks[tasks.length-1].id + 1;
        const newTask = { id: id, title: title, done: false, important: false };
        const newTasks = [...tasks];
        newTasks.push(newTask);
        setTasks(newTasks);
    }

    const filterHandler = (type = 0, value = '') =>{
        let filteredTasks;
        switch (type) {
            case 0:
                filteredTasks = tasks.filter((el) => {
                    return el.title.toLowerCase().includes(value.toLowerCase());
                })
            case 1:      
                filteredTasks = tasks.filter((el) => {
                    return el.done == false && el.title.toLowerCase().includes(value.toLowerCase());
                })
                return filteredTasks
            case 2:     
                filteredTasks = tasks.filter((el) => {
                    return el.done == true && el.title.toLowerCase().includes(value.toLowerCase()); 
                })
                return filteredTasks;
        }
    }

    const filteredTasks = filterHandler(filter,value)

    return (
    <div className="todo-app">
    
        <Header todo = {todo} done={done}/>
        <div className="top-panel d-flex">
            <Search onSearch={(value) =>{setValue(value)}}/>
            <Filter onFilter={(type)=> {setFilter(type)}} />
        </div>
    {/*<Search onFilter={(type)=> filterHandler(type)}/>*/}
        <List onImportant={(id) => ImportantHandler(id)} 
        tasks={filteredTasks} 
        onDone={(id) => doneHandler(id)}
        onDelete={(id) => deleteItemHandler(id)}
        />
        <AddItem onAdd={(title)=> addItemHandler(title)}/>
    </div>
    )
}
export default App;