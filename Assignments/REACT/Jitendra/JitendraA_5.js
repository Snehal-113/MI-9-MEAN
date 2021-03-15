import React from "react";
import ReactDom from "react-dom";

function ShowTime(props) {
    let localtime = props.date.toLocaleTimeString();
    return ( <
        div >
        <
        h1 > This is time interval using props < /h1> <
        h1 > Hello Everyone < /h1> <
        h2 > Time is { localtime } < /h2> <
        /div>
    );

}

function GetDate() {
    const edate = < ShowTime date = { new Date() }
    />;
    ReactDom.render(edate, document.getElementById("root"));
}
setInterval(GetDate, 1000)