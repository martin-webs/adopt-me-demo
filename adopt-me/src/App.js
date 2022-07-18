import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import {StrictMode}  from "react";

const App = () => {
  return (
    <StrictMode>
    <div id="my-app">
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
