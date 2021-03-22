import React from "react";
import ReactDom from "react-dom";
class ShowTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(getdate) };
    }
    render() {
        let day = this.state.date.getDay();
        let date1 = this.state.date.getDate();
        let month = this.state.date;
        let year = this.state.date.getFullYear();
        let d;
        switch (day) {
            case 0:
                d = "Sunday";
                break;
            case 1:
                d = "Monday";
                break;
            case 2:
                d = "Tuesday";
                break;
            case 3:
                d = "Wednesday";
                break;
            case 4:
                d = "Thursday";
                break;
            case 5:
                d = "Friday";
                break;
            case 6:
                d = "Saturday";
                break;
        }
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let month1 = months[month.getMonth()];
        return (
            <div>
                <h2>By Using Class Component</h2>
                <h3>Day : {d} </h3>
                <h3>Date : {date1} </h3>
                <h3>Month : {month1} </h3>
                <h3>Year : {year} </h3>
            </div>
        );
    }
}

var getdate = prompt("Enter the date MM/DD/YYYY");

const comp_fun_element = <ShowTime />;

ReactDom.render(comp_fun_element, document.getElementById("root"));
