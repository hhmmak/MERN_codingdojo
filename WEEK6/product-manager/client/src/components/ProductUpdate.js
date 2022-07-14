import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from './ProductUpdate.module.css';

const ProductUpdate = (props) => {

  const {id} = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${id}`)
      .then(res => {
        setTitle(res.data.product.title);
        setPrice(res.data.product.price);
        setDescription(res.data.product.description);
      })
      .catch(err => console.log(err));  
  }, [])

  const onUpdateHandler = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:8000/api/product/${id}`, {
      title,
      price,
      description
    })
      .then(res => navigate('/'))
      .catch(err => console.log(err));
  };
  

  return(
    <div className={styles.formContainer}>
      <form onSubmit={onUpdateHandler}>
      <div className={styles.formDiv}>
          <label>Title</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
        </div>
        <div className={styles.formDiv}>
          <label>Price</label>
          <input type="text" onChange={(e) => setPrice(e.target.value)} value={price}/>
        </div>
        <div className={styles.formDiv}>
          <label>Description</label>
          <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}/>
        </div>
        <div className={styles.formSubmit}>
          <input type="submit" value="Update" className={styles.submitBtn}/>
        </div>
      </form>
    </div>
  );
};

export default ProductUpdate;