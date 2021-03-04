import React from 'react';
import ReactDOM from 'react-dom';

function ShowDay() {
    const d = new Date();
    const weekday = new Array(7);
    var date = d.getDate();
    var year = d.getFullYear();
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    const monthday = new Array(12);
    monthday[0] = "January";
    monthday[1] = "February";
    monthday[2] = "March";
    monthday[3] = "April";
    monthday[4] = "May";
    monthday[5] = "June";
    monthday[6] = "July";
    monthday[7] = "August";
    monthday[8] = "September";
    monthday[9] = "October";
    monthday[10] = "November";
    monthday[11] = "December";
    var n = weekday[d.getDay()];
    var m = monthday[d.getMonth()];
    return ( <
        div >
        <
        h1 > Today is { n } < /h1> <
        h2 > Now It 's {new Date().toLocaleTimeString()} O'
        Clock < /h2> <
        h3 > And date is { date } { m } { year } < /h3> <
        /div>
    );

}
const comp = < ShowDay / > ;
ReactDOM.render(comp, document.getElementById('header'));