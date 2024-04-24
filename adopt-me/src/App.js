import React, { StrictMode, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <StrictMode>
      <ThemeContext.Provider value={(theme, toggleTheme)}>
        <BrowserRouter>
          <div id={theme}>
            <header>
              <Link to={"/"}>
                <h1>Adopt Me</h1>
              </Link>
              <button className="mode-button" onClick={toggleTheme}>Mode</button>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
