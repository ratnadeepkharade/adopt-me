import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1 id="something-important" className="some-class">
        Adopt Me!
      </h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
