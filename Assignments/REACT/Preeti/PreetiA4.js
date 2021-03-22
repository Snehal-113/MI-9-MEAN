import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

function ShowTime(){
  let loctime = new Date().toLocaleTimeString();
  return (
    <div>
      <h2>
        Hello Everyone!!
      </h2>
      <h3>Now it is {loctime} O'Clock</h3>
    </div>
  );
}

const comp_func_element = <ShowTime />;
//const comp_func_element = <Greeting name="Everyone" title="tiwari"/>;
ReactDOM.render(comp_func_element,document.getElementById("root"));
//ReactDOM.render(<Greeting />,document.getElementById("root"));
