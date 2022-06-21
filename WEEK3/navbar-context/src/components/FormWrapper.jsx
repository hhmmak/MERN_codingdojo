import {useContext} from 'react';
import NameContext from '../context/NameContext';

const FormWrapper = () => {
  
  const formName = useContext(NameContext);
  
  return (
    <div className="m-3" >
      <form>
        <div className="row g-3 align-items-center" >
          <label className="col-auto col-form-label">Your Name:</label>
          <div className="col-auto"><input type="text" onChange={ (e) => formName.setName(e.target.value)} className="form-control" /></div>
        </div>
      </form>
    </div>
  )
}
export default FormWrapper;