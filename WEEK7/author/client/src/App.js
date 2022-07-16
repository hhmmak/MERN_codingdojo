import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AuthorList from './components/AuthorList'
import AuthorNew from './components/AuthorNew';
import AuthorUpdate from './components/AuthorUpdate';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <h1>Favorite Authors</h1>
        <Routes>
          <Route path="/" exact element={<AuthorList />} />
          <Route path="/new" element={<AuthorNew />} />
          <Route path="/edit/:id" element={<AuthorUpdate />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
