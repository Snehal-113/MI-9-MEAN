import React from "react";
import ReactDom from "react-dom";

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullDate: new Date(),
      date: "",
      day: "",
      year: "",
      month: "",
      time: "",
    };
  }
  render() {
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednessday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    this.state.day = days[this.state.fullDate.getDay()];
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
    this.state.month = months[this.state.fullDate.getMonth()];

    this.state.time = this.state.fullDate.toLocaleTimeString();
    this.state.year = this.state.fullDate.getFullYear();
    this.state.date = this.state.fullDate.getDate();

    return (
      <div>
        <h1>
          <u> By Using Class Component </u>
        </h1>

        <h1>
          The Year is : <i>{this.state.year}</i>
        </h1>
        <h2>
          The Month is :<i> {this.state.month}</i>
        </h2>
        <h2>
          The Day is : <i>{this.state.day}</i>
        </h2>
        <h2>
          Date : <i>{this.state.date}</i>
        </h2>
        <h2>
          Time is : <i> {this.state.time} </i>
        </h2>
      </div>
    );
  }
}
const element = <Show />;
ReactDom.render(element, document.getElementById("root"));
