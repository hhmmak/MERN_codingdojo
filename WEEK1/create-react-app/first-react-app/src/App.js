import './App.css';

const Header = () => {
  return (
    <h1> Hello Dojo!</h1>
  );
};

const Content =(props) => {
  return (
    <>
      <h3>Things I need to do:</h3>
      <ul>
        <li>Learn React</li>
        <li>Climb Mt. Everest</li>
        <li>Run a marathon</li>
        <li>Feed the dogs</li>
      </ul>
    </>
  );
};

function App() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}

export default App;
