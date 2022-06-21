import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Form from './components/Form';

function App() {

  const [list, setList] = useState([]);

  return (
    <div className="App container">
      <Form todoList={ list } addList={ setList }/>
      <Display todoList={ list } updateList ={ setList }/>
    </div>
  );
}

export default App;
