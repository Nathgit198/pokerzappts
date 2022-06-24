import styled from "styled-components";
import { device, GlobalStyle } from "./global-style";

export const SearchbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: var(--big) var(--medium);
  flex-wrap: wrap;

  div input {
    padding: var(--little);
    margin: var(--little);
    background: transparent;
    border: none;
    border-bottom: var(--borderBottom);
  }
  div input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
  div button {
    width: var(--small-size);
    background-color: var(--btn-background);
    color: var(--white);
    border: none;
    padding: var(--little);
    cursor: pointer;
  }

  @media ${device.mobileS} {
    justify-content: flex-start;

    div input {
      width: var(--medium-size);
    }
  }
  @media ${device.laptop} {
    div input {
      width: var(--very-big);
    }
  }
  @media ${device.laptopM} {
    div input {
      width: var(--very-big);
    }
  }
`;

export const PokedexHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: var(--medium);
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--medium);

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const PokedexFlexbox = styled.div`
  display: flex;
  max-width: var(--very-big);
  flex-wrap: wrap;
  gap: var(--medium);
  justify-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const PokemonBody = styled.div`
  display: flex;
  justify-content: center;
`;

export const PokemonCard = styled.div`
  width: var(--medium-size);
  background: var(--card-color);
  border-radius: var(--medium);

  div img {
    width: var(--small-size);
    height: auto;
  }
`;

export const Text = styled.p`
  text-align: end;
  padding: var(--little);
`;

export const PokemonImage = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  margin: 0 var(--medium);
`;

export const CardBody = styled.div`
  div {
    width: var(--middle-size);
    height: var(--little);
  }
`;

export const CardTop = styled.h3`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PokemonType = styled.div`
  background: var(--white-opacity);
  border-radius: var(--medium);
  margin: var(--little);
  padding: var(--padding-size);

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-little);
`;

export const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: var(--big-size);
    margin: var(--medium);
  }
`;

export const Load = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: var(--small-size);
  
  max-width: var(--pikachuM);
  max-height: var(pikachuS);
  width: auto;
  height: auto;
`;
export const NotFoundDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;

  max-width: var(--pikachuM);
  max-height: var(pikachuS);
  width: auto;
  height: auto;

  img {
    width: var(--big-size);
    margin: var(--medium);
  }
`;
