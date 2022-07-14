import axios from 'axios';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './ProductList.module.css';

const ProductList = (props) => {

  const {products, setProducts} = props;
  const navigate = useNavigate();
  
  useEffect( () => {
    axios.get("http://localhost:8000/api/product")
      .then(res => setProducts(res.data.product))
      .catch(err => console.log("=== GET product: ", err))
  }, [products]);

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:8000/api/product/${id}`)
      .then( res => setProducts(products.filter( item => item._id !== id)) )
      .catch( err => console.log(err) );
  }

  return (
    <div className={styles.listContainer}>
      <h2>All Product</h2>
      <ul>
        {
          products.map( (product, index) =>
          <li key={index}>
            <Link to={`/product/${product._id}`}>{product.title}</Link>
            <button onClick={e => navigate(`/edit/${product._id}`)}>Edit</button>
            <button onClick={e => deleteProduct(product._id)}>Delete</button>
          </li>
          )
        }
      </ul>
    </div>
  );
};

export default ProductList;