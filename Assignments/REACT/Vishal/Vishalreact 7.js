import React from "react";
import ReactDom from "react-dom";
function ShowTime() {
    let date = new Date().toLocaleDateString();
    let day = new Date().getDay();
    let d;

    switch (day) {
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
        case 7:
            d = "Sunday";
            break;
    }
    const element = (
        <div>
            <h1>Hello</h1>

            <h1>Today is {d}</h1>
            <h1>Todays Date {date}</h1>
        </div>
    );

    ReactDom.render(element, document.getElementById("root"));
}

setInterval(ShowTime, 1000);
