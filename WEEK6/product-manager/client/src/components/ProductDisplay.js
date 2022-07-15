import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import styles from './ProductDisplay.module.css';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import Button from './Button';

const ProductDisplay = (props) => {

  const [product, setProduct] = useState({})
  const {id} = useParams();
  const navigate = useNavigate();

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
      <EditButton id={product._id} />
      <DeleteButton id={product._id} deleteCallback={() => navigate('/')} />
      <Button onClickCallback={e => navigate('/')} buttonValue={"Home"}/>
      
    </div>
  );
}

export default ProductDisplay;