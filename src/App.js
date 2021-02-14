import React from "react";
import { render } from "react-dom";

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div", // type of element
    { id: "something-important", class: "some-class" }, // attribute list for element
    [
      React.createElement("h1", {}, "Adopt me!"), // children element/s
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese",
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        breed: "Cocktail",
      }),
      React.createElement(Pet, {
        name: "Doink",
        animal: "Cat",
        breed: "Mixed",
      }),
    ]
  );
};

render(React.createElement(App), document.getElementById("root"));
