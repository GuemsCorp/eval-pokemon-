// import { useState } from 'react';
// function Starters(){
//     return(
//     <div>
//         <h2>Starters Pokémon</h2>
//         <div>
//             <h3>Rouge et Bleu</h3>
//             <p>Bulbizarre, Salamèche, Carapuce</p>
//         </div>
//         <div>
//             <h3>Or et Argent</h3>
//             <p>Germignon, Héricendre, Kaiminus</p>
//         </div>
//         <div>
//             <h3>Rubis et Saphir</h3>      
//             <p>Arcko, Poussifeu, Gobou</p>
//         </div>
//     </div>
//     );
// } 

//export default Starters; 
import React from 'react';
import PokemonCard from './PokemonCard';

const generations = [
  {
    generation: "rouge et bleu",
    pokemons: [
      {
        id: 1,
        name: "Bulbizarre",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
      },
      {
        id: 2,
        name: "Salamèche",
        image: "https://www.pokepedia.fr/images/8/89/Salam%C3%A8che-RFVF.png"
      },
      {
        id: 3,
        name: "Carapuce",
        image: "https://www.pokepedia.fr/images/c/cc/Carapuce-RFVF.png"
      }
    ]
  },
  {
    generation: "Or et Argent",
    pokemons: [
      {
        id: 4,
        name: "Germignon",
        image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png",
      },
      {
        id: 5,
        name: "Héricendre",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png",
      },
      {
        id: 6,
        name: "Kaiminus",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/158.png",
      }
    ]
  },
  {
    generation: "Rubis et Saphir",
    pokemons: [
      {
        id: 7,
        name: "Arcko",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/252.png",
      },
      {
        id: 8,
        name: "Poussifeu",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/255.png",
      },
      {
        id: 9,
        name: "Gobou",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/258.png",
      }
    ]
  }
];

const PokemonStarters = () => {
  return (
    <div>
      <h2>Starters Pokémon</h2>
      {generations.map((generation, index) => (
        <div key={index}>
          <h3>{generation.generation}</h3>
          <div>
            {generation.pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} name={pokemon.name} image={pokemon.image} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PokemonStarters;