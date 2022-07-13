import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductList.module.css';

const ProductList = (props) => {

  const {products, setProducts} = props;
  
  useEffect( () => {
    axios.get("http://localhost:8000/api/product")
      .then(res => setProducts(res.data.product))
      .catch(err => console.log("=== GET product: ", err))
  }, [products]);

  return (
    <div className={styles.listContainer}>
      <h2>All Product</h2>
      <ul>
        {
          products.map( (product, index) =>
          <li key={product._id}><Link to={`/product/${product._id}`}>{product.title}</Link></li>
          )
        }
      </ul>
    </div>
  );
};

export default ProductList;