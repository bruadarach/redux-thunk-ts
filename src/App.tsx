import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "./Store";
import { GetPokemon } from "./actions/PokemonActions";

function App() {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("");
  const pokemonState = useSelector((state: RootReducerType) => state.pokemon);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPokemonName(event.target.value);

  const handleSubmit = () => dispatch<any>(GetPokemon(pokemonName));

  console.log("pokemon state:", pokemonState);
  return (
    <div className="App">
      <h1>Search 'ditto'</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={handleSubmit}>Search</button>
      {pokemonState.pokemon && (
        <div>
          <img
            src={pokemonState.pokemon.sprites.front_default}
            alt="pokemon-image"
          />
          {pokemonState.pokemon.abilities.map((ability, idx) => {
            return <p key={idx}>{ability.ability.name}</p>;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
