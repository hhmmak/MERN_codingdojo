import { useState, useEffect } from "react";

const List = () => {
  
  const [pokemonList, setPokemonList] = useState([]);

  useEffect( () => {
    console.log(`at useEffect for fetch API`)
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
      .then(response => response.json())
      .then(response => setPokemonList(response.results.map( (item) => item.name )))
  }, []);
  
  return (
    <div>
      <ol>
        { pokemonList.map( (pokemon, index) => 
          <li key={index}>{pokemon}</li>
        )}
      </ol>
    </div>
  )
}
export default List