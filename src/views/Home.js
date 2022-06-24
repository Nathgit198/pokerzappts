import React from "react";
import Navbar from "../components/Navbar";
import {
  Section,
  Pikachu,
  Pokebola,
  PokebolaRocket,
} from "../styled/home-style";

const Home = () => {
  const pokemonImage = "../pokemon.svg";
  const pokebola = "../pokebola.svg";
  const pokebolaRocket = "../pokebola-rocket.svg";

  return (
    <div>
      <Navbar />
      <Section>
        <div>
          <h1>Escolha um pokemon</h1>
          <p>...</p>
          <a href="/pokemons"><button>Veja os pokemons</button></a>
        </div>
        <div>
          <Pikachu alt="pikachu image" src={pokemonImage} />
          <Pokebola alt="pokebola" src={pokebola} />
          <PokebolaRocket alt="pokebola equipe rocket" src={pokebolaRocket} />
        </div>
      </Section>
    </div>
  );
};

export default Home;
