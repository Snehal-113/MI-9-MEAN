import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component{
  render(){
  return(
    <div>
      <h2>Good afternoon!!</h2>
      <h2> this is a class component</h2>
      </div>
  );
}}

const comp_func_element = <Greeting />;
ReactDOM.render(comp_func_element,document.getElementById("root"));
