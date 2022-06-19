import React, { useState } from 'react';
import './App.css';
import BoxDisplay from './components/BoxDisplay';
import Form from './components/Form';

function App() {

  const [boxList, setBoxList] = useState([]);

  const addBox = (newColor, newHeight, newWidth) => {
    setBoxList([...boxList, {backgroundColor: newColor, height: `${Math.round(newHeight)}00px`, width: `${Math.round(newWidth)}00px`}])
  };

  //

  return (
    <div className="App">
      <Form onFormSubmit={ addBox } />
      <BoxDisplay boxList = { boxList } />
    </div>
  );
}

export default App;
