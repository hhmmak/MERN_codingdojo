import axios from "axios";

import Button from "./Button";

const DeleteButton = (props) => {
  
  const {id, deleteCallback} = props;

  const deleteItem = (id) => {
    axios.delete(`http://localhost:8000/api/product/${id}`)
      .then( res => deleteCallback(res) )
      .catch( err => console.log(err) );
  }

  return(
    <Button onClickCallback={e => deleteItem(id)} buttonValue={"Delete"} />
  );

}

export default DeleteButton;