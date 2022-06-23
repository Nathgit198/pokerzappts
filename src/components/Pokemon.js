import React from "react";
import { CardTop, PokemonCard, PokemonType, PokemonImage, CardBody } from "../styles";

const Pokemon = (props) => {
  const { pokemon } = props;

  return (
    <PokemonCard>
      <PokemonImage>
        <img
            alt={pokemon.name}
            src={pokemon.sprites.front_default}
            className="pokemon-image"
        />
        <div>#{pokemon.id}</div>
      </PokemonImage>
      <CardBody>
        <CardTop> {pokemon.name} </CardTop>
          <div className="card-type">
            {pokemon.types.map((type, index) => {
              return (
                <PokemonType key={index}>
                  {type.type.name} 
                </PokemonType>
              );
            })}
          </div>
      </CardBody>
    </PokemonCard>
  );
};

export default Pokemon;
