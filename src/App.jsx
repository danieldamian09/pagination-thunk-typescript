import { useEffect, useState } from 'react'
import { getPokemonsHome } from './services/getPokemonsHome'

function App() {

  const [pokemonsHome, setPokemonsHome] = useState([])


  useEffect(() => {
    getPokemonsHome().then(pokemons => setPokemonsHome(pokemons))
  }, [])
  

  return (
    <>
      <div>
        {pokemonsHome.map(pokemon => (
          <div key={pokemon.name}>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.image} alt={pokemon.name} width="200px" />
          </div>
          ))}
      </div>
    </>
  )
}

export default App
