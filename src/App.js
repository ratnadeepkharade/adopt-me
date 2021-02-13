const App = () => {
  return React.createElement(
    "div", // type of element
    { id: "something-important", class:"some-class" }, // attribute list for element
    React.createElement("h1", {}, "Adopt me!") // children element/s 
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
