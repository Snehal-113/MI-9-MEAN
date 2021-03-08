import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

function ShowTime(){
  let loctime = new Date();
  let weekDay = loctime.getDay();
  let day;
switch(weekDay){
    case 1: day = "Monday";
    break;
    case 2: day =  "Tuesday";
    break;
    case 3: day = "Wednesday";
    break;
    case 4: day = "Thursday";
    break;
    case 5: day = "Friday";
    break;
    case 6: day = "Saturday";
    break;
    default: day = "Sunday";
}
  return (
    <div>
      <h2>
        Hello Everyone!!
      </h2>
      <h3>Today is {day}</h3>
    </div>
  );
}

const comp_func_element = <ShowTime />;
//const comp_func_element = <Greeting name="Everyone" title="tiwari"/>;
ReactDOM.render(comp_func_element,document.getElementById("root"));
//ReactDOM.render(<Greeting />,document.getElementById("root"