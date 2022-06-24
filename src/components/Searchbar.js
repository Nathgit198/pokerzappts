import React, { useState } from "react";
import { SearchbarContainer } from "../styled/pokemon-style";

const Searchbar = (props, types) => {
  const [search, setSearch] = useState("Ponyta");
  const { onSearch } = props;

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClickHandler = () => {
    onSearch(search);
  };

  return (
    <SearchbarContainer>
      <div className="searchbar">
        <input placeholder="Pesquisar pokemon" onChange={onChangeHandler} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler}>Buscar</button>
      </div>
    </SearchbarContainer>
  );
};

export default Searchbar;
