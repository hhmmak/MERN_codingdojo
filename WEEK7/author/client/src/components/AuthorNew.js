import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthorForm from "./AuthorForm";
import { useState } from "react";

const AuthorNew = (props) => {

  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  //.. Create one to database
  const createAuthor = (newAuthor) => {
    axios.post("http://localhost:8000/api/author", newAuthor)
    .then(res => {
      console.log("=== res.data: ", res.data);
      navigate('/');
    })
    .catch(err => {
      console.log(err);
      setErrors(err.response.data.error.errors);  // get validation error
    });
  }

  return(
    <div>
      <Link to="/">Home</Link>
      <p>Add a author:</p>
      <AuthorForm initialAuthor={{name: ""}} submitName={createAuthor} errors={errors}/>
    </div>
  );
};

export default AuthorNew;