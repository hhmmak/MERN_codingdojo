import './AuthorForm.css';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AuthorForm = (props) => {

  const navigate = useNavigate();

  const {initialAuthor, submitName, errors} = props;
  const [name, setName] = useState(initialAuthor.name)

  const onSubmitHandler = (e) => {
    e.preventDefault();
    submitName({name});
  }

  return(
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>Name:</label>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
          { errors.name &&
            <p className='errorMsg'>{errors.name.message}</p>
          }
        </div>
        <div className={'formButtons'}>
          <button type="button" onClick={() => navigate('/')}>Cancel</button>
          <button type="submit" value={"Submit"}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AuthorForm;