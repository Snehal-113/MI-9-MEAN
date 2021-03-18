import React from "react";
import ReactDom from "react-dom";

function App() {
  return (
    <div>
      <h1>Hello, <b> Hruday </b> ..</h1>
      <h2>Welcome To React JS..</h2>
    </div>
  );
}
const component = <App />;
ReactDom.render(component, document.getElementById("root"));