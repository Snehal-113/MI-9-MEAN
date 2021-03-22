import React from "react";
import ReactDom from "react-dom";
function ShowYear() {
  
  let fullDate = new Date(input);
  let tday =fullDate.getDay();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
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
      <h1>The Year is {fullDate.getFullYear()}</h1>
      <h1>The Month is {month}</h1>
      <h1>The Day is{today}</h1>
      <h1>Date is{fullDate.getDate()}</h1>
      <h1>Time is{time}</h1>
    </div>
  );
}
let input = prompt("Enter Date yyyy/mm/dd");
ReactDom.render(<ShowYear />, document.getElementById("root"));
