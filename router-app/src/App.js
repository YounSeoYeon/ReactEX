import {Link,Route,Routes} from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Movie from './components/Movie';
import MovieInfo from './components/MovieInfo';
function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/">홈으로 이동</Link></li>
        <li><Link to="/about">about으로 이동</Link></li>
        <li><Link to="/movieinfo">movie이동</Link></li>
        <li><Link to="/movie/king">킹스맨</Link></li>
        <li><Link to="/movie/spider">스파이더맨</Link></li>
        <li><Link to="/movie/squid">오징어게임</Link></li>
        <li><a href="https://www.naver.com">네이버</a></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/movieinfo" element={<MovieInfo/>}/>
        <Route path="/movie/:keyword" element={<Movie />}/>
      </Routes>
    </div>
  );
}

export default App;
