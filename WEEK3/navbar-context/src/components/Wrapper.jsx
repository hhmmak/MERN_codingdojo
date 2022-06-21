import {useState} from 'react';
import NameContext from '../context/NameContext';

const Wrapper = (props) => {

  const [name, setName] = useState("user")

  return (
    <div className="container-fluid" >
      <NameContext.Provider value={{name, setName}}>
        {props.children}
      </NameContext.Provider>
    </div>
  );
}
export default Wrapper;