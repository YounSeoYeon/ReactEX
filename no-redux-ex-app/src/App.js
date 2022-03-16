import './App.css';
import React, { useState } from 'react';
import Left1 from './components/Left1';
import Right1 from './components/Right1';

function App() {
  let [state,setState] = useState(0);

  const onCountMinus = () =>{
    setState(state>0? state-1:state);
  }
  const onCountAdd = () =>{
    setState(state+1);
  }

  return (
    <div className="App">
      app입니다 : {state}
      <Left1 state={state}></Left1>
      <Right1 onCountAdd={onCountAdd} onCountMinus={onCountMinus}></Right1>
    </div>
  );
}

export default App;
