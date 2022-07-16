import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import './AuthorList.css';

const AuthorList = (props) => {

  const navigate = useNavigate();

  const [authors, setAuthors] = useState([]);

  //.. Read all from database
  useEffect( () => {
    axios.get("http://localhost:8000/api/author")
      .then (res => {setAuthors(res.data.author); })
      .catch(err => console.log("=== GET author: ", err));
  }, [authors]);

  //.. Delete from database
  const deleteAuthor = (id) => {
    axios.delete(`http://localhost:8000/api/author/${id}`)
      .then( res => setAuthors(authors.filter(author => author._id !== id)) )
      .catch( err => console.log(err) );
  }

  return(
    <>
      <Link to="/new">Add an Author</Link>
      <p>We have quotes by:</p>
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Actions available</th>
          </tr>
        </thead>
        <tbody>
          {
            authors.map( (author, index) =>
              <tr key={index} style={{"backgroundColor": index % 2? "#eee":"#fff"}}>
                <td>{author.name}</td>
                <td className="actionButtons">
                  <button onClick={() => navigate(`/edit/${author._id}`)}>Edit</button>
                  <button onClick={() => deleteAuthor(author._id)}>Delete</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  );
};

export default AuthorList;