import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component{
  render(){
  return(
    <div>
      <h2>Good afternoon</h2>
      <h2>class component</h2>
      <h2>preeti</h2>
    </div>
  );
}}

const comp_func_element = <Greeting />;
//const comp_func_element = <Greeting name="Everyone" title="tiwari"/>;
ReactDOM.render(comp_func_element,document.getElementById("root"));
//ReactDOM.render(<Greeting />,document.getElementById("root"));
