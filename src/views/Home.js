import React from "react";
import Navbar from "../components/Navbar";
import {
  Section,
  Pikachu
} from "../styled/home-style";

const Home = () => {
  const pokemonImage = "../Pokemon-image.svg";

  return (
    <div>
      <Navbar />
      <Section>
        <div>
          <h1>Escolha um pokemon</h1>
          <a href="/pokemons"><button>Veja os pokemons</button></a>
        </div>
        <div>
          <Pikachu alt="pikachu image" src={pokemonImage} />
        </div>
      </Section>
    </div>
  );
};

export default Home;
