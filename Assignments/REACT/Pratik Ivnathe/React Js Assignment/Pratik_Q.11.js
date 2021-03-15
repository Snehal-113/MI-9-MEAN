
import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

  function Time() {    
  let date=new Date(i);
  let Cmonth=date.getMonth();
  let yr=date.getFullYear();
  let day=["Sunday","monday","tuesday","Wednesday","Thursday","Friday","Saturday"];
  var month=["january","february","March","April","May","June","july","August","september","Octomber","November","December"];

return (
     <div>
       <h2>Today Date is {i} </h2>
       <h1>Day is {day[date.getDay()]}</h1>
       <h1>Month is {month[Cmonth]}</h1>
       <h1>Year {yr}</h1>
     </div>
   );
 }
 let i=prompt("enter date");
 const comp_fun_element=<Time />
 ReactDOM.render(comp_fun_element, document.getElementById("root"));