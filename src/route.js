import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./views/Home";
import Pokemons from "./views/Pokemons";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element = { <Home /> } path="/" exact />
                <Route element = { <Pokemons /> } path="/pokemons" />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;