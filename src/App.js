import React from "react";
import Router from "./route";
import { GlobalStyle } from "./styled/global-style";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
