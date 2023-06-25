import React, { useState } from 'react'

// import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './Header';
import Search from './Search'
import List from './List'
import AddItem from './AddItem'



const App = () => {
    const [done, setDone] = useState(0)

    const getTasksHandler = (tasks) => {


        const count = tasks.reduce((count,item)=> {
            if (item.done == true) {
                console.log(count);
                return count + 1 
            } else {
                return count
            }
        }, 0)

        setDone(count);
    }

    return (
    <div className="todo-app">
        <Header todo = {3} done={done}/>
        <Search/>
        <List getTasks={(tasks)=> getTasksHandler(tasks)}/>
        <AddItem/>
    </div>
    )
}
export default App;