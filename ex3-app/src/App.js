import './App.css';
import {useState} from 'react';

function App() {
  const [title,setTitle] = useState("지금 우리 학교는");
  const [inputValue,setInputValue] = useState('');

  //입력란 변경시 inputValue값 변경
  const onChange=(e)=>{
    setInputValue(e.target.value);
  }

  //변경 버튼 클릭시 입력한 값으로 title 변경
  const onTitleChange=(inputValue)=>{
    setTitle(inputValue);
  }

  return (
    <div className="App">
      제목 :{title}
      <br/><br/>
      <input type="text" value={inputValue} onChange={onChange}/> &nbsp;
      {/* 주의! 함수 호출시 파라미터 있는경우 화살표 함수로 사용!! 이렇게 안하면 오류남 */}
      <button onClick={()=>onTitleChange(inputValue)}>변경</button>
    </div>
  );
}

export default App;
