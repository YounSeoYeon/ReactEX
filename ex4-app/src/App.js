import './App.css';
import { useState } from 'react';
import Content1 from './components/Content1';
import Content2 from './components/Content2';

// 부모자식간에만 변수 주고받을수있고 input,버튼은 못주고받음,부모한테 값주고 여기서 줘야함 

function App() {

  const [title,setTitle] = useState("오징어게임");

  //변경버튼누르면 title바뀜
  const onTitleChange=(inputValue)=>{
    setTitle(inputValue);
  }

  return (
    <div className="App">
      <br/><br/>
      <Content1 title={title}></Content1>
      <Content2 onTitleChange={onTitleChange}></Content2>
    </div>
  );
}

export default App;
