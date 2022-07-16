import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import AuthorForm from "./AuthorForm";


const AuthorUpdate = (props) => {

  const navigate = useNavigate();

  const {id} = useParams();

  const [author, setAuthor] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/author/${id}`)
      .then(res => {
        setAuthor(res.data.author);
        setLoaded(true);
      })
      .catch(err => { console.log(err); });   
  }, [id, author])

  //.. Update one to database
  const updateAuthor = (newAuthor) => {

    axios.put(`http://localhost:8000/api/author/${id}`, newAuthor)
      .then(res => navigate(`/`))
      .catch(err => {
        console.log(err);
        setErrors(err.response.data.error.errors);  // get validation error
      });
  }

  return(
    <div>
      <Link to="/">Home</Link>
      <p>Edit this author:</p>
      {loaded &&
        <AuthorForm initialAuthor={author} submitName={updateAuthor} errors={errors}/>
      }
    </div>
  );
};

export default AuthorUpdate;