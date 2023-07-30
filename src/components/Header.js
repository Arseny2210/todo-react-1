import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from '../Header.module.css' 
import '../Header.css'

const Header = ({todo, done}) => {
    console.log(styles)
    return (
        <div className="app-header d-flex">
            <h2 className='test'>
                Header2
            </h2>
            <h1 className={styles.headerText}>
                <span className={styles.innerText}>
                    My Todo List
                </span>    
            </h1>
            <h2>{todo} more to do, {done} done</h2>
        </div>
    );
}

export default Header;