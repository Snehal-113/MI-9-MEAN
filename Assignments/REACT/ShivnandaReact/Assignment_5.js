import React from "react";
import ReactDom from "react-dom";
function ShowTime() {
  let localtime = new Date().toLocaleTimeString();
  const element = (
    <div>
      <h1> For automatic time change</h1>
      <h3>time is,{localtime}</h3>
    </div>
  );
 ReactDom.render(element,document.getElementById("root"));
}
setInterval(ShowTime,1000);