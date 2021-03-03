import React from "react";
import ReactDom from "react-dom";

const ele = <h1>GOOD MORNING</h1>;
const para = <p>This is a paragraph</p>
console.log("Heading" +ele);
console.log("para" +para);

ReactDom.render(ele,document.getElementById("root"));
ReactDom.render(para,document.getElementById("hdr1"));

function Greeting(props){
    return (<div>
        <h2>GOOD AFTERNOON  {props.name}</h2>
        <p>This is a function component</p>
    </div>);
}

function Main_Comp(){
    return(
        <div>
            <Greeting name="Everyone" />
            <Greeting name="Santoshi" />
            <Greeting name="Nawkhare" />
        </div>
    );
}

const comp_fun_element=<Main_Comp />;
ReactDom.render(comp_fun_element,document.getElementById("root"));
