import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
class Greeting extends React.Component
{
  render()
  {
    return (
      <div>
        <h1>Good Afternoon</h1>
        <h2>My friend this is class component</h2>
      </div>
    );
  }
}
const comp_fun_element=<Greeting />
ReactDOM.render(comp_fun_element,document.getElementById("root"));
