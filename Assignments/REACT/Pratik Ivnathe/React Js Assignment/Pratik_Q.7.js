import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
function Time() {
    let d = new Date().getDaysInMonth();
    let  Day =new Date().getDay();
    let month=new Date().getMonth()
    return (
      <div>
        <h2>Hello everyone{Day}</h2>
        <h3>Now it is {d} o'clock</h3>
      </div>
    );  
  }
  const comp_fun_element=<Time />
  ReactDOM.render(comp_fun_element, document.getElementById("root"));
  setInterval(Time ,1000);
  