const App = () => {
  return React.createElement(
    "div",
    { id: "something-important", class:"some-class" }, // attribute list for element
    React.createElement("h1", {}, "Adopt me!")
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
