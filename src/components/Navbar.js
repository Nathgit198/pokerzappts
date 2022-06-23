import React from "react";
import { Nav } from "../styles";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const logoImg =
    "https://assets.pokemon.com/assets/cms2-pt-br/img/misc/gus/buttons/logo-pokemon-79x45.png";
  return (
    <Nav>
      <div>
        <img alt="pokemon-logo" src={logoImg} className="navbar-img" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pokemons">Pokemons</Link>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;
