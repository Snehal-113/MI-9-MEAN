import React from "react";
import ReactDom from "react-dom";

function Greetings() {
  return (
    <div>
      <h1>Hello Guys</h1>
      <h2>How are you</h2>
    </div>
  );
}
const comp = <Greetings />;
ReactDom.render(comp, document.getElementById("root"));
