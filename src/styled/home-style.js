import styled from "styled-components";
import { GlobalStyle } from "./global-style";

export const Section = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;

  div:nth-child(1) h1 {
      font-size: 60px;
  }
  div:nth-child(1) button {
    background: var(--btn-home);
    border: none;
    width: var(--medium-size);
    height: var(--little-size);
    border-radius: var(--little);
    cursor: pointer;
}
`;

export const Pikachu = styled.img`
  width: 850px;
  position: absolute;
  right: 8rem;
  z-index: 1;
`;

export const Pokebola = styled.img`
  width: 450px;
  position: relative;
  right: -43rem;
  top: 3rem;
  transform: rotate(354deg);
`;

export const PokebolaRocket = styled.img`
  width: 250px;
  position: relative;
  left: -34rem;
  top: -5rem;
  z-index: -2;
  transform: rotate(12deg);
`;
