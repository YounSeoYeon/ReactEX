import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Join from './components/Join';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/"><button>홈</button></Link></li>
        <li><Link to="/login"><button>로그인</button></Link></li>
        <li><Link to="/join"><button>회원가입</button></Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/ >}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/join" element={<Join/>}/>
      </Routes>
    </div>
  );
}

export default App;
