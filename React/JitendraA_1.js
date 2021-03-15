import React from "react";
import ReactDom from "react-dom";

function Greetings() {
    return ( <
        div >
        <
        h1 > Welcome To < /h1> <
        h2 > React World! < /h2> <
        /div>
    );
}
const comp = < Greetings / > ;
ReactDom.render(comp, document.getElementById("root"));