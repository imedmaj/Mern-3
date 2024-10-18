import logo from './logo.svg';
import { useState } from "react"
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([])
  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => {
        return response.json()
      })
      .then(newResponse => {
        console.log(newResponse.results)
        setPokemon(newResponse.results)
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="App">
    <h1>superheroes 🦸🦸‍♂️🦹🦹‍♂️</h1>
    <button onClick={fetchPokemon}>fetch pokemon</button>
 

    <hr />
    {/* {JSON.stringify(heroes)} */}
    <table>
      <thead>
        
        <th>Names</th>
        
      </thead>
      <tbody>
          {
            pokemon.map((pokemon) => {
              return <tr key={pokemon.id}>
               
                <td>{pokemon.name}</td>
              
              </tr>
            })
          }

        </tbody>
    </table>


  </div>
  );
}

export default App;
