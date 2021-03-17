import React from "react";
import ReactDom from "react-dom";
function Greetings(){
    return (
        <div>
            <h1>Good  Afternoon</h1>
            <h3>This is a function</h3>
            </div>

    );
}
const comp_fun=<Greetings />;
ReactDom.render(comp_fun,document.getElementById("root"));