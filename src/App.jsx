import React, {useEffect, useState} from "react"
import './App.css'
import NavBar from "./components/NavBar"
import PokemonsHome from "./components/PokemonsHome";
import Pokemon from "./components/Pokemon";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const typeColors = {
    normal: "#A8A878",
    fire: "#F08030",
    water: "#6890F0",
    electric: "#F8D030",
    grass: "#78C850",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    fairy: "#EE99AC",
};

  const max_pokemon = 150;
  let url = `https://pokeapi.co/api/v2/pokemon`;

  const [loading, setLoading] = useState(false)
  const [pokemon, setPokemon] = useState([])  

  const [pokemonName, setPokemonName] = useState('');

  useEffect(() => {
    const getPokemon = (async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}?limit=${max_pokemon}`);
      if(!response.ok) {
        throw new Error('Network response was not OK');
      }
      const result = await response.json();
      const pokemonDetails = await Promise.all(
        result.results.map( async (pokemon) => {
          const newResponse = await fetch(pokemon.url);
          return newResponse.json();
        })
      )
      setPokemon(pokemonDetails)
    }
    catch(error) {
      console.error("There has been a problem with your fetch operation:", error)
    }
    finally {
      setLoading(false);
    }
    })();
  }, [])

  const handleChange = (e) => {
    setPokemonName(e.target.value)
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <>
        <NavBar name={pokemonName} handleChange={handleChange} />
        <PokemonsHome 
        pokemon={pokemon}
        pokemonName={pokemonName}
        loading={loading}
        typeColors={typeColors}
      />
      </>
    },
    {
      path: '/pokemon/:id',
      element: <Pokemon
         pokemon={pokemon}
         typeColors={typeColors}
         />
    }
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
