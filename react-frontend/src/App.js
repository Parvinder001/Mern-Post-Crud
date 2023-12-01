
import './App.css';
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import HomePage from './Components/HomePage.jsx';
import MainHeader from './Components/MainHeader.jsx';
import CreatePost from './Components/CreatePost.jsx';
import Editpost from './Components/Editpost.jsx';
function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
         <MainHeader/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='create-post' element={<CreatePost/>} />
      <Route path='edit-post/:id' element={<Editpost/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
