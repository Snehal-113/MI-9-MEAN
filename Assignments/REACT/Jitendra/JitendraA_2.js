import React from "react";
import ReactDom from "react-dom";
const elem = < h1 > Hello Everyone < /h1>;
ReactDom.render(elem, document.getElementById("root"));

function Greeting(props) {
    return ( <
        div >
        <
        h1 > This is
        function component using this.props. < /h1> <
        h1 > Hello Good afternoon, { props.name } < /h1> <
        h2 > This is a
        function component < /h2> <
        /div>
    );
}

function Main_Comp() {
    return ( <
        div >
        <
        Greeting name = "Everyone" / >
        <
        Greeting name = "shubh" / >
        <
        Greeting name = "someone" / >
        <
        /div>
    );
}
const comp_fun_element = < Main_Comp / > ;
ReactDom.render(comp_fun_element, document.getElementById("root"));