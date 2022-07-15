import { useNavigate } from "react-router-dom";
import Button from "./Button";

const EditButton = (props) => {
  
  const navigate = useNavigate();
  
  const {id} = props;

  return (
    <Button onClickCallback={e => navigate(`/edit/${id}`)} buttonValue={"Edit"} />
  );
}

export default EditButton;