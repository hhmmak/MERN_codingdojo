import './App.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import FormWrapper from './components/FormWrapper';
import {useState} from 'react';
import NameContext from './context/NameContext';

function App() {

  const [name, setName] = useState("user")

  return (
  <Wrapper>
    <NameContext.Provider value={{name, setName}}>
      <Navbar />
      <FormWrapper />
    </NameContext.Provider>
  </Wrapper>
  );
}

export default App;
