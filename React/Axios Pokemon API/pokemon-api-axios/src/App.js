import logo from './logo.svg';
import { useState } from "react"
import axios from "axios"
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([])
  const Pokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => {
        //! the data of the Response you always will find it in .data
        console.log(response.data.results)
        setPokemon(response.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div className="App">
    <h1>pokemon </h1>
    <button onClick={Pokemon}>fetch pokemon</button>
 

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
