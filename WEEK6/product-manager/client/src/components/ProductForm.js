import styles from './ProductForm.module.css';
import {useState} from 'react';
// import {useEffect} from 'react'; //test if post requiest is working
const ProductForm = (props) => {

  const {initialProduct, submitProduct, submitValue} = props;

  const [title, setTitle] = useState(initialProduct.title)
  const [price, setPrice] = useState(initialProduct.price)
  const [description, setDescription] = useState(initialProduct.description)

  const onSubmitHandler = (e) => {
    e.preventDefault();
    submitProduct({title, price, description});
  }

  return(
    <div className={styles.formContainer}>
      <form onSubmit={onSubmitHandler}>
        <div className={styles.formDiv}>
          <label>Title</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
        </div>
        <div className={styles.formDiv}>
          <label>Price</label>
          <input type="number" onChange={(e) => setPrice(e.target.value)} value={price}/>
        </div>
        <div className={styles.formDiv}>
          <label>Description</label>
          <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}/>
        </div>
        <div className={styles.formSubmit}>
          <input type="submit" value={submitValue} className={styles.submitBtn} />
        </div>
      </form>
    </div>
  );
}

export default ProductForm;