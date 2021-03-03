import React, { Component } from "react";
import ReactDom from "react-dom";
class Greeting extends React.Component{
render(){
  return(
    <div>
      <h1> Hello This is Frist Assignment 1</h1>
      <h2>This is First React Program</h2>
    </div>
  );
}
}
ReactDom.render(<Greeting />,document.getElementById("root"));