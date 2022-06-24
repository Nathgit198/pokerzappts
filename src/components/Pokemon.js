import React from "react";
import {
  CardTop,
  PokemonCard,
  PokemonBody,
  PokemonType,
  PokemonImage,
  CardBody,
  Text
} from "../styled/pokemon-style";

const Pokemon = (props) => {
  const { pokemon } = props;

  return (
    <PokemonCard>
    <Text>#{pokemon.id}</Text>
    <PokemonBody>
      <PokemonImage>
        <img
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          className="pokemon-image"
        />
      </PokemonImage>
      <CardBody>
        <CardTop> {pokemon.name} </CardTop>
        <div className="card-type">
          {pokemon.types.map((type, index) => {
            return <PokemonType key={index}>{type.type.name}</PokemonType>;
          })}
        </div>
      </CardBody>
    </PokemonBody>
    </PokemonCard>
  );
};

export default Pokemon;