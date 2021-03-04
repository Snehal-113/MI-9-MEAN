import React from 'react';
import ReactDOM from 'react-dom';

function ShowTime(){
  let loctime = new Date().toLocaleTimeString();
  const element = (
    <div>
      <h2>
        Hello Everyone!!
      </h2>
      <h3>Now it is {loctime} O'Clock</h3>
    </div>
  );
  ReactDOM.render(element,document.getElementById("root"));
}

function GetDate(){
  const time_element = <ShowTime date={new Date()} />
  ReactDOM.render(time_element,document.getElementById("root"));
}
setInterval(ShowTime,1000);
