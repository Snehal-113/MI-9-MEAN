import React from "react";
import ReactDom from "react-dom";
function ShowYear() {
  let dateinput = prompt("Enter Date yyyy/mm/dd", "1999/03/31");
  let fullDate = new Date(dateinput);
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
      <h1>
        {" "}
        Year is -<i>{fullDate.getFullYear()}</i>
      </h1>
      <h1>
        {" "}
        Month is -<i>{month}</i>
      </h1>
      <h1>
        {" "}
        Day is-<i>{today}</i>
      </h1>
      <h1>Date is - {fullDate.getDate()}</h1>
      <h1>
        Time is - <i>{time}</i>
      </h1>
    </div>
  );
}

ReactDom.render(<ShowYear />, document.getElementById("root"));
