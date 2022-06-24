import styled, { createGlobalStyle } from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletM: `(max-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopM: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
      overflow: hidden;
    }
    :root {
        /* Fonts */
        --font: 16px;
        --fontS: 25px;
        --fontM: 35px;
        --fontL: 60px;

        /* Fonts: Weight */
        --font-little: 14px;

        /* Colors */
        --btn-background: rgb(0, 110, 255);
        --btn-home: #ADD8E6;
        --white: #fff;
        --black: #000;
        --white-opacity: #fff9;
        --card-color: lightblue;

        /* Sizes */
        --padding-size: 0.5rem;
        --little: 0.3125rem;
        --medium: 1rem;
        --big: 1.5625rem;
        --little-size: 3.125rem;
        --middle-size: 4.375rem;
        --small-size: 6.25rem;
        --medium-size: 15.625rem;
        --big-size: 31.25rem;
        --pikachuS: 40.625rem;
        --pikachuM: 53.125rem;
        --very-big: 87.5rem;

        /* Borders */
        --borderBottom: 2px solid black;

        /* Shadows */
        --nav-shadow: 0px 18px 16px -12px rgb(0, 0, 0, 0.1);
    }
`;

export const Nav = styled.section`
  box-shadow: var(--nav-shadow);
  -webkit-box-shadow: var(--nav-shadow);
  -moz-box-shadow: var(--nav-shadow);
  width: 100%;

  div {
    height: var(--small-size);
    margin: 0 var(--little-size);
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: space-around;
  }

  img {
    width: var(--small-size);
    height: auto;
  }
  ul {
    display: flex;
    gap: var(--little-size);
  }
  ul,
  li a {
    list-style: none;
    text-decoration: none;
    font-size: var(--font);
  }
`;


