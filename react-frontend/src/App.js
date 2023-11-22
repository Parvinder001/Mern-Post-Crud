import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import HomePage from './Components/HomePage.jsx';
import MainHeader from './Components/MainHeader.jsx';
import CreatePost from './Components/CreatePost.jsx';
function App() {
  return (
    <div className="App">
      <MainHeader/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='create-post' element={<CreatePost/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
