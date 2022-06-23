import { useState, useEffect } from "react";
import axios from 'axios'; // added for Axios Pokemon API


const List = () => {
  
  const [pokemonList, setPokemonList] = useState([]);

  useEffect( () => {
    console.log(`at useEffect for fetch API`)
    // retrieve API via fetch API -- Pokemon API
    // fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
    //   .then(response => response.json())
    //   .then(response => setPokemonList(response.results.map( (item) => item.name )));

    // retrieve API via axios API -- Axios Pokemon API
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
      .then(response => setPokemonList(response.data.results.map( (item) => item.name )));

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