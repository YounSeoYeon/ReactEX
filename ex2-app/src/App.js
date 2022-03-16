import './App.css';
import React, { useState } from 'react';
import Content1 from './components/Content1';
import Content2 from './components/Content2';

function App() {
  let [number,setNumber] = useState(0);
  
  const onPlus = () => {
    setNumber(number+1);
  }  
  const onMinus = () => {
    if(number>0){
      setNumber(number-1);
    }
    //setNumber(number>0 ? number-1:number)
  }
  return (
    <div className="App">
      app입니다 : {number}
      <Content1 number={number}></Content1>
      <Content2 onPlus={onPlus} onMinus={onMinus}></Content2>
    </div>
  );
}

export default App;
