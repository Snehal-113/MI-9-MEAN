import React from "react";
import ReactDom from "react-dom";

function Show() {
  let fullDate = new Date();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednessday",
    "Thursday",
    "Friday",
    "Saturday",

  ];
  let today = days[fullDate.getDay()];

  let time = fullDate.toLocaleTimeString();
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  let month = months[fullDate.getMonth()];

  return (
    <div>
      <h1>By Using Function Component</h1>
      <h2>Year is - {fullDate.getFullYear()} "Current Year"</h2>
      <h2>Month is - {month} "Current Month"</h2>
      <h2>Today Date is - {fullDate.getDate()}</h2>
      <h2>Today is - {today}</h2> 
      <h2>Time - {time}</h2>
      
    </div>

  );
}
ReactDom.render(<Show />,document.getElementById("root"));