import Main from './views/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDisplay from './components/ProductDisplay';

function App() {
  
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" default element={<Main />} />
      <Route path="/product/:id" default element={<ProductDisplay />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
