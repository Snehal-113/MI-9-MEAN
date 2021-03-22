import React from 'react';
import ReactDOM from 'react-dom';

function Greeting(props){
  return(
    <div>
      <h2>Good afternoon, {props.name}</h2>
      <h2>function component</h2>
      </div>
  );
}

const comp_func_element = <Greeting name="Everyone" />;
ReactDOM.render(comp_func_element,document.getElementById("root"));