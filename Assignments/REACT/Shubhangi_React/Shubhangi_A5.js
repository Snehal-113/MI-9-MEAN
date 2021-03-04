import React, { Component } from "react";
import ReactDom from "react-dom";
function ShowTime() {
  let localtime = new Date().toLocaleTimeString();
  return(
    <div>
      <h1>Time using function component</h1>
      <h1>Hello Everyone </h1>
      <h2>Time is {localtime}</h2>
    </div>
  )
}
ReactDom.render(<ShowTime />,document.getElementById("root"));