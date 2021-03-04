import React from "react";
import ReactDom from "react-dom";

function ShowTime() {
  let localtime = new Date().toLocaleTimeString();
  const element = (
    <div>
      <h1>This is for time interval</h1>
      <h1>Hello </h1>
      <h1>time is {localtime}</h1>
    </div>
  );
  ReactDom.render(element, document.getElementById("root"));
}
setInterval(ShowTime, 1000);
