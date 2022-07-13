import { useState } from "react";
import NewProductForm from '../components/NewProductForm';
import ProductList from '../components/ProductList';
import Header from '../components/Header';

const Main = () => {

  const [products, setProducts] = useState([]);

  return (
    <div>
      <Header />
      <NewProductForm products={products} setProducts={setProducts} />
      <hr />
      <ProductList products={products} setProducts={setProducts} />
    </div>
  );
};

export default Main;