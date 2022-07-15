import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import styles from './ProductList.module.css';

const ProductList = (props) => {
  
  const {products, setProducts} = props;

  const deleteProduct = (id) => {
    setProducts(products.filter( item => item._id !== id));
  };

  return (
    <div className={styles.listContainer}>
      <h2>All Product</h2>
      <table>
        <tbody>
        {
          products.map( (product, index) =>
          <tr key={index}>
            <td><Link to={`/product/${product._id}`} className={styles.links}>{product.title}</Link></td>
            <td>
              <EditButton id={product._id}/>
              <DeleteButton id={product._id} deleteCallback={() => deleteProduct(product._id)}/>
            </td>
          </tr>
          )
        }
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;