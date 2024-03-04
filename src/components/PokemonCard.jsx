import React from 'react';

const PokemonCard = ({ name, image }) => {
  return (
    <div className="pokemon-card">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export default PokemonCard;