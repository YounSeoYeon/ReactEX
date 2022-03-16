import React,{ useState } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  //state는 변수와 함수포함된거라고 보면됨(같이 묶어서사용가능) / 얘를 app.js에서 쓸때는 그냥 쓰면됨 
  //->헤더(다른데서)쓸때는 전달이안됨 상위-하위 app에서 받아와야함-props사용-밑에 헤더에 쓴거처럼 하면 전달됨,하위에서받아줘야함
  //배열반환 = useState(초기값);

  let [number,setNumber] = useState(0);

  //+버튼 클릭했을때 호출되는 함수
  //number값을 1 증가하는 일 수행
  const onAdd = () =>{
    //state값을 변경 할때는 반드시 setter를 사용해야 함 : setNumber()
    setNumber(number + 1);
  }
  return (
    <div className="App">
      app입니다 : {number} &nbsp;
      {/* {onClick={함수명}} */}
      <button onClick={onAdd}>+</button>
      <Header number={number}></Header> 
      <Content onAdd={onAdd}></Content>
    </div>
  );
}

export default App;
