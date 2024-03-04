import { useState } from 'react';
import PresentationPokedex from './components/PresentationPokedex.jsx';
import PokedexHeader from './components/PokedexHeader.jsx';
import Newsletter from './components/Newsletter.jsx';

function App() {
  return (
    <div>
      <h1>POKEDEX</h1>
      <PresentationPokedex />
      <Newsletter />
    </div>
  );
}

export default App;

