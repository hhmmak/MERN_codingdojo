import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Header from "./Header";
import ProductForm from "./ProductForm";

const ProductUpdate = (props) => {

  const {id} = useParams();

  const [loaded, setLoaded] = useState(false);
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${id}`)
      .then(res => {
        setProduct(res.data.product);
        setLoaded(true);
      })
      .catch(err => console.log(err));  
  }, [id, product])

  const updateProduct = (newProduct) => {

    axios.put(`http://localhost:8000/api/product/${id}`, newProduct)
      .then(res => navigate(`/product/${id}`))
      .catch(err => console.log(err));
  }
  

  return(
    <>
      <Header title={"Update Product"} />
      {loaded &&
        <ProductForm initialProduct={product} submitProduct={updateProduct} submitValue={"Update"}/>
      }
    </>
  );
};

export default ProductUpdate;