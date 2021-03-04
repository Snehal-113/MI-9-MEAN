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

function Main_comp(){
    return (
        <div>
            <Greetings name="Everyone" />
            <Greetings name="Yashasvi" />
            <Greetings name="Priyanka" />
        </div>
    );
}
const comp_fun=<Main_comp />;
ReactDom.render(comp_fun,document.getElementById("root"));