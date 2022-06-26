import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Word from './components/Word';
import Color from './components/Color';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route path='/:word' element={<Word />} />
          <Route path='/:word/:colorFont/:colorBg' element={<Color />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
