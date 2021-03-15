import React from "react";
import ReactDom from "react-dom";
class ShowDay extends React.Component {

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
            "Wednesday",
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

        return ( <
            div >
            <
            h1 > By Using Class Component < /h1> <
            h1 > The Year is { this.state.year } < /h1> <
            h1 > The Month is { this.state.month } < /h1>  <
            h1 > The Day is { this.state.day } < /h1> <
            h1 > Date is { this.state.date } < /h1> <
            h1 > Time is { this.state.time } < /h1>  <
            /div> 
        );
    }
}
const element = < ShowDay / > ;
ReactDom.render(element, document.getElementById("root"));