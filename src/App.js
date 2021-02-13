const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Luna"),
    React.createElement("h2", {}, "Dog"),
    React.createElement("h2", {}, "Havanese"),
  ]);
};

const App = () => {
  return React.createElement(
    "div", // type of element
    { id: "something-important", class: "some-class" }, // attribute list for element
    [
      React.createElement("h1", {}, "Adopt me!"), // children element/s
      React.createElement(Pet),
      React.createElement(Pet),
      React.createElement(Pet),
    ]
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
