import { useState } from 'react';
import PresentationPokedex from './components/PresentationPokedex.jsx';
import PokedexHeader from './components/PokedexHeader.jsx';
import Newsletter from './components/Newsletter.jsx';
import PokemonStarters from './components/PokemonStarters.jsx';

function App() {
  return (
    <>
      <h1>POKEDEX</h1>
    <div>
      <PresentationPokedex />
      <Newsletter />
      <PokemonStarters />
    </div>
    </>
  );
}

export default App;

