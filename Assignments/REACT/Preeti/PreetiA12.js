
import React from 'react';
import ReactDOM from 'react-dom';
let inputDate = prompt("Enter any date;");
class ShowTime extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date:new Date(inputDate)
    };
  }
  
  render(){
   let locdate =this.state.date.toLocaleDateString();
    let locday = this.state.date.getDay();
    let day;
    switch(locday){
      case 1: day = "Monday";
      break;
      case 2: day = "Tuesday";
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
      break;
    }
    let curtime = this.state.date.toLocaleTimeString();
    let month = this.state.date.getMonth();
    let currentMonth;
    switch(month){
      case 0 : currentMonth = "January";
      break;
      case 1 : currentMonth = "February";
      break;
      case 2 : currentMonth = "March";
      break;
      case 3 : currentMonth = "April";
      break;
      case 4 : currentMonth = "May";
      break;
      case 5 : currentMonth = "June";
      break;
      case 6 : currentMonth = "July";
      break;
      case 7 : currentMonth = "August";
      break;
      case 8 : currentMonth = "September";
      break;
      case 9 : currentMonth = "October";
      break;
      case 10 : currentMonth = "November";
      break;
     default : currentMonth = "December";
      break;
    }
    let year =this.state.date.getFullYear();
    return(
        <div>
          <h1>By using class component</h1>
            <h2>Entered date is {locdate} </h2>
            <h2>day is {day} </h2>
          <h2>Current time on {locdate} is {curtime}</h2>
            <h2>Month is {currentMonth} </h2>
            <h2>Year is {year} </h2>
        </div>
    );
}
}
const comp_func_element = <ShowTime />;
ReactDOM.render(comp_func_element,document.getElementById("root"));

