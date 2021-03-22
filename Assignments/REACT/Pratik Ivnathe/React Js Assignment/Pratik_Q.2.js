import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
function Greeting()
{
  return (
  <div>
    <h2>Good Afternoon</h2>
    <h2>this function  component </h2>
  </div>
  );
}
const comp_fun_element=<Greeting />
ReactDOM.render(comp_fun_element, document.getElementById("root"));
