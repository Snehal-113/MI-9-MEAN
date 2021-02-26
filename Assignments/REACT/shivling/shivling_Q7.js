import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
// class component example
function Time() {
 let mm = new Date().getMinutes();
 let hh = new Date().getHours();

 let ss = new Date().getSeconds();

 // let e = new Date().getDaysInMonth();
  let  Day =new Date().getDay();
  let month=new Date().getMonth()
  return (
    <div>
      <h2>Hello everyone todays date is {Day}</h2>
      <h3>Now it is {hh} : {mm}: {ss} o'clock</h3>

    </div>
  );  
}
const comp_fun_element=<Time />
ReactDOM.render(<Time />, document.getElementById("root"));
setInterval(Time ,1000);