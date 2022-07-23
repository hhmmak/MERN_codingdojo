import './App.css';
import PersonCard from './components/PersonCard';

function App() {

  const people = [
    {
      firstName: "Jane",
      lastName: "Doe",
      age: 19,
      hairColor: "brown"
    },
    {
      firstName: "Jack",
      lastName: "Chen",
      age: 12,
      hairColor: "grey"
    },
    {
      firstName: "Sam",
      lastName: "Cho",
      age: 23,
      hairColor: "black"
    },
  ]


  return (
    <div className="container">
      { people.map( (person, index) =>
          <PersonCard key={index} firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor}/>
        )
      }
    </div>
  );
}

export default App;
