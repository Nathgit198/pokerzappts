import React, { useEffect, useState } from "react";
import { getPokemonData, getPokemons, searchPokemon } from "../api";
import Navbar from "../components/Navbar";
import Pokedex from "../components/Pokedex";
import Searchbar from "../components/Searchbar";

import { GlobalStyle } from "../styled/global-style";
import { NotFoundDiv } from "../styled/pokemon-style";

function Pokemons() {

    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [notFound, setNotFound] = useState(false);
    const [loading, setLoading] = useState(false);
    const [pokemons, setPokemons] = useState([]);
  
    const itensPerPage = 25
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        const data = await getPokemons(itensPerPage, itensPerPage * page);
        const promises = data.results.map(async (pokemon) => {
          return await getPokemonData(pokemon.url);
        });
  
        const results = await Promise.all(promises);
        setPokemons(results);
        setLoading(false);
        setTotalPages(Math.ceil(data.count / itensPerPage))
      } catch (error) {
        console.log("fetchPokemons error:", error);
      }
    };
  
    useEffect(() => {
      fetchPokemons();
    }, [page]);
  
    const onSearchHandler = async (pokemon) => {
      if (!pokemon) {
        return fetchPokemons();
      }
  
      setLoading(true)
      setNotFound(false)
      const result = await searchPokemon(pokemon)
      if (!result) {
        setNotFound(true)
      } else {
        setPokemons([result])
        setPage(0)
        setTotalPages(1)
      }
      setLoading(false)
    } 

  const notFoundImage = "../undraw_not_found.svg";

    return (
        <div>
        <GlobalStyle />
        <Navbar />
        <Searchbar onSearch={onSearchHandler} />
        {notFound ? (
          <NotFoundDiv>
            <img src={notFoundImage} />
            <p>Não encontramos esse pokemon, tente digitar novamente</p>
          </NotFoundDiv>
        ) : 
        (<Pokedex
        pokemons={pokemons}
        loading={loading}
        page={page}
          setPage={setPage}
          totalPages={totalPages}
          />)
        }
      </div>
    );
}

export default Pokemons;