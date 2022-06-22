import React from "react";

const Navbar = () => {
  const logoImg =
    "https://assets.pokemon.com/assets/cms2-pt-br/img/misc/gus/buttons/logo-pokemon-79x45.png";
  return (
    <nav>
      <div>
        <img alt="pokemon-logo" src={logoImg} className="navbar-img" />
      </div>
    </nav>
  );
};

export default Navbar;
