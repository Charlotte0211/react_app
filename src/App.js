import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather app</h1>
        <Weather city="paris" />
      </header>
      <br />
      <footer>
        This project was coded by Charlotte Rivière and is{" "}
        <a href="https://github.com/Charlotte0211/react_app" target="_blank">
          open-sourced on GitHub{" "}
        </a>{" "}
        and hosted on{" "}
        <a href="https://enchanting-torte-2bd828.netlify.app/" target="_blank">
          Netlify.
        </a>
      </footer>
    </div>
  );
}

export default App;
