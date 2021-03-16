import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
// reusable of  function using props.name
function Greeting(props) {
  return (
    <div>
      <h1>Good Afternoon ,{props.name}</h1>
      <p>thi is para para</p>
    </div>
  ); 
}
function Main() {
  return (
    <div>
      <Greeting name="Everyone" />
      <Greeting name="shivling" />
      <Greeting name="shiva" />

    </div>
  );  
}
const comp_fun_element=<Main />
ReactDOM.render(<Main />,document.getElementById("root"));