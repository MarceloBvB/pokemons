import React from 'react';
import pokemon from './pokemon';

const PokemonGallery = () => {
  return (
    <div className="galeria">
      {pokemon.map(pokemon => (
        <div key={pokemon.id} className="pokemon-carta">
          <img src={pokemon.image} alt={pokemon.nombre} />
          <div className="pokemon-info">
            <h2>{pokemon.nombre}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PokemonGallery;
