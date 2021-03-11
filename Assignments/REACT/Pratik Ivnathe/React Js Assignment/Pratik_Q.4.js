import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
function Greeting(props) {
    return (
      <div>
        <h1>Good Afternoon ,{props.abc}</h1>
               <p>how are you ,{props.name}</p>
      </div>
    ); 
  }
  const comp_fun_element=<Greeting abc="My Friend" name= "Ajay "/>
  ReactDOM.render(comp_fun_element,document.getElementById("root"));
  