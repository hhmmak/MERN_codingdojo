import styles from './NewProductForm.module.css';
import axios from 'axios';
import {useState} from 'react';
// import {useEffect} from 'react'; //test if post requiest is working
const NewProductForm = (props) => {

  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  
// test if post request is working
  // const [products, setProducts] = useState([]);
  // const [change, setChange] = useState(true);

  // useEffect( () => {
  //   axios.get("http://localhost:8000/api/product")
  //     .then(res => setProducts(res.data.product))
  //     .catch(err => console.log("=== GET product: ", err))
  // }, [change])

  const onClickHandler = (e) => {
    e.preventDefault();
    
    axios.post("http://localhost:8000/api/product", {
      title,
      price,
      description
    })
    .then(res => {
      console.log("=== res", res);
      console.log("=== res.data", res.data);
      // setChange(!change); // test if post requiest is working
    })
    .catch(err => console.log("=== POST people:", err));
  }

  return(
    <div className={styles.formContainer}>
      <form>
        <div className={styles.formDiv}>
          <label>Title</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className={styles.formDiv}>
          <label>Price</label>
          <input type="text" onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className={styles.formDiv}>
          <label>Description</label>
          <input type="text" onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className={styles.formSubmit}>
          <input type="submit" value="Create" className={styles.submitBtn} onClick={onClickHandler} />
        </div>
      </form>
{/* test if POST is working */}
      {/* <table>
        <tbody>
        {
          products.map( (product, index) =>
          <tr key={index}>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
          </tr>
          )
          }
        </tbody>
      </table> */}
    </div>
  );
}

export default NewProductForm;