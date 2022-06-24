import styled from "styled-components";
import { GlobalStyle, device } from "./global-style";

export const Section = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: var(--little-size);

  div:nth-child(1) h1 {
    font-size: var(--fontL);
  }
  div:nth-child(1) button {
    background: var(--btn-home);
    border: none;
    width: var(--medium-size);
    height: var(--little-size);
    border-radius: var(--little);
    cursor: pointer;
    transition: 0.4s;
  }
  div:nth-child(1) button:hover {
    opacity: 0.8;
  }
`;

export const Pikachu = styled.img`
  max-width: var(--pikachuM);
  max-height: var(pikachuS);
  width: auto;
  height: auto;

  @media ${device.mobileS} {
    width: 100%;
  }
  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
  }
`;
