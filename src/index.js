import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'
import './index.css'

// const App2 = () => {
//   const [count, setCount] = useState(10);
//   // setInterval(() => {setCount(count-1)}, 1000)

//   // useEffect(()=> {

//   //   let id = setInterval(()=> 
//   //   {setCount((prev) => prev -1)}, 2000)
//   //       console.log(id)
//   // }, []);

//   const clickHandler = () => {
//     setCount((prev) => prev -1);
//     // 
//     setCount((prev) => prev +2);
//   }

//   return (
//     <h1 onClick={clickHandler}>{count}</h1>
//   )
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
  // <App2/>
);