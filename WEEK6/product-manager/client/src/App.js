import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './views/Main';
import ProductDisplay from './components/ProductDisplay';
import ProductUpdate from './components/ProductUpdate'

function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" default element={<Main />} />
      <Route path="/product/:id" default element={<ProductDisplay />} />
      <Route path="/edit/:id" default element={<ProductUpdate />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
