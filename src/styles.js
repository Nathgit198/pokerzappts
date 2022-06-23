import styled, {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle `
    :root {
        /* Fonts */
        --fonts-body: Roboto, sans-serif;
        --fonts:heading: ;

        /* Fonts: Weight */

        /* Colors */
        --btn-background: rgb(0, 110, 255);
        --white: #fff;
        --black: #000;
        --white-opacity: #fff9;

        /* Sizes */
        --little: 0.3125rem;
        --medium: 1rem;
        --big: 1.5625rem;
        --little-size: 3.125rem;
        --middle-size: 4.375rem;
        --small-size: 100px;
        --medium-size: 250px;
        --big-size: 31.25rem;

        /* Borders */
        --borderBottom: 2px solid black;

        /* Shadows */
        --nav-shadow: 0px 18px 16px -12px rgb(0, 0, 0, 0.1);
    }
`;

export const Nav = styled.section`
    height: var(--small-size);

    box-shadow: var(--nav-shadow);
    -webkit-box-shadow: var(--nav-shadow);
    -moz-box-shadow: var(--nav-shadow);

    display: flex;
    align-items: center;

    img {
        width: var(--small-size);
        height: auto;
    }
`;

export const SearchbarContainer = styled.div `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: var(--medium);
    
    div input {
        width: var(--big-size);
        padding: var(--little);
        margin: var(--little);
        background: transparent;
        border: none;
        border-bottom: var(--borderBottom);
    }

    div button {
        background-color: var(--btn-background);
        color: var(--white);
        border: none;
        padding: var(--little);
        cursor: pointer;
    }
`;

export const PokedexHeader = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: var(--medium);
`;

export const Load = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const PaginationContainer = styled.div `
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

export const PokedexGrid = styled.div `
    display: grid;
    gap: var(--medium);
    grid-template-columns: repeat(6,0fr);
    justify-items: center;
    justify-content: center;
`;

export const PokemonCard = styled.div `
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;

    width: var(--medium-size);
    background: lightblue;
    border-radius: var(--medium);

    div img {
        width: var(--small-size);
        height: auto;
    }
`;

export const PokemonImage = styled.div `
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
    margin: 0 var(--medium);
`;

export const CardBody = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 140px;

    div {
        width: var(--middle-size);
        height: 10px;
    }
`;

export const CardTop = styled.h3 `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const PokemonType = styled.div `
    background: var(--white-opacity);
    border-radius: var(--medium);
    margin: var(--little);
    padding: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
`;