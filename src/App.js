import axios from 'axios';
import React, {useEffect} from 'react';
import './App.css';

function App() {

  useEffect(() => {
    const fetch = async() => {
      try {
        const res = await axios.post('https://beta.pokeapi.co/graphql/v1beta', {
          query: `query Query {
            gen1_species: pokemon_v2_pokemonspecies(
              where: { pokemon_v2_generation: { name: { _eq: "generation-i" } } }
              order_by: { id: asc }
            ) {
              name
              id
            }
          }`
      });
      const json = await res.data.data;
      const gen1 = json.gen1_species
      console.log(gen1);
      } catch (error) {
        console.log('Error: ', error);
      }
    }
    fetch()    
  }, [])

  return (
    <div className="App">
      <p>GraphQl</p>
    </div>
  );
}

export default App;
