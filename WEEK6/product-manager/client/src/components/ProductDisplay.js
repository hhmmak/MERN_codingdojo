import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductDisplay.module.css';

const ProductDisplay = (props) => {

  const [product, setProduct] = useState({})
  const {id} = useParams();

  useEffect( () => {
    axios.get(`http://localhost:8000/api/product/${id}`)
      .then( res => setProduct(res.data.product))
      .catch( err => console.log(err) );
  }, [id]);

  return (
    <div className={styles.displayContainer}>
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
}

export default ProductDisplay;