import { useState, useEffect } from "react";
import axios from "axios";

import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import Header from '../components/Header';

const Main = () => {

  const [products, setProducts] = useState([]);

  //.. Get all from database
  useEffect( () => {
    axios.get("http://localhost:8000/api/product")
      .then(res => setProducts(res.data.product))
      .catch(err => console.log("=== GET product: ", err))
  }, [products]);

  //.. Create one to database
  const createProduct = (newProduct) => {
    axios.post("http://localhost:8000/api/product", newProduct)
    .then(res => {
      console.log("=== res.data: ", res.data);
      setProducts([...products, res.data]);
    })
    .catch(err => console.log("=== error: ", err));
  }

  return (
    <div>
      <Header title={"Product Manager"}/>
      <ProductForm initialProduct={{title:"", price: 0, description:""}} submitProduct={createProduct} submitValue={"Create"}/>
      <hr />
      <ProductList products={products} setProducts={setProducts} />
    </div>
  );
};

export default Main;