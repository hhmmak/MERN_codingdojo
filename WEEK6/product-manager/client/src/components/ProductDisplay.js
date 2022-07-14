import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './ProductDisplay.module.css';

const ProductDisplay = (props) => {

  const [product, setProduct] = useState({})
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect( () => {
    axios.get(`http://localhost:8000/api/product/${id}`)
      .then( res => setProduct(res.data.product))
      .catch( err => console.log(err) );
  }, [id]);

  const deleteProduct = () => {
    axios.delete(`http://localhost:8000/api/product/${id}`)
    .then( res => navigate('/') )
    .catch( err => console.log(err) );
  }

  return (
    <div className={styles.displayContainer}>
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <button onClick={e => navigate(`/edit/${id}`)}>Edit</button>
      <button onClick={e => navigate('/')}>Back</button>
      <button onClick={deleteProduct}>Delete</button>
    </div>
  );
}

export default ProductDisplay;