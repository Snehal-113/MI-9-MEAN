import React from 'react';
import ReactDOM from 'react-dom';
function ShowTime(){
    let locdate = new Date().toLocaleDateString();
    let locday = new Date().getDay();
    let day;
    switch(locday){
      case 1: day = "Monday";
      break;
      case 2: day = "Monday";
      break;
      case 3: day = "Monday";
      break;
      case 4: day = "Monday";
      break;
      case 5: day = "Monday";
      break;
      case 6: day = "Monday";
      break;
      default: day = "Monday";
      break;
    }
    let loctime = new Date().toLocaleTimeString();
    let month = new Date().getMonth();
    let currentMonth;
    switch(month){
      case 1 : currentMonth = "January";
      break;
      case 2 : currentMonth = "February";
      break;
      case 3 : currentMonth = "March";
      break;
      case 4 : currentMonth = "April";
      break;
      case 5 : currentMonth = "May";
      break;
      case 6 : currentMonth = "June";
      break;
      case 7 : currentMonth = "July";
      break;
      case 8 : currentMonth = "August";
      break;
      case 9 : currentMonth = "September";
      break;
      case 10 : currentMonth = "October";
      break;
      case 11 : currentMonth = "November";
      break;
     default : currentMonth = "December";
      break;
    }
    let year = new Date().getFullYear();
    return(
        <div>
            <h2>Today is {locdate} </h2>
            <h2>Today is {day} </h2>
            <h2>Time is {loctime} </h2>
            <h2>Month is {currentMonth} </h2>
            <h2>Year is {year} </h2>
        </div>
    );
}
const comp_func_element = <ShowTime />;
ReactDOM.render(comp_func_element,document.getElementById("root"));