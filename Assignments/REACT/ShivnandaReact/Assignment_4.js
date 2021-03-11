import React, { Component } from "react";
import ReactDom from "react-dom";
function ShowTime() {
  let localtime = new Date().toLocaleTimeString();
  return(
    <div>
      <h1>Hello Everyone</h1>
      <h2>Time is{localtime} O'clock</h2>
    </div>
  )
}
ReactDom.render(<ShowTime />,document.getElementById("root"));
